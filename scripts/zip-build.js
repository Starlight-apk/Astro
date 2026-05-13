import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// 输出目录路径
const outDir = './dist';
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

// 获取当前 Git 分支名
const getGitBranch = () => {
  return new Promise((resolve) => {
    exec('git rev-parse --abbrev-ref HEAD', { cwd: projectRoot }, (error, stdout) => {
      if (error) resolve('unknown');
      else resolve(stdout.trim());
    });
  });
};

// 打包函数
const zipBuild = async () => {
  try {
    // 检查输出目录是否存在
    try {
      await fs.access(outDir);
    } catch (error) {
      console.error(`❌ 输出目录不存在: ${outDir}`);
      process.exit(1);
    }

    const branch = await getGitBranch();
    const finalZipName = branch !== 'unknown' 
      ? `build-${branch}-${timestamp}.zip`
      : `build-${timestamp}.zip`;
    const finalZipPath = path.join('/root/sd/', finalZipName);

    console.log(`📦 正在打包构建产物...`);
    console.log(`   源目录: ${outDir}`);
    console.log(`   目标文件: ${finalZipPath}`);

    // 打包
    exec(`cd ${outDir} && zip -r "${finalZipPath}" .`, async (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ 打包失败: ${error.message}`);
        console.error(stderr);
        process.exit(1);
      }
      
      // 获取文件大小
      const stats = await fs.stat(finalZipPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`✅ 打包完成!`);
      console.log(`   文件: ${finalZipPath}`);
      console.log(`   大小: ${sizeMB} MB`);
      
      console.log(`✨ 完成! 时间: ${new Date().toLocaleString()}`);
    });
  } catch (error) {
    console.error('❌ 打包过程出错:', error);
    process.exit(1);
  }
};

// 执行打包
zipBuild();