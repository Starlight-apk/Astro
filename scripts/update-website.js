import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// ========== 🔧 你需要填写的配置 ==========
const NETLIFY_TOKEN = 'nfp_VQwNBcCxwjjaWmMNphh8xMT5nQVc7neNc4bb';  // 在这里填你的 Token
const NETLIFY_SITE_ID = '049b32dd-22a1-421e-a0d6-05ee2223dabe';              // 在这里填你的 Site ID
// ======================================

// 精美的控制台输出颜色
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

// 精美打印函数
const print = {
  title: () => console.log(`\n${colors.bright}${colors.cyan}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`),
  header: (text) => console.log(`\n${colors.bright}${colors.magenta}✨ ${text}${colors.reset}`),
  info: (text) => console.log(`${colors.blue}📌 ${text}${colors.reset}`),
  success: (text) => console.log(`${colors.green}✅ ${text}${colors.reset}`),
  error: (text) => console.log(`${colors.red}❌ ${text}${colors.reset}`),
  line: () => console.log(`${colors.dim}─────────────────────────────────────────────────────────────${colors.reset}`),
};

// 旋转动画
class SpinnerAnimation {
  constructor() {
    this.frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    this.index = 0;
    this.interval = null;
  }

  start(message) {
    this.index = 0;
    if (this.interval) clearInterval(this.interval);
    
    process.stdout.write(`${colors.cyan}`);
    this.interval = setInterval(() => {
      const frame = this.frames[this.index % this.frames.length];
      process.stdout.write(`\r${frame} ${message}${colors.reset}`);
      this.index++;
    }, 80);
  }

  stop(successMessage) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    process.stdout.write(`\r${colors.green}✓ ${successMessage}${colors.reset}\n`);
  }
}

// 获取最新的 ZIP 文件
const getLatestZip = async () => {
  const zipDir = '/root/sd/';
  try {
    const files = await fs.readdir(zipDir);
    const zipFiles = files.filter(f => f.startsWith('build-') && f.endsWith('.zip'));
    if (zipFiles.length === 0) {
      throw new Error('未找到任何 build-*.zip 文件');
    }
    
    const filesWithStats = await Promise.all(
      zipFiles.map(async (file) => {
        const filePath = path.join(zipDir, file);
        const stats = await fs.stat(filePath);
        return { file, mtime: stats.mtime, path: filePath };
      })
    );
    
    filesWithStats.sort((a, b) => b.mtime - a.mtime);
    return filesWithStats[0];
  } catch (error) {
    print.error(`读取 ZIP 文件失败: ${error.message}`);
    throw error;
  }
};

// 通过 Netlify API 上传 ZIP 并部署
const deployToNetlify = async (zipPath, spinner) => {
  return new Promise(async (resolve, reject) => {
    try {
      // 读取 ZIP 文件为二进制数据
      const zipData = await fs.readFile(zipPath);
      
      spinner.start('正在上传到 Netlify...');
      
      // 使用 Node.js 原生 fetch（Node 18+ 支持）
      const response = await fetch(`https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/deploys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/zip',
          'Authorization': `Bearer ${NETLIFY_TOKEN}`
        },
        body: zipData
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Netlify API 错误 (${response.status}): ${errorText}`);
      }
      
      const result = await response.json();
      spinner.stop('上传完成');
      
      // 等待部署完成
      spinner.start('等待部署完成...');
      let deployState = result.state;
      let deployUrl = result.deploy_ssl_url || result.deploy_url;
      
      // 轮询检查部署状态（最多等待 60 秒）
      let attempts = 0;
      const maxAttempts = 30;
      
      while (deployState !== 'ready' && attempts < maxAttempts) {
        await new Promise(r => setTimeout(r, 2000));
        
        const statusResponse = await fetch(`https://api.netlify.com/api/v1/sites/${NETLIFY_SITE_ID}/deploys/${result.id}`, {
          headers: { 'Authorization': `Bearer ${NETLIFY_TOKEN}` }
        });
        
        if (statusResponse.ok) {
          const statusData = await statusResponse.json();
          deployState = statusData.state;
          deployUrl = statusData.deploy_ssl_url || statusData.deploy_url;
        }
        attempts++;
      }
      
      if (deployState === 'ready') {
        spinner.stop('部署完成');
        resolve({ deployUrl, deployId: result.id });
      } else {
        spinner.stop(`部署状态: ${deployState}`);
        reject(new Error(`部署未完成，最终状态: ${deployState}`));
      }
      
    } catch (error) {
      spinner.stop('上传失败');
      reject(error);
    }
  });
};

// 主推送函数
const deploy = async () => {
  const spinner = new SpinnerAnimation();
  
  try {
    print.title();
    print.header('🚀 开始部署到 Netlify');
    print.line();
    
    // 验证配置
    if (NETLIFY_TOKEN === '你的_Netlify_Personal_Access_Token' || NETLIFY_SITE_ID === '你的_Netlify_站点ID') {
      print.error('请先在脚本顶部填写 NETLIFY_TOKEN 和 NETLIFY_SITE_ID');
      process.exit(1);
    }
    
    // 1. 获取最新的 ZIP 文件
    print.info('正在查找最新的构建包...');
    const latestZip = await getLatestZip();
    const stats = await fs.stat(latestZip.path);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    
    print.success(`找到最新包: ${latestZip.file}`);
    console.log(`   ${colors.dim}大小: ${sizeMB} MB | 时间: ${latestZip.mtime.toLocaleString()}${colors.reset}`);
    print.line();
    
    // 2. 上传到 Netlify 并部署
    print.info('正在上传到 Netlify...');
    const { deployUrl, deployId } = await deployToNetlify(latestZip.path, spinner);
    
    print.line();
    print.success('部署成功！');
    console.log(`\n   ${colors.bright}🌐 访问地址: ${colors.cyan}https://starlight-apk.cn${colors.reset}`);
    console.log(`   ${colors.dim}📦 部署 ID: ${deployId}${colors.reset}`);
    print.title();
    
  } catch (error) {
    print.error(`部署失败: ${error.message}`);
    process.exit(1);
  }
};

// 执行部署
deploy();