<template>
	<view class="container">
		<!-- Header -->
		<view class="header">
			<view class="back-icon" @click="goBack">
				<text>‹</text>
			</view>
			<text class="title">填写订单</text>
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
		</view>

		<!-- Address Section -->
		<view class="address-section">
			<!-- 取件地址 -->
			<view class="address-row" @click="selectPickupAddress">
				<view class="address-icon pickup">
					<text>📍</text>
				</view>
				<view class="address-info">
					<text class="address-title">{{ senderAddress.detail || '点击选择取件地址' }}</text>
					<text class="address-desc">{{ senderAddress.contact || '' }}</text>
				</view>
			</view>
			<view class="divider"></view>
			<!-- 收件地址 -->
			<view class="address-row" @click="selectDeliveryAddress">
				<view class="address-icon delivery">
					<text>🚩</text>
				</view>
				<view class="address-info">
					<text class="address-title">{{ receiverAddress.detail || '点击选择收货地址' }}</text>
					<text class="address-desc">{{ receiverAddress.contact || '' }}</text>
				</view>
			</view>
		</view>

		<!-- Item Info Section -->
		<view class="item-section">
			<text class="section-title">物品信息</text>
			<view class="item-grid">
				<view class="item-cell" @click="selectItemType">
					<text class="cell-label">物品类型</text>
					<text class="cell-value">{{ itemType || '请选择' }}</text>
				</view>
				<view class="item-cell">
					<text class="cell-label">重量 (kg)</text>
					<text class="cell-value">{{ weight }}kg</text>
				</view>
			</view>
		</view>

		<!-- Price Section -->
		<view class="price-section">
			<view class="price-row">
				<text class="price-label">基础配送费</text>
				<text class="price-value">¥12.00</text>
			</view>
			<view class="price-row">
				<text class="price-label">距离加价</text>
				<text class="price-value">¥4.50</text>
			</view>
			<view class="price-row total">
				<text class="total-label">总计支付</text>
				<view class="total-amount">
					<text class="currency">¥</text>
					<text class="amount-value">{{ totalPrice.toFixed(2) }}</text>
				</view>
			</view>
		</view>

		<!-- Bottom Bar -->
		<view class="bottom-bar">
			<view class="price-info">
				<view class="amount-row">
					<text class="currency">¥</text>
					<text class="amount-value">{{ totalPrice.toFixed(2) }}</text>
				</view>
				<text class="discount">已优惠 ¥5.00</text>
			</view>
			<view class="submit-btn" @click="submitOrder">
				<text class="btn-text">立即下单</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentTab: 'send',
			senderAddress: {},
			receiverAddress: {},
			itemType: '',
			weight: 1,
			basePrice: 12.0,
			distancePrice: 4.5,
			discount: 5.0
		}
	},
	computed: {
		tabIndicatorLeft() {
			return this.currentTab === 'send' ? '0%' : '50%'
		},
		totalPrice() {
			return this.basePrice + this.distancePrice - this.discount
		}
	},
	methods: {
		goBack() {
			uni.navigateBack()
		},
		selectPickupAddress() {
			// TODO: 跳转到地址选择页面，这里简化处理直接设置示例数据
			this.senderAddress = {
				province: '上海市',
				city: '上海市',
				district: '静安区',
				detail: '静安区南京西路 1601 号',
				contact: '越洋广场 2801 室',
				phone: '138****8888'
			}
		},
		selectDeliveryAddress() {
			// TODO: 跳转到地址选择页面，这里简化处理直接设置示例数据
			this.receiverAddress = {
				province: '上海市',
				city: '上海市',
				district: '浦东新区',
				detail: '浦东新区陆家嘴环路 100 号',
				contact: '上海中心大厦 50 楼',
				phone: '139****9999'
			}
		},
		selectItemType() {
			uni.showActionSheet({
				itemList: ['文件/证件', '生活用品', '餐饮美食', '鲜花蛋糕', '其他'],
				success: (res) => {
					const items = ['文件/证件', '生活用品', '餐饮美食', '鲜花蛋糕', '其他']
					this.itemType = items[res.tapIndex]
				}
			})
		},
		async submitOrder() {
			// 校验必填项
			if (!this.senderAddress.detail) {
				uni.showToast({ title: '请选择取件地址', icon: 'none' })
				return
			}
			if (!this.receiverAddress.detail) {
				uni.showToast({ title: '请选择收件地址', icon: 'none' })
				return
			}
			if (!this.itemType) {
				uni.showToast({ title: '请选择物品类型', icon: 'none' })
				return
			}

			uni.showLoading({ title: '提交中...' })

			try {
				// 调用云函数创建订单
				const result = await uniCloud.callFunction({
					name: 'order',
					data: {
						action: 'createOrder',
						sender_address: this.senderAddress,
						receiver_address: this.receiverAddress,
						item_type: this.itemType,
						item_weight: parseFloat(this.weight),
						total_price: parseFloat(this.totalPrice.toFixed(2))
					}
				})

				uni.hideLoading()

				if (result.result.errCode === 'SUCCESS') {
					uni.showToast({
						title: '下单成功',
						icon: 'success'
					})
					// 跳转到订单成功页面，传递订单 ID
					uni.navigateTo({
						url: `/pages/order-success/order-success?orderId=${result.result.orderId}`
					})
				} else {
					uni.showToast({
						title: result.result.errMsg || '下单失败',
						icon: 'none'
					})
				}
			} catch (error) {
				uni.hideLoading()
				console.error('提交订单失败:', error)
				uni.showToast({
					title: '网络错误，请稍后重试',
					icon: 'none'
				})
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
	padding-bottom: 140rpx;
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
			font-weight: 700;
			color: #9CA3AF;
			transition: all 0.3s;

			&.active {
				color: #FF8C00;
			}
		}
	}

	.tab-indicator {
		position: absolute;
		bottom: 0;
		width: 50%;
		height: 6rpx;
		background-color: #FF8C00;
		transition: left 0.3s;
	}
}

