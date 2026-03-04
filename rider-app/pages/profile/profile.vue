<template>
  <view class="profile-page">
    <!-- 顶部橙色背景区域 -->
    <view class="header-section">
      <view class="avatar-wrapper">
        <view class="avatar-circle">
          <uni-icons type="person" size="40" color="#94a3b8" />
        </view>
      </view>
      <text class="welcome-text">欢迎加入跑腿骑手</text>
      <text class="login-prompt">登录后开启接单赚钱之旅</text>
    </view>

    <!-- 登录按钮卡片 -->
    <view class="login-card">
      <button class="login-btn" @click="handleLogin">
        <text class="btn-text">点击登录 / 注册</text>
      </button>
    </view>

    <!-- 统计数据 -->
    <view class="stats-row">
      <view class="stat-item">
        <text class="stat-label">今日收入</text>
        <text class="stat-value">--</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">今日单量</text>
        <text class="stat-value">--</text>
      </view>
      <view class="stat-item">
        <text class="stat-label">服务分</text>
        <text class="stat-value">--</text>
      </view>
    </view>

    <!-- 底部导航 -->
    <BottomNav activeTab="profile" />
  </view>
</template>

<script>
import BottomNav from '@/components/BottomNav/BottomNav.vue'
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

export default {
  name: 'ProfilePage',
  components: {
    BottomNav,
    UniIcons
  },
  data() {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    handleLogin() {
      // TODO: 实现登录逻辑
      this.isLoggedIn = true
      uni.showToast({
        title: '请登录',
        icon: 'none'
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f8f7f5;
  height: 100%;
}

.profile-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 140rpx;

  /* 顶部橙色背景区域 */
  .header-section {
    position: relative;
    background-color: #ff8c00;
    padding: 120rpx 24rpx 40rpx;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar-wrapper {
      margin-bottom: 16rpx;

      .avatar-circle {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 4rpx solid rgba(255, 255, 255, 0.3);
      }
    }

    .welcome-text {
      font-size: 20px;
      font-weight: 700;
      color: #ffffff;
      text-align: center;
      margin-bottom: 8rpx;
    }

    .login-prompt {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
    }
  }

  /* 登录按钮卡片 */
  .login-card {
    position: relative;
    margin: -48rpx 24rpx 0;
    background-color: #fff;
    border-radius: 16rpx;
    padding: 24rpx;
    box-shadow: 0 8rpx 32rpx rgba(255, 140, 0, 0.15);
    z-index: 2;

    .login-btn {
      width: 100%;
      background-color: #ff8c00;
      color: #fff;
      border: none;
      padding: 20rpx 24rpx;
      border-radius: 12rpx;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        border: none;
      }
    }
  }

  /* 统计数据 */
  .stats-row {
    display: flex;
    gap: 16rpx;
    padding: 24rpx 16rpx;

    .stat-item {
      flex: 1;
      background-color: #fff;
      border-radius: 16rpx;
      padding: 24rpx 16rpx;
      text-align: center;

      .stat-label {
        font-size: 12px;
        color: #94a3b8;
        display: block;
        margin-bottom: 12rpx;
      }

      .stat-value {
        font-size: 24px;
        font-weight: 500;
        color: #94a3b8;
      }
    }
  }
}
</style>
