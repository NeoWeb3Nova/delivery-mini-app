<template>
	<view class="container">
		<!-- Header -->
		<view class="header">
			<view class="close-icon" @click="goBack">
				<text>✕</text>
			</view>
			<text class="title">下单成功</text>
			<view class="placeholder"></view>
		</view>

		<!-- Success Content -->
		<view class="success-content">
			<view class="success-icon">
				<text>✓</text>
			</view>
			<text class="success-title">支付并下单成功</text>
			<text class="success-desc">您的跑腿订单已提交，系统正在为您匹配最近的骑手，请稍后。</text>
		</view>

		<!-- Map Preview -->
		<view class="map-preview">
			<view class="map-placeholder">
				<text>🗺️</text>
				<text class="placeholder-text">地图预览</text>
			</view>
			<view class="dispatching-badge">
				<text class="icon">🛵</text>
				<text class="text">正在派单中...</text>
			</view>
		</view>

		<!-- Order Details -->
		<view class="order-details">
			<view class="detail-row">
				<text class="label">订单编号</text>
				<text class="value">{{ orderNumber }}</text>
			</view>
			<view class="detail-row">
				<text class="label">预计送达</text>
				<text class="value">30 分钟内</text>
			</view>
			<view class="detail-row">
				<text class="label">骑手信息</text>
				<text class="value">正在匹配...</text>
			</view>
		</view>

		<!-- Action Buttons -->
		<view class="action-buttons">
			<view class="btn-secondary" @click="copyOrderNumber">
				<text>复制单号</text>
			</view>
			<view class="btn-primary" @click="goToOrderDetail">
				<text>查看订单</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderNumber: 'SH202310249527'
		}
	},
	methods: {
		goBack() {
			uni.switchTab({ url: '/pages/orders/orders' })
		},
		copyOrderNumber() {
			uni.setClipboardData({
				data: this.orderNumber,
				success: () => {
					uni.showToast({ title: '已复制', icon: 'success' })
				}
			})
		},
		goToOrderDetail() {
			uni.switchTab({ url: '/pages/orders/orders' })
		}
	}
}
</script>

<style lang="scss">
page {
	background-color: #FFFFFF;
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

	.close-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48rpx;
		height: 48rpx;

		text {
			font-size: 40rpx;
			color: #6B7280;
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

/* Success Content */
.success-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 48rpx 32rpx;
	gap: 24rpx;

	.success-icon {
		width: 192rpx;
		height: 192rpx;
		background-color: #FFF7ED;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		text {
			font-size: 128rpx;
			color: #FF8C00;
		}
	}

	.success-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #1A1A1A;
		text-align: center;
	}

	.success-desc {
		font-size: 28rpx;
		color: #9CA3AF;
		text-align: center;
		line-height: 1.6;
	}
}

/* Map Preview */
.map-preview {
	position: relative;
	height: 400rpx;
	background-color: #E5E7EB;
	margin: 0 32rpx;
	border-radius: 24rpx;
	display: flex;
	justify-content: center;
	align-items: center;

	.map-placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16rpx;

		text:first-child {
			font-size: 80rpx;
			opacity: 0.5;
		}

		.placeholder-text {
			font-size: 28rpx;
			color: #9CA3AF;
		}
	}

	.dispatching-badge {
		position: absolute;
		bottom: 32rpx;
		background-color: #FFFFFF;
		padding: 16rpx 32rpx;
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		gap: 16rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);

		.icon {
			font-size: 40rpx;
		}

		.text {
			font-size: 24rpx;
			font-weight: 600;
			color: #1A1A1A;
		}
	}
}

/* Order Details */
.order-details {
	padding: 48rpx 32rpx;
	display: flex;
	flex-direction: column;
	gap: 32rpx;

	.detail-row {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.label {
			font-size: 28rpx;
			color: #9CA3AF;
		}

		.value {
			font-size: 28rpx;
			color: #1A1A1A;
		}
	}
}

/* Action Buttons */
.action-buttons {
	display: flex;
	gap: 32rpx;
	padding: 32rpx;

	.btn-secondary,
	.btn-primary {
		flex: 1;
		height: 96rpx;
		border-radius: 24rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-weight: 700;
	}

	.btn-secondary {
		background-color: #F3F4F6;
		color: #1A1A1A;
	}

	.btn-primary {
		background-color: #FF8C00;
		color: #FFFFFF;
	}
}
</style>
