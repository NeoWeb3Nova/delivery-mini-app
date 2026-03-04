<div align="center">

# 🚀 跑腿小程序

### 微信跑腿小程序 | WeChat Delivery Mini Program

[![Platform](https://img.shields.io/badge/Platform-WeChat%20Mini%20Program-blue?style=flat-square)](https://developers.weixin.qq.com/miniprogram/dev/framework/)
[![Framework](https://img.shields.io/badge/Framework-uniapp-60C657?style=flat-square)](https://uniapp.dcloud.net.cn/)
[![Vue](https://img.shields.io/badge/Vue-2.x-42b883?style=flat-square)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Cloud](https://img.shields.io/badge/Cloud-uniCloud-orange?style=flat-square)](https://uniapp.dcloud.net.cn/uniCloud/)

*一个完整的配送平台，连接用户与骑手，实现无缝的配送体验*

*[English](./README_en.md)*

</div>

---

## 📋 项目简介

跑腿小程序是一款功能完备的微信配送平台，连接需要配送服务的用户与配送骑手。项目基于 **uniapp** 和 **Vue.js** 开发，提供两个独立的客户端：

- **用户端** - 用户下单、订单管理、实时追踪
- **骑手端** - 抢单大厅、订单配送、收入统计

项目使用 **uniCloud**（阿里云）提供无服务器后端服务，实现订单实时匹配、状态追踪和双向沟通。

---

## 📱 界面预览

### 用户端 (User App)

![用户端预览](./user-app/user-image.png)

### 骑手端 (Rider App)

![骑手端预览](./rider-app/rider-image.png)

---

## 🎨 设计原型

本项目的 UI 设计原型使用 **Pencil MCP** 工具构建。Pencil 是一个专业的设计文件工具，支持：

- **跨平台设计** - 同时输出 Web、iOS、Android 多平台设计稿
- **团队协作** - 设计与开发无缝衔接
- **代码生成** - 支持导出为多种开发框架的组件代码

### 设计文件位置

| 应用 | 设计文件 |
|------|----------|
| 用户端 | `user-app/pencil-user.pen` |
| 骑手端 | `rider-app/pencil-rider.pen` |

> **注意**: `.pen` 文件需要使用 Pencil 工具打开，可从 [Pencil 官网](https://pencil.evolus.vn/) 下载安装。

---

## ✨ 功能特性

### 🧑‍💼 用户端 (`user-app/`)

| 功能 | 描述 |
|------|------|
| 📍 **位置定位** | GPS 定位和地图集成，精准设置配送地址 |
| 📝 **下单服务** | 简洁的订单表单，支持物品详情、配送地址和备注 |
| 📦 **订单追踪** | 实时订单状态更新，从下单到完成全程可见 |
| 📋 **订单历史** | 完整的订单历史记录，支持筛选和搜索 |
| 💳 **在线支付** | 流畅的支付流程，支持订单结算 |
| ⭐ **评价系统** | 配送完成后的评分和反馈 |
| 👤 **个人中心** | 用户资料、收货地址、偏好设置 |

**页面列表**: 首页、下单页面、订单成功、订单列表、订单详情、个人中心、预约配送、我的

### 🛵 骑手端 (`rider-app/`)

| 功能 | 描述 |
|------|------|
| 🎯 **抢单大厅** | 浏览和筛选可接的配送订单 |
| 📲 **一键抢单** | 快速抢单，附带震动反馈 |
| 📊 **订单管理** | 进行中订单追踪和历史记录 |
| 💰 **收入统计** | 实时收入统计和明细查看 |
| 🗺️ **跑单导航** | 内置地图导航，精准到达目的地 |
| 👤 **个人设置** | 骑手资料、接单状态、偏好配置 |

**页面列表**: 首页（抢单大厅）、进行中订单、订单详情、订单历史、个人中心、骑手码、完成配送

### 🔄 通用组件

- **BottomNav** - 自定义底部导航栏
- **OrderCard** - 通用订单卡片组件
- **TabBar** - 自定义标签栏

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [uniapp](https://uniapp.dcloud.net.cn/) - 跨平台小程序开发框架 |
| 语言 | [Vue.js 2.x](https://vuejs.org/) - 渐进式 JavaScript 框架 |
| 平台 | 微信小程序 |
| 后端 | [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) - 无服务器云服务（阿里云） |
| 数据库 | NoSQL（uniCloud MongoDB 兼容） |
| UI 组件 | uni-ui、SCSS |
| 构建工具 | HBuilderX |
| 设计工具 | Pencil MCP |

---

## 📁 项目结构

```
delivery-mini-app/
│
├── 📦 user-app/                    # 用户端小程序
│   ├── 📄 pages/                   # 页面组件
│   │   ├── index/                  # 首页
│   │   ├── create-order/           # 下单页面
│   │   ├── order-success/          # 订单成功
│   │   ├── orders/                 # 订单列表
│   │   ├── order/                  # 订单详情
│   │   ├── profile/                # 个人中心
│   │   ├── reservation/            # 预约配送
│   │   └── mine/                   # 我的
│   │
│   ├── 🧩 components/              # 可复用组件
│   │   ├── BottomNav/              # 底部导航
│   │   ├── OrderCard/              # 订单卡片
│   │   └── TabBar/                 # 标签栏
│   │
│   ├── 📁 static/                  # 静态资源
│   │   ├── user-image.png          # 用户端预览图
│   │   └── tabbar/                 # 标签栏图标
│   │
│   ├── ✏️ pencil-user.pen           # Pencil 设计原型
│   │
│   ├── ☁️ uniCloud-aliyun/         # 云函数和数据库
│   │   ├── cloudfunctions/        # 云函数
│   │   └── database/              # 数据库 Schema
│   │
│   └── 📄 配置文件
│       ├── manifest.json           # 应用配置
│       ├── pages.json              # 页面路由
│       └── main.js                 # 入口文件
│
├── 🛵 rider-app/                   # 骑手端小程序
│   ├── 📄 pages/
│   │   ├── index/                  # 首页 / 抢单大厅
│   │   ├── active-order/          # 进行中订单
│   │   ├── detail/                # 订单详情
│   │   ├── orders/                # 订单历史
│   │   ├── profile/              # 骑手资料
│   │   ├── rider-code/           # 骑手二维码
│   │   └── success/              # 配送完成
│   │
│   ├── 🧩 components/
│   │   └── BottomNav/
│   │
│   ├── 📁 static/
│   │   └── rider-image.png        # 骑手端预览图
│   │
│   ├── ✏️ pencil-rider.pen         # Pencil 设计原型
│   │
│   ├── ☁️ uniCloud-aliyun/
│   └── 📄 配置文件
│
├── 📝 README.md                    # 中文版自述文件
├── 📝 README_en.md                 # English README
└── 📝 .gitignore                   # Git 忽略规则
```

---

## 🚦 快速开始

### 环境要求

| 需求 | 说明 |
|------|------|
| **HBuilderX** | uniapp 官方 IDE，必需开发工具，[下载](https://www.dcloud.io/hbuilderx.html) |
| 微信开发者工具 | 微信小程序模拟器，[下载](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) |
| 微信账号 | 已注册小程序（获取 AppID），[微信公众平台](https://mp.weixin.qq.com/) |

### 安装运行

```bash
# 1. 克隆仓库
git clone https://github.com/NeoWeb3Nova/delivery-mini-app.git
cd delivery-mini-app

# 2. 用 HBuilderX 打开
# 文件 -> 打开目录 -> 选择 user-app 或 rider-app

# 3. 运行应用
# 点击"运行" -> "运行到小程序模拟器" -> "微信开发者工具"
```

### 微信配置

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 在 [微信公众平台](https://mp.weixin.qq.com/) 注册小程序
3. 获取你的 AppID
4. 在 `manifest.json` 中配置你的 AppID
5. 在 HBuilderX 偏好设置中设置微信开发者工具路径

---

## ☁️ 云函数

### 用户端
- `order` - 创建和管理配送订单

### 骑手端
- `get-order` - 获取可接订单列表

---

## 🤝 贡献指南

欢迎为本项目贡献代码！请遵循以下步骤：

### 开发流程

1. **安装环境**
   - 下载并安装 [HBuilderX](https://www.dcloud.io/hbuilderx.html)
   - 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

2. ** Fork 项目**
   - 点击页面右上角的 Fork 按钮

3. **克隆项目**
   ```bash
   git clone https://github.com/你的用户名/delivery-mini-app.git
   cd delivery-mini-app
   ```

4. **创建分支**
   ```bash
   # 用户端功能开发
   git checkout -b feature/user-app-功能名

   # 骑手端功能开发
   git checkout -b feature/rider-app-功能名

   # Bug 修复
   git checkout -b fix/问题描述
   ```

5. **开发调试**
   - 用 HBuilderX 打开 `user-app` 或 `rider-app` 目录
   - 修改代码后在 HBuilderX 中运行到微信开发者工具预览

6. **提交代码**
   ```bash
   git add .
   git commit -m '描述你的更改'
   ```

7. **推送分支**
   ```bash
   git push origin 你的分支名
   ```

8. **提交 PR**
   - 在 GitHub 上创建 Pull Request
   - 描述清楚修改内容和原因

### 代码规范

- 使用 Vue 2.x 语法
- 遵循 uniapp 组件规范
- 页面和组件命名使用小写字母和连字符
- 云函数使用 JavaScript

### 注意事项

- 请确保代码可以正常运行后再提交 PR
- 如果涉及云函数修改，请一并提交数据库 Schema 变更
- 更新对应的 README 文档（如果有新增功能）

---

## 📄 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解更多。

---

## 📞 支持

如果遇到任何问题或有疑问：

- 🐛 [提交 Issue](https://github.com/NeoWeb3Nova/delivery-mini-app/issues)
- 💬 讨论：发起讨论

---

<div align="center">

**⭐ 如果对你有帮助，请为本项目点个 Star！**

由 ❤️ 使用 uniapp + Vue.js 构建

</div>