# TabBar 图标说明

## 所需图标文件

请为 tabBar 准备以下 6 个 PNG 图标文件（81x81 像素推荐）：

### 预约图标
- `calendar.png` - 日历图标（灰色 #9CA3AF）
- `calendar-active.png` - 日历图标（橙色 #FF8C00）

### 订单图标
- `order.png` - 订单/列表图标（灰色 #9CA3AF）
- `order-active.png` - 订单/列表图标（橙色 #FF8C00）

### 我的图标
- `profile.png` - 用户图标（灰色 #9CA3AF）
- `profile-active.png` - 用户图标（橙色 #FF8C00）

## 获取图标的方式

### 方式一：使用 iconfont.cn
1. 访问 https://www.iconfont.cn/
2. 搜索 "calendar"、"order"、"user" 等关键词
3. 下载 PNG 格式，尺寸设置为 81x81
4. 使用图片编辑工具修改颜色

### 方式二：使用阿里巴巴矢量图标库
1. 访问 https://www.iconfont.cn/
2. 创建项目并添加图标
3. 下载 PNG 格式

### 方式三：在线生成
- https://www.appicon.co/
- https://realfavicongenerator.net/

### 方式四：使用 Emoji 转换（当前方案）
当前项目使用底部自定义导航栏，使用 Emoji 字符作为图标，
无需额外的图标文件。

## 图标设计规范

- 尺寸：81x81 像素（微信小程序推荐）
- 格式：PNG（支持透明背景）
- 颜色：
  - 默认状态：#9CA3AF（灰色）
  - 选中状态：#FF8C00（橙色主题色）
- 风格：线性或面性图标，保持简洁

## 添加图标后的配置

在 `pages.json` 中取消注释以下配置：

```json
"tabBar": {
  "list": [
    {
      "pagePath": "pages/index/index",
      "text": "预约",
      "iconPath": "static/tabbar/calendar.png",
      "selectedIconPath": "static/tabbar/calendar-active.png"
    }
  ]
}
```
