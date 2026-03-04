<template>
  <view class="order-management-page">
    <!-- 顶部固定区域 -->
    <view class="fixed-header">
      <view class="header-bar">
        <text class="page-title">订单管理</text>
        <view class="income-display">
          <text class="income-label">今日收益:</text>
          <text class="income-amount">¥286.50</text>
        </view>
      </view>

      <!-- Tab 切换 -->
      <view class="tab-bar">
        <view class="tab-item active" @click="switchTab('all')">
          <text class="tab-text">全部</text>
        </view>
        <view class="tab-item" @click="switchTab('ongoing')">
          <text class="tab-text">进行中</text>
        </view>
        <view class="tab-item" @click="switchTab('completed')">
          <text class="tab-text">已完成</text>
        </view>
      </view>
    </view>

    <!-- 订单列表 -->
    <scroll-view class="order-list" scroll-y>
      <!-- 订单卡片 -->
      <view class="order-card">
        <view class="card-header">
          <view class="order-meta">
            <text class="order-no">单号：24050812345</text>
            <view class="urgent-tag">
              <text class="urgent-text">加急</text>
            </view>
          </view>
          <text class="order-status">配送中</text>
        </view>

        <view class="card-body">
          <view class="route-info">
            <view class="route-indicator">
              <view class="dot start"></view>
              <view class="line"></view>
              <view class="dot end"></view>
            </view>
            <view class="route-details">
              <view class="route-section">
                <text class="route-label">起点 (取件)</text>
                <text class="route-place">万达广场 3 号门 A102</text>
              </view>
              <view class="route-section">
                <text class="route-label">终点 (送件)</text>
                <text class="route-place">国际金融中心 B 座 2201 室</text>
              </view>
            </view>
          </view>
        </view>

        <view class="card-footer">
          <view class="earnings-info">
            <text class="earnings-label">预计收益</text>
            <text class="earnings-amount">¥18.50</text>
          </view>
          <button class="view-btn" @click="navigateTo('/pages/active-order/active-order')">
            查看详情
          </button>
        </view>
      </view>

      <!-- 更多订单 -->
      <view class="order-card">
        <view class="card-header">
          <view class="order-meta">
            <text class="order-no">单号：24050812346</text>
          </view>
          <text class="order-status completed">已完成</text>
        </view>

        <view class="card-body">
          <view class="route-info">
            <view class="route-indicator">
              <view class="dot start"></view>
              <view class="line"></view>
              <view class="dot end"></view>
            </view>
            <view class="route-details">
              <view class="route-section">
                <text class="route-label">起点 (取件)</text>
                <text class="route-place">环球金融中心 A 座</text>
              </view>
              <view class="route-section">
                <text class="route-label">终点 (送件)</text>
                <text class="route-place">望京 SOHO T3 1802</text>
              </view>
            </view>
          </view>
        </view>

        <view class="card-footer">
          <view class="earnings-info">
            <text class="earnings-label">收益</text>
            <text class="earnings-amount">¥22.00</text>
          </view>
          <button class="view-btn secondary" @click="navigateTo('/pages/detail/detail')">
            查看详情
          </button>
        </view>
      </view>
    </scroll-view>

    <!-- 悬浮按钮 -->
    <view class="floating-buttons">
      <view class="float-btn location-btn">
        <uni-icons type="location" size="24" color="#64748b" />
      </view>
      <view class="float-btn refresh-btn">
        <uni-icons type="refresh" size="24" color="#fff" />
      </view>
    </view>

    <!-- 底部导航 -->
    <BottomNav activeTab="orders" />
  </view>
</template>

<script>
import BottomNav from '@/components/BottomNav/BottomNav.vue'
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

