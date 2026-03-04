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
│   │   └── tabbar/                 # 标签栏图标
│   │
│   ├── ☁️ uniCloud-aliyun/          # 云函数和数据库
│   │   ├── cloudfunctions/         # 云函数
│   │   └── database/               # 数据库 Schema
│   │
│   └── 📄 配置文件
│       ├── manifest.json           # 应用配置
│       ├── pages.json              # 页面路由
│       └── main.js                 # 入口文件
│
├── 🛵 rider-app/                   # 骑手端小程序
│   ├── 📄 pages/
│   │   ├── index/                  # 首页 / 抢单大厅
│   │   ├── active-order/           # 进行中订单
│   │   ├── detail/                 # 订单详情
│   │   ├── orders/                 # 订单历史
│   │   ├── profile/                # 骑手资料
│   │   ├── rider-code/             # 骑手二维码
│   │   └── success/                # 配送完成
│   │
│   ├── 🧩 components/
│   │   └── BottomNav/
│   │
│   ├── ☁️ uniCloud-aliyun/
│   └── 📄 配置文件
│
└── 📝 .gitignore                   # Git 忽略规则
```

---

## 🚦 快速开始

### 环境要求

| 需求 | 版本 | 说明 |
|------|------|------|
| Node.js | v16+ | JavaScript 运行环境 |
| HBuilderX | 最新版 | uniapp 官方 IDE |
| 微信开发者工具 | 最新版 | 微信小程序模拟器 |
| 微信账号 | - | 已注册小程序（AppID） |

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

## 📱 界面预览

> 即将添加...

---

## ☁️ 云函数

### 用户端
- `order` - 创建和管理配送订单

### 骑手端
- `get-order` - 获取可接订单列表

---

## 🤝 贡献指南

欢迎提交贡献！请随时提交 Pull Request。

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

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