# 跑腿小程序 (Delivery Mini App)

微信跑腿小程序，包含用户端和骑手端两部分，基于 uniapp 开发。

## 功能特点

### 用户端 (user-app)
- 用户注册登录
- 位置定位与地图展示
- 下单叫跑腿服务
- 订单实时追踪
- 订单历史记录
- 在线支付功能
- 评价骑手服务

### 骑手端 (rider-app)
- 骑手注册登录
- 抢单大厅
- 订单抢单/接单
- 订单管理
- 收入统计
- 个人信息设置
- 跑单导航

## 技术栈

- **前端框架**: uniapp
- **开发语言**: Vue.js (Vue 2/3)
- **目标平台**: 微信小程序
- **云开发**: uniCloud (阿里云)

## 目录结构

```
delivery-mini-app/
├── user-app/           # 用户端小程序
│   ├── pages/         # 页面目录
│   ├── components/    # 组件目录
│   ├── static/        # 静态资源
│   ├── uni_modules/   # uniapp 模块
│   ├── uniCloud-aliyun/  # 云函数
│   ├── pages.json     # 页面配置
│   ├── manifest.json # 应用配置
│   └── main.js        # 入口文件
├── rider-app/         # 骑手端小程序
│   ├── pages/         # 页面目录
│   ├── components/    # 组件目录
│   ├── static/        # 静态资源
│   ├── uni_modules/   # uniapp 模块
│   ├── uniCloud-aliyun/  # 云函数
│   ├── pages.json     # 页面配置
│   ├── manifest.json # 应用配置
│   └── main.js        # 入口文件
└── .gitignore         # Git 忽略配置
```

## 快速开始

### 环境要求

- Node.js (推荐 v16+)
- HBuilderX (uniapp 官方开发工具)
- 微信开发者工具

### 运行项目

1. 下载或克隆项目
2. 使用 HBuilderX 打开 `user-app` 或 `rider-app` 目录
3. 点击运行 -> 运行到微信开发者工具
4. 或点击运行 -> 运行到浏览器

### 微信开发者工具配置

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 在 HBuilderX 中设置微信开发者工具路径
3. 确保已在微信公众平台注册小程序并获取 AppID

## 界面预览

用户端：
- 首页（地图下单）
- 订单列表
- 个人中心

骑手端：
- 抢单大厅
- 订单管理
- 我的收入

## License

MIT License

---

如有问题，欢迎提交 Issue。