export default {
  name: 'OrderManagementPage',
  components: {
    BottomNav,
    UniIcons
  },
  data() {
    return {
      currentTab: 'all'
    }
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab
      const tabNames = {
        'all': '全部',
        'ongoing': '进行中',
        'completed': '已完成'
      }
      uni.showToast({
        title: tabNames[tab],
        icon: 'none'
      })
    },
    navigateTo(url) {
      uni.navigateTo({
        url
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

.order-management-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 140rpx;
}

/* 顶部固定区域 */
.fixed-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #fff;
  border-bottom: 1rpx solid #f1f5f9;
}

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 106rpx 24rpx 20rpx;

  .page-title {
    font-size: 20px;
    font-weight: 700;
    color: #0f172a;
  }

  .income-display {
    display: flex;
    align-items: center;
    gap: 8rpx;

    .income-label {
      font-size: 12px;
      color: #64748b;
    }

    .income-amount {
      font-size: 18px;
      font-weight: 700;
      color: #ff8c00;
    }
  }
}

.tab-bar {
  display: flex;
  border-top: 1rpx solid #f1f5f9;

  .tab-item {
    flex: 1;
    padding: 20rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 4rpx solid transparent;

    &.active {
      border-bottom-color: #ff8c00;

      .tab-text {
        color: #ff8c00;
      }
    }

    .tab-text {
      font-size: 14px;
      font-weight: 500;
      color: #64748b;
      transition: all 0.3s;
    }
  }
}

/* 订单列表 */
.order-list {
  flex: 1;
  padding: 16rpx;
  box-sizing: border-box;
}

.order-card {
  background-color: #fff;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
  margin-bottom: 16rpx;
  overflow: hidden;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    border-bottom: 1rpx solid #f1f5f9;

    .order-meta {
      display: flex;
      align-items: center;
      gap: 12rpx;

      .order-no {
        font-size: 11px;
        color: #94a3b8;
      }

      .urgent-tag {
        padding: 4rpx 10rpx;
        background-color: rgba(255, 140, 0, 0.1);
        border-radius: 10rpx;

        .urgent-text {
          font-size: 10px;
          font-weight: 700;
          color: #ff8c00;
        }
      }
    }

    .order-status {
      font-size: 13px;
      font-weight: 600;
      color: #ff8c00;

      &.completed {
        color: #22c55e;
      }
    }
  }

  .card-body {
    padding: 20rpx;
  }

  .route-info {
    display: flex;
    gap: 20rpx;

    .route-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 16rpx;
      flex-shrink: 0;

      .dot {
        width: 16rpx;
        height: 16rpx;
        border-radius: 50%;

        &.start {
          background-color: #22c55e;
        }

        &.end {
          background-color: #ff8c00;
        }
      }

      .line {
        width: 4rpx;
        height: 64rpx;
        background-color: #f1f5f9;
        margin: 8rpx 0;
        border-radius: 2rpx;
      }
    }

    .route-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20rpx;

      .route-section {
        display: flex;
        flex-direction: column;
        gap: 4rpx;

        .route-label {
          font-size: 10px;
          color: #94a3b8;
        }

        .route-place {
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
        }
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16rpx 20rpx;
    border-top: 1rpx solid #f1f5f9;

    .earnings-info {
      display: flex;
      flex-direction: column;

      .earnings-label {
        font-size: 10px;
        color: #94a3b8;
        margin-bottom: 4rpx;
      }

      .earnings-amount {
        font-size: 18px;
        font-weight: 700;
        color: #0f172a;
      }
    }

    .view-btn {
      background-color: #ff8c00;
      color: #fff;
      border: none;
      padding: 12rpx 24rpx;
      border-radius: 8rpx;
      font-size: 11px;
      font-weight: 600;
      width: 96rpx;
      height: 28rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        border: none;
      }

      &.secondary {
        background-color: #fff;
        color: #0f172a;
        border: 1rpx solid #e2e8f0;
      }
    }
  }
}

/* 悬浮按钮 */
.floating-buttons {
  position: fixed;
  bottom: 160rpx;
  right: 24rpx;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  z-index: 99;

  .float-btn {
    width: 56rpx;
    height: 56rpx;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.15);
    border: 1rpx solid #e2e8f0;

    &.location-btn {
      background-color: #fff;
      color: #64748b;
    }

    &.refresh-btn {
      background-color: #ff8c00;
      color: #fff;
      box-shadow: 0 8rpx 24rpx rgba(255, 140, 0, 0.35);
    }
  }
}
</style>
