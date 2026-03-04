<template>
  <view class="rider-code-page">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="header-left" @click="goBack">
        <uni-icons type="arrow-left" size="24" color="#1e293b" />
      </view>
      <text class="header-title">骑手码</text>
      <view class="header-right"></view>
    </view>

    <!-- 主要内容区域 -->
    <view class="content">
      <!-- 骑手码卡片 -->
      <view class="code-card">
        <view class="card-header">
          <view class="avatar-container">
            <image
              v-if="isLoggedIn"
              class="avatar"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
              mode="aspectFill"
            />
            <uni-icons v-else type="person" size="56" color="rgba(255,255,255,0.8)" />
          </view>
          <view class="user-info">
            <text class="user-name">{{ isLoggedIn ? userName : '未登录' }}</text>
            <view v-if="isLoggedIn" class="badge-row">
              <text class="badge">金牌骑手</text>
              <text class="rating">
                <uni-icons type="star" size="14" color="rgba(255,255,255,0.9)" />
                4.9
              </text>
            </view>
          </view>
        </view>

        <!-- 二维码区域 -->
        <view class="qr-section">
          <view class="qr-container">
            <!-- 模拟二维码 -->
            <view class="qr-code">
              <view class="qr-pattern">
                <view class="qr-corner top-left"></view>
                <view class="qr-corner top-right"></view>
                <view class="qr-corner bottom-left"></view>
                <view class="qr-center"></view>
              </view>
              <view class="qr-overlay">
                <uni-icons type="moped" size="28" color="#fff" />
                <text class="qr-label">闪电跑腿</text>
              </view>
            </view>
          </view>
          <text class="qr-tip">请商家扫描二维码验证身份</text>
        </view>

        <!-- 骑手编号 -->
        <view class="rider-id-section">
          <text class="id-label">骑手编号</text>
          <text class="id-value">{{ riderId }}</text>
        </view>

        <!-- 状态提示 -->
        <view class="status-section">
          <view class="status-indicator">
            <view class="status-dot"></view>
            <text class="status-text">已实名认证</text>
          </view>
          <view class="status-indicator">
            <view class="status-dot"></view>
            <text class="status-text">健康证有效</text>
          </view>
        </view>
      </view>

      <!-- 说明卡片 -->
      <view class="info-card">
        <view class="info-title">
          <uni-icons type="info" size="20" color="#ff8c00" />
          <text>使用说明</text>
        </view>
        <view class="info-list">
          <view class="info-item">
            <text class="info-number">1</text>
            <text class="info-text">到店后向商家出示骑手码</text>
          </view>
          <view class="info-item">
            <text class="info-number">2</text>
            <text class="info-text">商家扫描二维码验证身份</text>
          </view>
          <view class="info-item">
            <text class="info-number">3</text>
            <text class="info-text">验证完成后可开始配送</text>
          </view>
        </view>
      </view>

      <!-- 登录提示 -->
      <view v-if="!isLoggedIn" class="login-card">
        <text class="login-title">登录后开启接单赚钱之旅</text>
        <button class="login-btn" @click="handleLogin">
          <uni-icons type="login" size="20" color="#fff" />
          <text class="btn-text">立即登录 / 注册</text>
        </button>
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
  name: 'RiderCodePage',
  components: {
    BottomNav,
    UniIcons
  },
  data() {
    return {
      isLoggedIn: true,
      userName: '王大力',
      riderId: 'RD2026030001'
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    handleLogin() {
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

.rider-code-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 140rpx;
}

/* 顶部导航栏 */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24rpx 32rpx 16rpx;
  border-bottom: 1rpx solid #f1f5f9;

  .header-left,
  .header-right {
    width: 48rpx;
    height: 48rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-title {
    font-size: 18px;
    font-weight: 700;
    color: #1e293b;
    flex: 1;
    text-align: center;
  }
}

/* 主要内容区域 */
.content {
  padding: 32rpx 24rpx;
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

/* 骑手码卡片 */
.code-card {
  background: linear-gradient(135deg, #ff9500 0%, #ffb74d 100%);
  border-radius: 24rpx;
  padding: 40rpx 32rpx;
  box-shadow: 0 8rpx 32rpx rgba(255, 140, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100rpx;
    right: -100rpx;
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -60rpx;
    left: -60rpx;
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
  }

  .card-header {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 24rpx;
    margin-bottom: 40rpx;

    .avatar-container {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.25);
      border: 4rpx solid rgba(255, 255, 255, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);

      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .avatar-placeholder {
        font-size: 56px;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    .user-info {
      flex: 1;

      .user-name {
        display: block;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 12rpx;
      }

      .badge-row {
        display: flex;
        align-items: center;
        gap: 12rpx;

        .badge {
          padding: 4rpx 12rpx;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 8rpx;
          font-size: 12px;
          font-weight: 600;
          color: #fff;
          border: 1rpx solid rgba(255, 255, 255, 0.3);
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 4rpx;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.9);
        }
      }
    }
  }

  /* 二维码区域 */
  .qr-section {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16rpx;
    margin-bottom: 32rpx;

    .qr-container {
      background: #fff;
      padding: 24rpx;
      border-radius: 20rpx;
      box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);

      .qr-code {
        width: 280rpx;
        height: 280rpx;
        position: relative;
        background: #fff;
        border: 4rpx solid #f1f5f9;
        border-radius: 12rpx;

        .qr-pattern {
          width: 100%;
          height: 100%;
          position: relative;
          background: repeating-linear-gradient(
            45deg,
            #1e293b 0,
            #1e293b 8rpx,
            #fff 8rpx,
            #fff 16rpx
          );
          border-radius: 8rpx;
          overflow: hidden;
        }

        .qr-corner {
          position: absolute;
          width: 64rpx;
          height: 64rpx;
          border: 8rpx solid #1e293b;
          border-radius: 8rpx;

          &.top-left {
            top: 24rpx;
            left: 24rpx;
          }

          &.top-right {
            top: 24rpx;
            right: 24rpx;
          }

          &.bottom-left {
            bottom: 24rpx;
            left: 24rpx;
          }
        }

        .qr-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80rpx;
          height: 80rpx;
          background: #fff;
          border-radius: 12rpx;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qr-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 64rpx;
          height: 64rpx;
          background: #ff8c00;
          border-radius: 12rpx;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4rpx;

          .qr-label {
            font-size: 10px;
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }

    .qr-tip {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }
  }

  /* 骑手编号 */
  .rider-id-section {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rpx;
    margin-bottom: 24rpx;

    .id-label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }

    .id-value {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 2rpx;
    }
  }

  /* 状态提示 */
  .status-section {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: 32rpx;

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 8rpx;

      .status-dot {
        width: 12rpx;
        height: 12rpx;
        border-radius: 50%;
        background: #4ade80;
        box-shadow: 0 0 8rpx rgba(74, 222, 128, 0.5);
      }

      .status-text {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.95);
        font-weight: 500;
      }
    }
  }
}

/* 说明卡片 */
.info-card {
  background-color: #fff;
  border-radius: 20rpx;
  padding: 32rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);

  .info-title {
    display: flex;
    align-items: center;
    gap: 12rpx;
    margin-bottom: 24rpx;

    text {
      font-size: 16px;
      font-weight: 700;
      color: #1e293b;
    }
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 20rpx;

    .info-item {
      display: flex;
      align-items: flex-start;
      gap: 16rpx;

      .info-number {
        flex-shrink: 0;
        width: 40rpx;
        height: 40rpx;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff9500, #ffb74d);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
      }

      .info-text {
        flex: 1;
        font-size: 14px;
        color: #64748b;
        line-height: 1.6;
        padding-top: 8rpx;
      }
    }
  }
}

/* 登录提示卡片 */
.login-card {
  background-color: #fff;
  border-radius: 20rpx;
  padding: 32rpx;
  text-align: center;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);

  .login-title {
    display: block;
    font-size: 14px;
    color: #64748b;
    margin-bottom: 24rpx;
  }

  .login-btn {
    width: 100%;
    background: linear-gradient(135deg, #ff9500, #ffb74d);
    border: none;
    border-radius: 16rpx;
    padding: 20rpx 32rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rpx;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    box-shadow: 0 8rpx 24rpx rgba(255, 140, 0, 0.3);

    &::after {
      border: none;
    }

    .btn-text {
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
