<template>
	<view class="container">
		<!-- Header -->
		<view class="header">
			<view class="menu-icon">☰</view>
			<text class="title">同城跑腿</text>
			<view class="placeholder"></view>
		</view>

		<!-- Tab Navigation -->
		<view class="tab-nav">
			<view
				class="tab-item"
				:class="{ active: currentTab === 'send' }"
				@click="currentTab = 'send'"
			>
				<text :class="['tab-text', currentTab === 'send' ? 'active' : '']">帮我送</text>
			</view>
			<view class="tab-indicator" :style="{ left: tabIndicatorLeft }"></view>
			<view
				class="tab-item"
				:class="{ active: currentTab === 'buy' }"
				@click="currentTab = 'buy'"
			>
				<text :class="['tab-text', currentTab === 'buy' ? 'active' : '']">帮我买</text>
			</view>
			<view
				class="tab-item"
				:class="{ active: currentTab === 'do' }"
				@click="currentTab = 'do'"
			>
				<text :class="['tab-text', currentTab === 'do' ? 'active' : '']">帮我办</text>
			</view>
		</view>

		<!-- Main Content -->
		<view class="main-content">
			<!-- 发件地址卡片 -->
			<view class="address-card">
				<view class="route-indicator">
					<view class="route-dot active"></view>
					<view class="route-line"></view>
				</view>
				<view class="address-content">
					<view class="address-header">
						<text class="address-title">发件地址</text>
						<view class="address-book" @click="selectSenderAddress">
							<text class="icon">📒</text>
							<text class="text">地址簿</text>
						</view>
					</view>
					<text class="address-desc">请填写发件人姓名、电话及详细地址</text>
				</view>
			</view>

			<!-- 收件地址卡片 -->
			<view class="address-card">
				<view class="route-indicator">
					<view class="route-dot blue"></view>
				</view>
				<view class="address-content">
					<view class="address-header">
						<text class="address-title">收件地址</text>
						<view class="history" @click="selectReceiverAddress">
							<text class="icon">🕐</text>
							<text class="text">常用</text>
						</view>
					</view>
					<text class="address-desc">点击输入收件地址</text>
				</view>
			</view>

			<!-- 物品信息卡片 -->
			<view class="item-card">
				<!-- 物品类型 -->
				<view class="item-row" @click="selectItemType">
					<view class="item-left">
						<text class="icon">📦</text>
						<text class="text">物品类型</text>
					</view>
					<view class="item-right">
						<text class="value">{{ itemType || '请选择' }}</text>
						<text class="chevron">›</text>
					</view>
				</view>
				<view class="divider"></view>
				<!-- 物品重量 -->
				<view class="item-row">
					<view class="item-left">
						<text class="icon">⚖️</text>
						<text class="text">物品重量</text>
					</view>
					<view class="weight-control">
						<view class="btn-minus" @click="decreaseWeight">
							<text class="icon">−</text>
						</view>
						<text class="weight-value">{{ weight }}kg</text>
						<view class="btn-plus" @click="increaseWeight">
							<text class="icon">+</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 价格 Section -->
			<view class="price-section">
				<view class="price-row">
					<view class="price-amount">
						<text class="currency">¥</text>
						<text class="value">{{ price.toFixed(2) }}</text>
						<text class="unit">起</text>
					</view>
					<text class="price-detail" @click="showPriceDetail">价格明细</text>
				</view>
				<!-- 立即下单按钮 -->
				<view class="submit-btn" @click="submitOrder">
					<text class="btn-text">立即下单</text>
				</view>
				<!-- 服务协议 -->
				<view class="terms">
					<text class="icon">✓</text>
					<text class="text">已阅读并同意《跑腿服务协议》及《隐私政策》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 'send',
			itemType: '',
			weight: 1,
			price: 12.0
		}
	},
	computed: {
		tabIndicatorLeft() {
			if (this.currentTab === 'send') return '0%'
			if (this.currentTab === 'buy') return '33.33%'
			return '66.66%'
		}
	},
	methods: {
		selectSenderAddress() {
			uni.navigateTo({ url: '/pages/address/address?type=sender' })
		},
		selectReceiverAddress() {
			uni.navigateTo({ url: '/pages/address/address?type=receiver' })
		},
		selectItemType() {
			uni.showActionSheet({
				itemList: ['文件资料', '生活用品', '餐饮美食', '鲜花蛋糕', '其他'],
				success: (res) => {
					const items = ['文件资料', '生活用品', '餐饮美食', '鲜花蛋糕', '其他']
					this.itemType = items[res.tapIndex]
				}
			})
		},
		increaseWeight() {
			this.weight += 0.5
			this.updatePrice()
		},
		decreaseWeight() {
			if (this.weight > 0.5) {
				this.weight -= 0.5
				this.updatePrice()
			}
		},
		updatePrice() {
			this.price = 12 + (this.weight - 1) * 5
		},
		showPriceDetail() {
			uni.showModal({
				title: '价格明细',
				content: `基础费用：¥12.00\n重量费用：¥${(this.weight - 1) * 5}.00\n总计：¥${this.price.toFixed(2)}`,
				showCancel: false
			})
		},
		submitOrder() {
			uni.navigateTo({ url: '/pages/create-order/create-order' })
		},
		switchTab(tab) {
			if (tab === 'order') {
				uni.switchTab({ url: '/pages/orders/orders' })
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
	background-color: #F8F8F8;

	.menu-icon {
		font-size: 48rpx;
		color: #47484B;
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
	height: 96rpx;

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

/* Main Content */
.main-content {
	flex: 1;
	padding: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 32rpx;
}

/* Address Card */
.address-card {
	display: flex;
	align-items: flex-start;
	gap: 32rpx;
	background-color: #FFFFFF;
	border-radius: 24rpx;
	padding: 32rpx;

	.route-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8rpx;
		width: 48rpx;

		.route-dot {
			width: 16rpx;
			height: 16rpx;
			border-radius: 50%;
			background-color: #FF8C00;

			&.blue {
				background-color: #3B82F6;
			}
		}

		.route-line {
			width: 4rpx;
			height: 64rpx;
			background-color: #E5E7EB;
		}
	}

	.address-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 16rpx;

		.address-header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.address-title {
				font-size: 32rpx;
				font-weight: 700;
				color: #1A1A1A;
			}

			.address-book,
			.history {
				display: flex;
				align-items: center;
				gap: 8rpx;

				.icon {
					font-size: 32rpx;
				}

				.text {
					font-size: 24rpx;
					font-weight: 600;
					color: #FF8C00;
				}
			}
		}

		.address-desc {
			font-size: 26rpx;
			color: #9CA3AF;
		}
	}
}

/* Item Card */
.item-card {
	background-color: #FFFFFF;
	border-radius: 24rpx;
	padding: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 32rpx;

	.item-row {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.item-left {
			display: flex;
			align-items: center;
			gap: 24rpx;

			.icon {
				font-size: 40rpx;
			}

			.text {
				font-size: 28rpx;
				color: #1A1A1A;
			}
		}

		.item-right {
			display: flex;
			align-items: center;
			gap: 8rpx;

			.value {
				font-size: 26rpx;
				color: #9CA3AF;
			}

			.chevron {
				font-size: 40rpx;
				color: #9CA3AF;
			}
		}

		.weight-control {
			display: flex;
			align-items: center;
			gap: 24rpx;

			.btn-minus,
			.btn-plus {
				width: 56rpx;
				height: 56rpx;
				background-color: #F3F4F6;
				border-radius: 16rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.icon {
					font-size: 32rpx;
					color: #6B7280;
				}
			}

			.btn-plus {
				.icon {
					color: #FF8C00;
				}
			}

			.weight-value {
				font-size: 28rpx;
				font-weight: 700;
				color: #1A1A1A;
			}
		}
	}

	.divider {
		height: 2rpx;
		background-color: #F3F4F6;
	}
}

/* Price Section */
.price-section {
	display: flex;
	flex-direction: column;
	gap: 32rpx;
	padding: 0 32rpx;

	.price-row {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.price-amount {
			display: flex;
			align-items: baseline;
			gap: 8rpx;

			.currency {
				font-size: 28rpx;
				font-weight: 700;
				color: #FF8C00;
			}

			.value {
				font-size: 56rpx;
				font-weight: 700;
				color: #FF8C00;
			}

			.unit {
				font-size: 24rpx;
				color: #9CA3AF;
			}
		}

		.price-detail {
			font-size: 24rpx;
			color: #9CA3AF;
		}
	}

	.submit-btn {
		width: 100%;
		height: 112rpx;
		background-color: #FF8C00;
		border-radius: 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.btn-text {
			font-size: 32rpx;
			font-weight: 700;
			color: #FFFFFF;
		}
	}

	.terms {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8rpx;

		.icon {
			width: 32rpx;
			height: 32rpx;
			background-color: #FF8C00;
			color: #FFFFFF;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20rpx;
		}

		.text {
			font-size: 20rpx;
			color: #9CA3AF;
		}
	}
}
</style>
