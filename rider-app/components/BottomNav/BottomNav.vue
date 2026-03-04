<template>
  <view class="bottom-nav">
    <view class="nav-content">
      <navigator
        v-for="item in navItems"
        :key="item.path"
        :url="item.path"
        :class="['nav-item', activeTab === item.tab ? 'active' : '']"
        hover-class="none"
      >
        <uni-icons
          :type="item.icon"
          :size="24"
          :color="activeTab === item.tab ? '#ff8c00' : '#94a3b8'"
          :filled="activeTab === item.tab"
          class="nav-icon"
        />
        <text class="nav-text">{{ item.text }}</text>
      </navigator>
    </view>
  </view>
</template>

<script>
import UniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'

export default {
  name: 'BottomNav',
  components: {
    UniIcons
  },
  props: {
    activeTab: {
      type: String,
      default: 'grab'
    }
  },
  data() {
    return {
      navItems: [
        { tab: 'grab', path: '/pages/index/index', icon: 'hand-up', text: '抢单' },
        { tab: 'orders', path: '/pages/orders/orders', icon: 'list', text: '订单' },
        { tab: 'profile', path: '/pages/profile/profile', icon: 'person', text: '我的' }
      ]
    }
  }
}
</script>

<style lang="scss">
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  border-top: 1rpx solid rgba(255, 140, 0, 0.1);
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
  z-index: 999;

  .nav-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8rpx 0;
    max-width: 750rpx;
    margin: 0 auto;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rpx;
    text-decoration: none;

    .nav-text {
      font-size: 10px;
      color: #94a3b8;
      font-weight: 500;
    }

    &.active {
      .nav-text {
        color: #ff8c00;
        font-weight: 700;
      }
    }
  }
}
</style>
