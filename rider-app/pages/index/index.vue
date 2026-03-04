<template>
  <view class="grab-lobby-page">
    <!-- 顶部导航栏 -->
    <view class="header">
      <view class="header-btn menu-btn">
        <uni-icons type="bars" size="22" color="#ff8c00" />
      </view>
      <text class="header-title">抢单大厅</text>
      <view class="header-btn notify-btn">
        <uni-icons type="notification" size="22" color="#ff8c00" />
      </view>
    </view>

    <!-- Tab 切换 -->
    <view class="tab-bar">
      <view
        class="tab-item"
        :class="{ active: currentTab === 'waiting' }"
        @click="switchTab('waiting')"
      >
        <text class="tab-text">待抢单</text>
      </view>
      <view
        class="tab-item"
        :class="{ active: currentTab === 'scheduled' }"
        @click="switchTab('scheduled')"
      >
        <text class="tab-text">预约单</text>
      </view>
    </view>

    <!-- 订单列表 -->
    <scroll-view class="order-list" scroll-y>
      <!-- 空状态 -->
      <view v-if="loading" class="loading-state">
        <uni-icons type="loading" size="32" color="#999" />
        <text class="loading-text">加载中...</text>
      </view>

      <view v-else-if="orderList.length === 0" class="empty-state">
        <uni-icons type="empty" size="64" color="#ccc" />
        <text class="empty-text">暂无订单</text>
      </view>

      <!-- 订单卡片 -->
      <view
        v-else
        v-for="(order, index) in orderList"
        :key="order._id || index"
        class="order-card"
        @click="navigateToOrder(order)"
      >
        <view class="card-body">
          <!-- 卡片头部 -->
          <view class="card-header">
            <view
              class="order-type-badge"
              :class="getOrderTypeClass(order.item_type)"
            >
              {{ order.item_type }}
            </view>
            <text class="order-price">¥ {{ order.total_price?.toFixed(2) || '0.00' }}</text>
          </view>

          <!-- 路线指示 -->
          <view class="route-info">
            <view class="route-indicator">
              <view class="dot start"></view>
              <view class="line"></view>
              <view class="dot end"></view>
            </view>
            <view class="route-details">
              <view class="route-item">
                <text class="route-place">
                  {{ order.sender_address?.detail || '取货地址' }}
                </text>
                <text class="route-dist">取货</text>
              </view>
              <view class="route-item">
                <text class="route-place">
                  {{ order.receiver_address?.detail || '送货地址' }}
                </text>
                <text class="route-dist">送货</text>
              </view>
            </view>
          </view>

          <!-- 卡片底部 -->
          <view class="card-footer">
            <view class="time-req">
              <uni-icons type="clock" size="14" color="#ff8c00" />
              <text class="time-text">
                {{ formatTime(order.create_time) }}
              </text>
            </view>
            <button class="grab-btn" @click.stop="grabOrder(order)">
              立即抢单
            </button>
          </view>
        </view>
      </view>
    </scroll-view>

    <!-- 底部导航 -->
    <BottomNav activeTab="grab" />
  </view>
</template>

<script>
import BottomNav from '@/components/BottomNav/BottomNav.vue'
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

// 云对象引用
const getOrder = uniCloud.importObject('get-order')

