<template>
	<view class="container">
		<!-- Header -->
		<view class="header">
			<view class="back-icon" @click="goBack">
				<text>‹</text>
			</view>
			<text class="title">我的订单</text>
			<view class="placeholder"></view>
		</view>

		<!-- Tab Navigation -->
		<view class="tab-nav">
			<view
				class="tab-item"
				:class="{ active: currentTab === 'all' }"
				@click="currentTab = 'all'"
			>
				<text :class="['tab-text', currentTab === 'all' ? 'active' : '']">全部</text>
			</view>
			<view class="tab-indicator" :style="{ left: tabIndicatorLeft }"></view>
			<view
				class="tab-item"
				:class="{ active: currentTab === 'progress' }"
				@click="currentTab = 'progress'"
			>
				<text :class="['tab-text', currentTab === 'progress' ? 'active' : '']">进行中</text>
			</view>
			<view
				class="tab-item"
				:class="{ active: currentTab === 'completed' }"
				@click="currentTab = 'completed'"
			>
				<text :class="['tab-text', currentTab === 'completed' ? 'active' : '']">已完成</text>
			</view>
		</view>

		<!-- Order List -->
		<view class="order-list">
			<view
				class="order-card"
				v-for="(order, index) in filteredOrders"
				:key="order.id"
				@click="goToOrderDetail(order.id)"
			>
				<!-- Order Header -->
				<view class="order-header">
					<view class="icon-container" :style="{ backgroundColor: order.iconBg }">
						<text class="order-icon">{{ order.icon }}</text>
					</view>
					<view class="order-info">
						<text class="order-title">{{ order.title }}</text>
						<text class="order-number">{{ order.orderNumber }}</text>
					</view>
					<view
						class="status-badge"
						:style="{ backgroundColor: order.statusBg, color: order.statusColor }"
					>
						{{ order.status }}
					</view>
				</view>

				<!-- Order Footer -->
				<view class="order-footer">
					<text class="order-time">{{ order.orderTime }}</text>
					<text class="order-price">¥ {{ order.price.toFixed(2) }}</text>
				</view>
			</view>

			<!-- Empty State -->
			<view class="empty-state" v-if="filteredOrders.length === 0">
				<text class="empty-icon">📦</text>
				<text class="empty-text">暂无订单</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 'all',
			orders: [
				{
					id: 1,
					title: '帮我买 - 瑞幸咖啡',
					orderNumber: 'RUN2023102701',
					status: '待取货',
					statusBg: '#FFF7ED',
					statusColor: '#FF8C00',
					icon: '🛍',
					iconBg: '#FFF7ED',
					orderTime: '2023-10-27 14:30',
					price: 15.0,
					tab: 'progress'
				},
				{
					id: 2,
					title: '帮我送 - 文件资料',
					orderNumber: 'RUN2023102705',
					status: '进行中',
					statusBg: '#DBEAFE',
					statusColor: '#3B82F6',
					icon: '📦',
					iconBg: '#DBEAFE',
					orderTime: '2023-10-27 10:15',
					price: 12.0,
					tab: 'progress'
				},
				{
					id: 3,
					title: '代排队 - 餐厅取号',
					orderNumber: 'RUN2023102688',
					status: '已送达',
					statusBg: '#F3F4F6',
					statusColor: '#6B7280',
					icon: '🚚',
					iconBg: '#F3F4F6',
					orderTime: '2023-10-26 19:20',
					price: 20.0,
					tab: 'completed'
				}
			]
		}
	},
	computed: {
		tabIndicatorLeft() {
			if (this.currentTab === 'all') return '0%'
			if (this.currentTab === 'progress') return '33.33%'
			return '66.66%'
		},
		filteredOrders() {
			if (this.currentTab === 'all') {
				return this.orders
			}
			return this.orders.filter(order => order.tab === this.currentTab)
		}
	},
	methods: {
		goBack() {
			uni.navigateBack()
		},
		goToOrderDetail(id) {
			uni.navigateTo({ url: `/pages/order-detail/order-detail?id=${id}` })
		},
		switchTab(tab) {
			if (tab === 'calendar') {
				uni.switchTab({ url: '/pages/index/index' })
			} else if (tab === 'profile') {
				uni.switchTab({ url: '/pages/profile/profile' })
			}
		}
	}
}
</script>

<style lang="scss">
page {
	background-color: #F8F8F8;
}

.container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

/* Header */
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32rpx;
	height: 112rpx;
	background-color: #FFFFFF;

	.back-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48rpx;
		height: 48rpx;

		text {
			font-size: 48rpx;
			color: #1A1A1A;
		}
	}

	.title {
		font-size: 36rpx;
		font-weight: 700;
		color: #1A1A1A;
	}

	.placeholder {
		width: 48rpx;
	}
}

/* Tab Navigation */
.tab-nav {
	display: flex;
	position: relative;
	background-color: #FFFFFF;
	height: 104rpx;
	margin-top: 2rpx;

	.tab-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		.tab-text {
			font-size: 30rpx;
			font-weight: 500;
			color: #9CA3AF;
			transition: all 0.3s;

			&.active {
				font-weight: 700;
				color: #FF8C00;
			}
		}
	}

	.tab-indicator {
		position: absolute;
		bottom: 0;
		width: 33.33%;
		height: 6rpx;
		background-color: #FF8C00;
		transition: left 0.3s;
	}
}

/* Order List */
.order-list {
	flex: 1;
	padding: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 24rpx;
}

/* Order Card */
.order-card {
	background-color: #FFFFFF;
	border-radius: 24rpx;
	padding: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 24rpx;

	.order-header {
		display: flex;
		align-items: center;
		gap: 24rpx;

		.icon-container {
			width: 80rpx;
			height: 80rpx;
			border-radius: 16rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.order-icon {
				font-size: 48rpx;
			}
		}

		.order-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 8rpx;

			.order-title {
				font-size: 32rpx;
				font-weight: 700;
				color: #1A1A1A;
			}

			.order-number {
				font-size: 24rpx;
				color: #9CA3AF;
			}
		}

		.status-badge {
			padding: 8rpx 16rpx;
			border-radius: 8rpx;
			font-size: 24rpx;
			font-weight: 700;
		}
	}

	.order-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.order-time {
			font-size: 24rpx;
			color: #9CA3AF;
		}

		.order-price {
			font-size: 36rpx;
			font-weight: 700;
			color: #1A1A1A;
		}
	}
}

/* Empty State */
.empty-state {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 120rpx 0;
	gap: 24rpx;

	.empty-icon {
		font-size: 120rpx;
		opacity: 0.5;
	}

	.empty-text {
		font-size: 28rpx;
		color: #9CA3AF;
	}
}
</style>
