<template>
  <view class="active-order-page">
    <!-- 顶部导航栏 -->
    <view class="active-header">
      <view class="back-btn" @click="goBack">
        <uni-icons type="arrow-left" size="24" color="#0f172a" />
      </view>
      <text class="header-title">订单详情</text>
      <view class="placeholder"></view>

      <!-- 状态指示器 -->
      <view class="status-indicator">
        <view class="status-dot"></view>
        <text class="status-text">前往取货中</text>
        <text class="status-time">预计 12:45 前到达取货点</text>
      </view>
    </view>

    <!-- 地图区域 -->
    <view class="map-area">
      <view class="map-placeholder"></view>
      <view class="map-controls">
        <view class="map-btn" @click="centerLocation">
          <uni-icons type="location" size="24" color="#64748b" />
        </view>
        <view class="map-btn" @click="startNavigation">
          <uni-icons type="navigation" size="24" color="#64748b" />
        </view>
      </view>
    </view>

    <!-- 底部卡片 -->
    <view class="bottom-sheet">
      <!-- 拖动手柄 -->
      <view class="sheet-handle">
        <view class="handle-bar"></view>
      </view>

      <!-- 订单信息 -->
      <view class="order-info">
        <view class="order-tag">
          <text class="order-tag-text">帮我买</text>
        </view>
        <text class="order-no">#382910484</text>
        <text class="order-address">香颂·玫瑰庄园 C 区</text>
        <text class="order-distance">距离取货 850 米</text>
        <view class="order-price">
          <text class="order-price-value">¥15.50</text>
          <text class="order-price-label">配送费</text>
        </view>
      </view>

      <!-- 联系按钮 -->
      <view class="contact-btns">
        <view class="contact-btn call-btn" @click="callSender">
          <uni-icons type="call" size="20" color="#0f172a" />
          <text class="contact-btn-text">联系发件</text>
        </view>
        <view class="contact-btn chat-btn" @click="chatReceiver">
          <uni-icons type="chat" size="20" color="#0f172a" />
          <text class="contact-btn-text">联系收件</text>
        </view>
      </view>

      <!-- 确认取货按钮 -->
      <view class="pickup-confirm-btn" @click="confirmPickup">
        <text class="pickup-confirm-text">我已取货</text>
      </view>
    </view>
  </view>
</template>

<script>
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

export default {
  name: 'ActiveOrder',
  components: {
    UniIcons
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    centerLocation() {
      uni.showToast({
        title: '定位中...',
        icon: 'loading'
      })
    },
    startNavigation() {
      uni.showToast({
        title: '正在规划路线',
        icon: 'none'
      })
    },
    callSender() {
      uni.makePhoneCall({
        phoneNumber: '13800138000'
      })
    },
    chatReceiver() {
      uni.showToast({
        title: '功能开发中',
        icon: 'none'
      })
    },
    confirmPickup() {
      uni.showModal({
        title: '确认取货',
        content: '请确认您已到达取货点并取得货物',
        success: (res) => {
          if (res.confirm) {
            uni.showToast({
              title: '已确认取货',
              icon: 'success'
            })
          }
        }
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

.active-order-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 顶部导航栏 */
.active-header {
  position: relative;
  background-color: #fff;
  padding-bottom: 16rpx;

  .back-btn {
    position: absolute;
    top: 19rpx;
    left: 24rpx;
    width: 48rpx;
    height: 48rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 10;

    &:active {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .header-title {
    position: absolute;
    top: 19rpx;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
  }

  .placeholder {
    width: 48rpx;
  }

  /* 状态指示器 */
  .status-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 62rpx 0 16rpx;
    border-bottom: 1rpx solid #f1f5f9;

    .status-dot {
      width: 12rpx;
      height: 12rpx;
      border-radius: 50%;
      background-color: #ff8c00;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgba(255, 140, 0, 0.4);
        animation: pulse 2s infinite;
      }
    }

    .status-text {
      font-size: 20px;
      font-weight: 700;
      color: #ff8c00;
      margin-top: 8rpx;
    }

    .status-time {
      font-size: 12px;
      color: #64748b;
      margin-top: 4rpx;
    }
  }
}

/* 地图区域 */
.map-area {
  flex: 1;
  background-color: #e2e8f0;
  position: relative;

  .map-placeholder {
    width: 100%;
    height: 100%;
    background-color: #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-controls {
    position: absolute;
    top: 16rpx;
    right: 16rpx;
    display: flex;
    flex-direction: column;
    gap: 16rpx;

    .map-btn {
      width: 48rpx;
      height: 48rpx;
      background-color: #fff;
      border-radius: 8rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);

      &:active {
        background-color: #f1f5f9;
      }
    }
  }
}

/* 底部卡片 */
.bottom-sheet {
  background-color: #fff;
  border-radius: 32rpx 32rpx 0 0;
  padding: 24rpx 20rpx 40rpx;
  box-shadow: 0 -4rpx 24rpx rgba(0, 0, 0, 0.08);

  .sheet-handle {
    display: flex;
    justify-content: center;
    padding: 0 0 16rpx;

    .handle-bar {
      width: 40rpx;
      height: 4rpx;
      background-color: #e2e8f0;
      border-radius: 2rpx;
    }
  }

  /* 订单信息 */
  .order-info {
    position: relative;
    padding: 0 0 24rpx;
    border-bottom: 1rpx solid #f1f5f9;

    .order-tag {
      position: absolute;
      top: 0;
      left: 0;
      padding: 4rpx 12rpx;
      background-color: rgba(255, 140, 0, 0.1);
      border-radius: 4rpx;

      .order-tag-text {
        font-size: 9px;
        font-weight: 700;
        color: #ff8c00;
      }
    }

    .order-no {
      display: block;
      text-align: right;
      font-size: 10px;
      color: #94a3b8;
    }

    .order-address {
      display: block;
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      margin-top: 26rpx;
    }

    .order-distance {
      display: block;
      font-size: 12px;
      color: #64748b;
      margin-top: 8rpx;
    }

    .order-price {
      position: absolute;
      top: 0;
      right: 0;
      text-align: left;

      .order-price-value {
        display: block;
        font-size: 20px;
        font-weight: 700;
        color: #ff8c00;
      }

      .order-price-label {
        display: block;
        font-size: 10px;
        color: #94a3b8;
        margin-top: 8rpx;
      }
    }
  }

  /* 联系按钮 */
  .contact-btns {
    display: flex;
    gap: 20rpx;
    padding: 24rpx 0;

    .contact-btn {
      flex: 1;
      height: 44rpx;
      background-color: #f1f5f9;
      border-radius: 12rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8rpx;

      &.call-btn {
        &:active {
          background-color: #e2e8f0;
        }
      }

      &.chat-btn {
        opacity: 0.5;

        &:active {
          background-color: #e2e8f0;
        }
      }

      .contact-btn-text {
        font-size: 13px;
        font-weight: 600;
        color: #0f172a;
      }
    }
  }

  /* 确认取货按钮 */
  .pickup-confirm-btn {
    height: 52rpx;
    background-color: #ff8c00;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4rpx 16rpx rgba(255, 140, 0, 0.3);

    &:active {
      opacity: 0.9;
    }

    .pickup-confirm-text {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