export default {
  name: 'GrabLobbyPage',
  components: {
    BottomNav,
    UniIcons
  },
  data() {
    return {
      currentTab: 'waiting',
      orderList: [],
      loading: false
    }
  },
  onLoad() {
    this.loadOrderList()
  },
  methods: {
    // 加载订单列表
    async loadOrderList() {
      this.loading = true
      try {
        const res = await getOrder.list({ tab: this.currentTab })
        if (res.data) {
          this.orderList = res.data
        } else {
          this.orderList = []
        }
      } catch (err) {
        console.error('加载订单列表失败:', err)
        uni.showToast({
          title: '加载失败',
          icon: 'none'
        })
        this.orderList = []
      } finally {
        this.loading = false
      }
    },
    // 切换 Tab
    switchTab(tab) {
      this.currentTab = tab
      this.loadOrderList()
    },
    // 获取订单类型样式类名
    getOrderTypeClass(itemType) {
      const typeMap = {
        '文件/证件': 'help-deliver',
        '生活用品': 'help-buy',
        '餐饮美食': 'help-buy',
        '鲜花蛋糕': 'help-buy',
        '其他': 'help-deliver'
      }
      return typeMap[itemType] || 'help-deliver'
    },
    // 格式化时间
    formatTime(timestamp) {
      if (!timestamp) return '刚刚发布'
      const date = new Date(timestamp)
      const now = new Date()
      const diff = now - date

      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)

      if (minutes < 1) return '刚刚发布'
      if (minutes < 60) return `${minutes}分钟前发布`
      if (hours < 24) return `${hours}小时前发布`
      return `${days}天前发布`
    },
    // 跳转到订单详情
    navigateToOrder(order) {
      uni.navigateTo({
        url: `/pages/detail/detail?id=${order._id}`
      })
    },
    // 抢单
    grabOrder(order) {
      uni.showModal({
        title: '确认抢单',
        content: `确定要抢这个订单吗？（¥${order.total_price?.toFixed(2) || '0.00'}）`,
        success: (res) => {
          if (res.confirm) {
            // TODO: 调用抢单云函数
            uni.showToast({
              title: '抢单成功',
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

.grab-lobby-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-bottom: 140rpx;
}

/* 顶部导航栏 */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 126rpx 24rpx 16rpx;
  background-color: #f8f7f5;

  .header-btn {
    width: 40rpx;
    height: 40rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(255, 140, 0, 0.1);
  }

  .header-title {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
  }
}

/* Tab 切换 */
.tab-bar {
  display: flex;
  background-color: #f8f7f5;
  padding: 0 16rpx;

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
      font-weight: 600;
      color: #64748b;
      transition: all 0.3s;
    }
  }
}

/* 订单列表 */
.order-list {
  flex: 1;
  padding: 0 16rpx;
  box-sizing: border-box;
}

/* 空状态 */
.loading-state,
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx 0;
  gap: 16rpx;
}

.loading-text,
.empty-text {
  font-size: 14px;
  color: #999;
}

.order-card {
  background-color: #fff;
  border-radius: 16rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);
  margin-bottom: 16rpx;
  overflow: hidden;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.98);
  }

  .card-body {
    padding: 20rpx;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20rpx;

    .order-type-badge {
      padding: 6rpx 12rpx;
      border-radius: 8rpx;
      font-size: 10px;
      font-weight: 700;

      &.help-deliver {
        background-color: #dbeafe;
        color: #2563eb;
      }

      &.help-buy {
        background-color: rgba(255, 140, 0, 0.1);
        color: #ff8c00;
      }
    }

    .order-price {
      font-size: 24px;
      font-weight: 700;
      color: #ff8c00;
    }
  }

  .route-info {
    display: flex;
    gap: 16rpx;
    margin-bottom: 20rpx;

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
        height: 48rpx;
        background-color: #e2e8f0;
        margin: 8rpx 0;
        border-radius: 2rpx;
      }
    }

    .route-details {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20rpx;

      .route-item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .route-place {
          font-size: 12px;
          font-weight: 500;
          color: #334155;
          flex: 1;
        }

        .route-dist {
          font-size: 10px;
          color: #64748b;
          font-weight: normal;
          margin-left: 16rpx;
          flex-shrink: 0;
        }
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 16rpx;
    border-top: 1rpx solid #f1f5f9;

    .time-req {
      display: flex;
      align-items: center;
      gap: 4rpx;
      color: #ff8c00;
      font-size: 10px;
      font-weight: 500;

      .time-text {
        flex: 1;
      }
    }

    .grab-btn {
      background-color: #ff8c00;
      color: #fff;
      border: none;
      padding: 12rpx 24rpx;
      border-radius: 8rpx;
      font-size: 12px;
      font-weight: 700;
      width: 80rpx;
      height: 32rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        border: none;
      }
    }
  }
}
</style>