/* Address Section */
.address-section {
	background-color: #FFFFFF;
	border-radius: 24rpx;
	margin: 32rpx;
	display: flex;
	flex-direction: column;

	.address-row {
		display: flex;
		align-items: center;
		gap: 32rpx;
		padding: 32rpx;

		.address-icon {
			width: 80rpx;
			height: 80rpx;
			border-radius: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				font-size: 48rpx;
			}

			&.pickup {
				background-color: #FF8C00;
			}

			&.delivery {
				background-color: #3B82F6;
			}
		}

		.address-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 8rpx;

			.address-title {
				font-size: 32rpx;
				font-weight: 700;
				color: #1A1A1A;
			}

			.address-desc {
				font-size: 28rpx;
				color: #9CA3AF;
			}
		}
	}

	.divider {
		height: 2rpx;
		background-color: #F3F4F6;
		margin: 0 32rpx;
	}
}

/* Item Section */
.item-section {
	background-color: #FFFFFF;
	border-radius: 24rpx;
	padding: 32rpx;
	margin: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 32rpx;

	.section-title {
		font-size: 32rpx;
		font-weight: 700;
		color: #1A1A1A;
	}

	.item-grid {
		display: flex;
		gap: 24rpx;

		.item-cell {
			flex: 1;
			background-color: #F9FAFB;
			border-radius: 16rpx;
			padding: 24rpx;
			display: flex;
			flex-direction: column;
			gap: 16rpx;

			.cell-label {
				font-size: 24rpx;
				color: #9CA3AF;
			}

			.cell-value {
				font-size: 28rpx;
				color: #1A1A1A;
			}
		}
	}
}

/* Price Section */
.price-section {
	background-color: #FFFFFF;
	border-radius: 24rpx;
	padding: 32rpx;
	margin: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 24rpx;

	.price-row {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.price-label {
			font-size: 28rpx;
			color: #9CA3AF;
		}

		.price-value {
			font-size: 28rpx;
			color: #1A1A1A;
		}

		&.total {
			padding-top: 24rpx;
			border-top: 2rpx solid #F3F4F6;

			.total-label {
				font-size: 30rpx;
				font-weight: 700;
				color: #1A1A1A;
			}

			.total-amount {
				display: flex;
				align-items: baseline;
				gap: 8rpx;

				.currency {
					font-size: 28rpx;
					font-weight: 700;
					color: #FF8C00;
				}

				.amount-value {
					font-size: 56rpx;
					font-weight: 700;
					color: #FF8C00;
				}
			}
		}
	}
}

/* Bottom Bar */
.bottom-bar {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #FFFFFF;
	padding: 32rpx 48rpx;
	padding-bottom: calc(32rpx + env(safe-area-inset-bottom));
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0 -4rpx 12rpx rgba(0, 0, 0, 0.05);

	.price-info {
		display: flex;
		flex-direction: column;
		gap: 8rpx;

		.amount-row {
			display: flex;
			align-items: baseline;
			gap: 4rpx;

			.currency {
				font-size: 24rpx;
				font-weight: 700;
				color: #FF8C00;
			}

			.amount-value {
				font-size: 40rpx;
				font-weight: 700;
				color: #FF8C00;
			}
		}

		.discount {
			font-size: 20rpx;
			color: #9CA3AF;
		}
	}

	.submit-btn {
		background-color: #FF8C00;
		height: 96rpx;
		padding: 0 48rpx;
		border-radius: 48rpx;
		display: flex;
		justify-content: center;
		align-items: center;

		.btn-text {
			font-size: 30rpx;
			font-weight: 700;
			color: #FFFFFF;
		}
	}
}
</style>
