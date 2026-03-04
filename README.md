<div align="center">

# 🚀 Delivery Mini App

### 微信跑腿小程序 | WeChat Delivery Mini Program

[![Platform](https://img.shields.io/badge/Platform-WeChat%20Mini%20Program-blue?style=flat-square)](https://developers.weixin.qq.com/miniprogram/dev/framework/)
[![Framework](https://img.shields.io/badge/Framework-uniapp-60C657?style=flat-square)](https://uniapp.dcloud.net.cn/)
[![Vue](https://img.shields.io/badge/Vue-2.x-42b883?style=flat-square)](https://vuejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Cloud](https://img.shields.io/badge/Cloud-uniCloud-orange?style=flat-square)](https://uniapp.dcloud.net.cn/uniCloud/)

*A full-featured delivery platform enabling seamless interaction between customers and riders*

</div>

---

## 📋 Overview

Delivery Mini App is a comprehensive WeChat mini program that connects customers who need delivery services with available riders. Built with **uniapp** and **Vue.js**, the application provides a complete ecosystem with two dedicated clients:

- **User App** - For customers to place delivery orders
- **Rider App** - For delivery personnel to accept and fulfill orders

The project leverages **uniCloud** (Aliyun) for serverless backend services, enabling real-time order matching, tracking, and seamless communication between both parties.

---

## ✨ Features

### 🧑‍💼 User App (`user-app/`)

| Feature | Description |
|---------|-------------|
| **📍 Location Services** | GPS-based positioning and map integration for precise delivery addresses |
| **📝 Order Creation** | Intuitive order form with item details, delivery address, and special instructions |
| **📦 Order Tracking** | Real-time order status updates from placement to completion |
| **📋 Order History** | Complete order history with filtering and search capabilities |
| **💳 Payment Integration** | Seamless payment flow for order settlement |
| **⭐ Rating System** | Post-delivery ratings and feedback for riders |
| **👤 Profile Management** | User profile, addresses, and preferences management |

**Pages**: Home, Create Order, Order Success, Order List, Orders, Profile, Reservation, Mine

### 🛵 Rider App (`rider-app/`)

| Feature | Description |
|---------|-------------|
| **🎯 Order Lobby** | Browse and filter available delivery requests |
| **📲 One-Click Accept** | Quick order acceptance with haptic feedback |
| **📊 Order Management** | Active order tracking and history management |
| **💰 Earnings Dashboard** | Real-time income tracking and statistics |
| **🗺️ Navigation Integration** | Built-in map navigation to delivery locations |
| **👤 Profile Settings** | Rider profile, availability status, and preferences |

**Pages**: Home, Active Order, Order Detail, Orders, Profile, Rider Code, Success

### 🔄 Common Components

- **BottomNav** - Customizable bottom navigation bar
- **OrderCard** - Reusable order display card
- **TabBar** - Custom tab bar component

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [uniapp](https://uniapp.dcloud.net.cn/) - Cross-platform mini program framework |
| **Language** | [Vue.js 2.x](https://vuejs.org/) - Progressive JavaScript framework |
| **Platform** | WeChat Mini Program |
| **Backend** | [uniCloud](https://uniapp.dcloud.net.cn/uniCloud/) - Serverless cloud services (Aliyun) |
| **Database** | NoSQL (MongoDB-compatible via uniCloud) |
| **UI Components** | uni-ui, SCSS |
| **Build Tool** | HBuilderX |

---

## 📁 Project Structure

```
delivery-mini-app/
│
├── 📦 user-app/                    # Customer-side application
│   ├── 📄 pages/                   # Page components
│   │   ├── index/                  # Home page
│   │   ├── create-order/           # Order creation
│   │   ├── order-success/          # Order confirmation
│   │   ├── orders/                 # Order list
│   │   ├── order/                  # Order detail
│   │   ├── profile/                # User profile
│   │   ├── reservation/            # Scheduled deliveries
│   │   └── mine/                   # Personal center
│   │
│   ├── 🧩 components/              # Reusable components
│   │   ├── BottomNav/              # Bottom navigation
│   │   ├── OrderCard/             # Order card component
│   │   └── TabBar/                # Tab bar
│   │
│   ├── 📁 static/                  # Static assets
│   │   └── tabbar/                 # Tab bar icons
│   │
│   ├── ☁️ uniCloud-aliyun/        # Cloud functions & database
│   │   ├── cloudfunctions/         # Serverless functions
│   │   └── database/              # Database schemas
│   │
│   └── 📄 Configuration
│       ├── manifest.json           # App configuration
│       ├── pages.json              # Page routing
│       └── main.js                 # Entry point
│
├── 🛵 rider-app/                   # Rider-side application
│   ├── 📄 pages/
│   │   ├── index/                  # Home / Order lobby
│   │   ├── active-order/          # Current delivery
│   │   ├── detail/                # Order detail
│   │   ├── orders/                # Order history
│   │   ├── profile/               # Rider profile
│   │   ├── rider-code/            # QR code for customers
│   │   └── success/               # Delivery complete
│   │
│   ├── 🧩 components/
│   │   └── BottomNav/
│   │
│   ├── ☁️ uniCloud-aliyun/
│   └── 📄 Configuration files
│
└── 📝 .gitignore                   # Git ignore rules
```

---

## 🚦 Getting Started

### Prerequisites

| Requirement | Version | Description |
|------------|---------|-------------|
| Node.js | v16+ | JavaScript runtime |
| HBuilderX | Latest | Official uniapp IDE |
| WeChat DevTools | Latest | WeChat mini program simulator |
| WeChat Account | - | Registered mini program (AppID) |

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/NeoWeb3Nova/delivery-mini-app.git
cd delivery-mini-app

# 2. Open in HBuilderX
# File -> Open Directory -> Select user-app or rider-app

# 3. Run the application
# Click "Run" -> "Run to Mini Program Simulator" -> "WeChat DevTools"
```

### WeChat Configuration

1. Download and install [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/en/dev/devtools/download.html)
2. Register a mini program at [WeChat Official Accounts Platform](https://mp.weixin.qq.com/)
3. Obtain your AppID
4. Configure `manifest.json` with your AppID
5. Set WeChat DevTools path in HBuilderX preferences

---

## 📱 Screenshots

> Coming soon...

<!--
### User App
| Home | Create Order | Order List | Profile |
|------|-------------|------------|---------|
| ![Home]() | ![Create Order]() | ![Orders]() | ![Profile]() |

### Rider App
| Lobby | Active Order | Orders | Earnings |
|-------|--------------|--------|----------|
| ![Lobby]() | ![Active Order]() | ![Orders]() | ![Earnings]() |
-->

---

## ☁️ Cloud Functions

### User App
- `order` - Create and manage delivery orders

### Rider App
- `get-order` - Fetch available orders for riders

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Support

If you encounter any issues or have questions:

- 📧 Email: (your email)
- 🐛 [Open an Issue](https://github.com/NeoWeb3Nova/delivery-mini-app/issues)
- 💬 Discussion: Start a discussion

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Built with ❤️ using uniapp + Vue.js

</div>