<template>
  <view class="success-page">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="back-btn" @click="goBack">
        <uni-icons type="arrow-left" size="24" color="#0f172a" />
      </view>
      <text class="header-title">抢单结果</text>
      <view class="placeholder"></view>
    </view>

    <!-- 成功图标 -->
    <view class="success-icon-wrapper">
      <view class="success-icon">
        <uni-icons type="checkmarkempty" size="48" color="#fff" />
      </view>
    </view>

    <!-- 成功文本 -->
    <text class="success-main-text">抢单成功</text>
    <text class="success-sub-text">请尽快前往取货地点</text>

    <!-- 订单摘要卡片 -->
    <view class="order-summary">
      <view class="summary-header">
        <view class="summary-tag">帮我送</view>
        <text class="summary-price">¥15.50</text>
      </view>

      <!-- 取货行 -->
      <view class="pickup-row">
        <view class="pickup-dot"></view>
        <view class="pickup-info">
          <text class="pickup-label">取货点</text>
          <text class="pickup-address">瑞幸咖啡 (国贸大厦店)</text>
        </view>
      </view>

      <!-- 送货行 -->
      <view class="delivery-row">
        <view class="delivery-dot"></view>
        <view class="delivery-info">
          <text class="delivery-label">送货点</text>
          <text class="delivery-address">朝阳区建外大街阳光小区</text>
        </view>
      </view>
    </view>

    <!-- 导航按钮 -->
    <view class="action-buttons">
      <button class="nav-btn" @click="goToNavigation">
        <uni-icons type="location" size="24" color="#fff" />
        <text class="nav-btn-text">开始导航</text>
      </button>
      <button class="detail-btn" @click="goToDetail">
        <text class="detail-btn-text">查看详情</text>
      </button>
    </view>
  </view>
</template>

<script>
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

export default {
  name: 'SuccessResult',
  components: {
    UniIcons
  },
  methods: {
    goBack() {
      uni.navigateBack()
    },
    goToNavigation() {
      uni.navigateTo({
        url: '/pages/active-order/active-order'
      })
    },
    goToDetail() {
      uni.navigateTo({
        url: '/pages/detail/detail'
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

.success-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 40rpx;
}

/* 顶部导航栏 */
.header {
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

  .header-title {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
  }

  .placeholder {
    width: 48rpx;
  }
}

/* 成功图标 */
.success-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 24rpx;

  .success-icon {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    background-color: #ff8c00;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* 成功文本 */
.success-main-text {
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
  display: block;
  margin-top: 24rpx;
}

.success-sub-text {
  font-size: 14px;
  color: #64748b;
  text-align: center;
  display: block;
  margin-top: 8rpx;
}

/* 订单摘要卡片 */
.order-summary {
  margin: 40rpx 24rpx 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
  padding: 24rpx;
  box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);

  .summary-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .summary-tag {
      padding: 6rpx 16rpx;
      background-color: rgba(255, 140, 0, 0.1);
      border-radius: 8rpx;
      font-size: 10px;
      font-weight: 700;
      color: #ff8c00;
    }

    .summary-price {
      font-size: 18px;
      font-weight: 700;
      color: #ff8c00;
    }
  }

  .pickup-row {
    display: flex;
    align-items: flex-start;
    gap: 16rpx;
    padding: 16rpx 0;
    border-top: 1rpx solid #f1f5f9;

    .pickup-dot {
      width: 16rpx;
      height: 16rpx;
      border-radius: 50%;
      background-color: #2563eb;
      flex-shrink: 0;
      margin-top: 6rpx;
    }

    .pickup-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4rpx;

      .pickup-label {
        font-size: 10px;
        color: #64748b;
      }

      .pickup-address {
        font-size: 13px;
        font-weight: 600;
        color: #0f172a;
      }
    }
  }

  .delivery-row {
    display: flex;
    align-items: flex-start;
    gap: 16rpx;
    padding: 16rpx 0;

    .delivery-dot {
      width: 16rpx;
      height: 16rpx;
      border-radius: 50%;
      background-color: #ff8c00;
      flex-shrink: 0;
      margin-top: 6rpx;
    }

    .delivery-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4rpx;

      .delivery-label {
        font-size: 10px;
        color: #64748b;
      }

      .delivery-address {
        font-size: 13px;
        font-weight: 600;
        color: #0f172a;
      }
    }
  }
}

/* 操作按钮 */
.action-buttons {
  padding: 0 24rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;

  .nav-btn {
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
    font-size: 14px;
    font-weight: 700;

    &::after {
      border: none;
    }
  }

  .detail-btn {
    width: 100%;
    height: 48rpx;
    background-color: #fff;
    color: #0f172a;
    border: 1rpx solid #e2e8f0;
    border-radius: 12rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;

    &::after {
      border: none;
    }
  }
}
</style>
