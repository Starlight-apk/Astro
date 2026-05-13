---
title: NebulaShell 部署教程——其实没你想的那么难
published: 2026-05-11
description: 源码直接跑，不用Docker不用Node。三种方式，总有一种适合懒人。
tags: [NebulaShell, 部署, 教程]
category: 项目
draft: false
---

## 前置条件

- **操作系统**：Linux、macOS、Windows（WSL2）
- **Python**：3.10 或更高版本
- **Git**：用于克隆代码

不需要 Docker。
不需要 Node.js。

## 方式一：源码直接跑

**第一步：克隆代码**

```bash
git clone https://github.com/starlight-apk/NebulaShell.git
cd NebulaShell
```

第二步：安装依赖

```bash
pip install -r requirements.txt
```

核心依赖：

· click：CLI 命令行
· cryptography：加密相关
· websockets：WebSocket 支持
· pyyaml：配置文件解析

就这么几个，没别的。

第三步：运行

```bash
python main.py
```

或者用 CLI 模式：

```bash
python main.py --help
```

看到帮助信息就说明跑起来了。

方式二：一键脚本（Linux/macOS）

懒人专用。

```bash
curl -fsSL https://raw.githubusercontent.com/starlight-apk/NebulaShell/main/scripts/install.sh | bash
```

脚本会自动：

· 检查 Python 版本
· 克隆代码
· 安装依赖
· 创建启动脚本

装完之后：

```bash
cd NebulaShell
./start.sh
```

方式三：手动（Windows WSL2）

Windows 用户建议用 WSL2。

第一步：装 WSL2

```bash
wsl --install
```

第二步：进 Ubuntu

```bash
wsl
```

第三步：按方式一或方式二操作

验证安装

跑起来之后，试试隐藏命令：

```bash
python main.py !!help
```

如果看到命令列表，说明安装成功。

再试试：

```bash
python main.py !!stats
```

看到成就统计，说明一切正常。

常见问题

1. Python 版本不对

```bash
python --version
```

确保是 3.10+。如果不是：

```bash
# Ubuntu/Debian
sudo apt install python3.10

# macOS
brew install python@3.10
```

2. 依赖装不上

```bash
pip install --upgrade pip
pip install -r requirements.txt --no-cache-dir
```

3. 权限问题

```bash
pip install --user -r requirements.txt
```

4. 想卸载

直接删文件夹就行：

```bash
rm -rf NebulaShell
```

成就数据在 oss/core/__pycache__/.validator_cache，想保留就备份一下。

下一步

跑起来之后可以：

· 装插件（等插件市场）
· 玩成就系统（!!help 看所有命令）
· 配 HTTP API（如果装了对应插件）

---

装完了。

有问题提 issue。
没问题的去刷成就。