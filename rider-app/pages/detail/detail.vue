<template>
  <view class="detail-page">
    <!-- 顶部导航栏 -->
    <view class="top-bar">
      <view class="back-btn" @click="goBack">
        <uni-icons type="arrow-left" size="24" color="#0f172a" />
      </view>
      <text class="page-title">抢单详情</text>
      <view class="placeholder"></view>
    </view>

    <!-- 价格卡片 -->
    <view class="income-card">
      <view class="income-header">
        <text class="income-label">预计收入</text>
        <view class="bonus-tag">
          <text class="bonus-text">高额补贴</text>
        </view>
      </view>
      <view class="income-amount-row">
        <text class="income-value">¥28.50</text>
        <text class="income-origin">¥22.00</text>
      </view>
      <view class="income-detail">
        <uni-icons type="info" size="14" color="#ff8c00" />
        <text class="income-detail-text">含夜间补助 ¥5.00 + 距离补贴 ¥3.50</text>
      </view>
    </view>

    <!-- 地址卡片 -->
    <view class="address-card">
      <!-- 取件地址 -->
      <view class="address-section">
        <view class="address-icon-wrapper">
          <view class="address-dot pickup-dot"></view>
        </view>
        <view class="address-info">
          <text class="address-title">环球金融中心 A 座</text>
          <text class="address-detail">朝阳区东三环中路 1 号 ****</text>
        </view>
        <text class="address-dist">1.2km</text>
      </view>

      <!-- 送货地址 -->
      <view class="address-section">
        <view class="address-icon-wrapper">
          <view class="address-dot delivery-dot"></view>
        </view>
        <view class="address-info">
          <text class="address-title">望京 SOHO T3</text>
          <text class="address-detail">朝阳区阜安路 ****</text>
        </view>
        <text class="address-dist">5.8km</text>
      </view>
    </view>

    <!-- 信息卡片 -->
    <view class="info-card">
      <view class="info-row">
        <text class="info-label">物品类型</text>
        <text class="info-value">鲜花蛋糕 (易碎)</text>
      </view>
      <view class="info-row">
        <text class="info-label">送达时间</text>
        <text class="info-value highlight">18:30 前送达</text>
      </view>
    </view>

    <!-- 底部抢单按钮 -->
    <view class="grab-action">
      <button class="grab-btn" @click="handleGrab">
        <uni-icons type="bolt" size="24" color="#fff" />
        <text class="grab-text">立即抢单</text>
      </button>
    </view>
  </view>
</template>

<script>
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

export default {
  name: 'OrderDetail',
  components: {
    UniIcons
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    handleGrab() {
      uni.navigateTo({
        url: '/pages/success/success'
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f8f7f5;
  min-height: 100vh;
}

.detail-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 140rpx;
}

/* 顶部导航栏 */
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 126rpx 24rpx 16rpx;
  background-color: #f8f7f5;

  .back-btn {
    width: 48rpx;
    height: 48rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .page-title {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
  }

  .placeholder {
    width: 48rpx;
  }
}

/* 价格卡片 */
.income-card {
  margin: 0 16rpx;
  padding: 24rpx;
  background-color: rgba(255, 140, 0, 0.1);
  border-radius: 16rpx;

  .income-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16rpx;

    .income-label {
      font-size: 14px;
      color: #64748b;
      font-weight: 500;
    }

    .bonus-tag {
      padding: 4rpx 12rpx;
      background-color: #ff8c00;
      border-radius: 10rpx;

      .bonus-text {
        font-size: 10px;
        font-weight: 700;
        color: #fff;
      }
    }
  }

  .income-amount-row {
    display: flex;
    align-items: baseline;
    gap: 8rpx;
    margin-bottom: 8rpx;

    .income-value {
      font-size: 32px;
      font-weight: 700;
      color: #ff8c00;
    }

    .income-origin {
      font-size: 14px;
      color: rgba(255, 140, 0, 0.6);
      text-decoration: line-through;
    }
  }

  .income-detail {
    display: flex;
    align-items: center;
    gap: 4rpx;
    color: #ff8c00;
    font-size: 10px;
    font-weight: 500;

    .income-detail-text {
      flex: 1;
    }
  }
}

/* 地址卡片 */
.address-card {
  margin: 16rpx;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);

  .address-section {
    display: flex;
    align-items: flex-start;
    gap: 16rpx;
    padding: 16rpx 0;

    &:not(:last-child) {
      border-bottom: 1rpx solid #f1f5f9;
    }

    .address-icon-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .address-dot {
        width: 24rpx;
        height: 24rpx;
        border-radius: 50%;

        &.pickup-dot {
          background-color: #22c55e;
        }

        &.delivery-dot {
          background-color: #ff8c00;
        }
      }
    }

    .address-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4rpx;

      .address-title {
        font-size: 16px;
        font-weight: 700;
        color: #0f172a;
      }

      .address-detail {
        font-size: 12px;
        color: #64748b;
      }
    }

    .address-dist {
      font-size: 12px;
      color: #ff8c00;
      font-weight: 500;
    }
  }
}

/* 信息卡片 */
.info-card {
  margin: 0 16rpx;
  padding: 20rpx;
  background-color: #fff;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16rpx 0;

    &:not(:last-child) {
      border-bottom: 1rpx solid #f1f5f9;
    }

    .info-label {
      font-size: 12px;
      color: #64748b;
    }

    .info-value {
      font-size: 12px;
      color: #0f172a;
      font-weight: 500;

      &.highlight {
        color: #ff8c00;
        font-weight: 700;
      }
    }
  }
}

/* 底部抢单按钮 */
.grab-action {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 20rpx 24rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));

  .grab-btn {
    width: 100%;
    height: 48rpx;
    background-color: #ff8c00;
    color: #fff;
    border: none;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rpx;
    font-size: 18px;
    font-weight: 700;

    &::after {
      border: none;
    }
  }
}
</style>
