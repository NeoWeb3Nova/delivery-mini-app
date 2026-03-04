<template>
	<view class="container">
		<!-- 未登录状态 -->
		<view v-if="!isLoggedIn" class="not-logged-in">
			<!-- Header -->
			<view class="header">
				<text class="title">个人中心</text>
				<view class="settings-icon" @click="goToSettings">
					<text class="settings-icon-inner">⚙️</text>
				</view>
			</view>

			<!-- Profile Section -->
			<view class="profile-section">
				<view class="profile-content">
					<view class="avatar">
						<text class="avatar-icon">👤</text>
					</view>
					<view class="profile-info">
						<text class="login-btn" @click="goToLogin">点击登录/注册</text>
						<text class="login-desc">登录后开启极速跑腿服务</text>
					</view>
				</view>

				<!-- Stats Row -->
				<view class="stats-row">
					<view class="stat-item">
						<text class="stat-value">--</text>
						<text class="stat-label">优惠券</text>
					</view>
					<view class="stat-item">
						<text class="stat-value">--</text>
						<text class="stat-label">余额</text>
					</view>
					<view class="stat-item">
						<text class="stat-value">--</text>
						<text class="stat-label">积分</text>
					</view>
				</view>
			</view>

			<!-- Function Grid -->
			<view class="function-section">
				<text class="section-title">常用功能</text>
				<view class="function-grid">
					<view class="function-card" @click="goToOrders">
						<view class="function-icon-wrapper orange">
							<text class="function-icon">📋</text>
						</view>
						<text class="function-title">我的订单</text>
						<text class="function-desc">登录查看进度</text>
					</view>
					<view class="function-card" @click="goToAddress">
						<view class="function-icon-wrapper orange">
							<text class="function-icon">📍</text>
						</view>
						<text class="function-title">收货地址</text>
						<text class="function-desc">未设置</text>
					</view>
					<view class="function-card" @click="goToCoupons">
						<view class="function-icon-wrapper orange">
							<text class="function-icon">🎫</text>
						</view>
						<text class="function-title">优惠券</text>
						<text class="function-desc">0 张可用</text>
					</view>
					<view class="function-card" @click="goToService">
						<view class="function-icon-wrapper orange">
							<text class="function-icon">🎧</text>
						</view>
						<text class="function-title">联系客服</text>
						<text class="function-desc">在线咨询</text>
					</view>
				</view>
			</view>

			<!-- Promo Banner -->
			<view class="promo-banner" @click="goToRunnerApply">
				<view class="promo-text">
					<text class="promo-title">加入跑腿员</text>
					<text class="promo-desc">时间自由，收入可观</text>
				</view>
				<view class="promo-btn">
					<text class="promo-btn-text">去申请</text>
				</view>
			</view>
		</view>

		<!-- 已登录状态 -->
		<view v-else>
			<!-- Header -->
			<view class="header">
				<view class="settings-icon" @click="goToSettings">
					<text class="settings-icon-inner">⚙️</text>
				</view>
				<text class="title">个人中心</text>
				<view class="settings-icon" @click="goToNotify">
					<text class="settings-icon-inner">🔔</text>
				</view>
			</view>

			<!-- Profile Section -->
			<view class="profile-section">
				<view class="profile-content">
					<view class="avatar"></view>
					<view class="profile-info">
						<view class="name-row">
							<text class="profile-name">跑腿小能手</text>
							<view class="vip-badge">
								<text class="vip-text">V2 达人</text>
							</view>
						</view>
						<text class="profile-id">ID: 8829341</text>
						<text class="profile-level">普通会员 · 距离升级还差 12 积分</text>
					</view>
				</view>

				<!-- Wallet Row -->
				<view class="wallet-row">
					<view class="wallet-card" @click="goToWallet">
						<view class="wallet-label">
							<text class="label-text">钱包余额</text>
							<text class="wallet-icon">💰</text>
						</view>
						<view class="wallet-amount">
							<text class="currency">¥</text>
							<text class="value">128.50</text>
						</view>
					</view>
					<view class="wallet-card" @click="goToCoupons">
						<view class="wallet-label">
							<text class="label-text">优惠券</text>
							<text class="coupon-icon">🎫</text>
						</view>
						<view class="coupon-amount">
							<text class="value">5</text>
							<text class="unit">张可用</text>
						</view>
					</view>
				</view>
			</view>

			<!-- Function List -->
			<view class="function-section">
				<text class="section-title">常用功能</text>
				<view class="function-list">
					<view class="function-item" @click="goToAddress">
						<view class="function-left">
							<text class="function-icon">📍</text>
							<text class="function-text">地址管理</text>
						</view>
						<text class="chevron">›</text>
					</view>
					<view class="function-item" @click="goToReviews">
						<view class="function-left">
							<text class="function-icon">⭐</text>
							<text class="function-text">我的评价</text>
						</view>
						<text class="chevron">›</text>
					</view>
					<view class="function-item" @click="goToService">
						<view class="function-left">
							<text class="function-icon">🎧</text>
							<text class="function-text">客服中心</text>
						</view>
						<text class="chevron">›</text>
					</view>
					<view class="function-item" @click="goToAbout">
						<view class="function-left">
							<text class="function-icon">ℹ️</text>
							<text class="function-text">关于我们</text>
						</view>
						<text class="chevron">›</text>
					</view>
				</view>
			</view>

			<!-- Invite Banner -->
			<view class="invite-banner" @click="inviteFriends">
				<view class="invite-text">
					<text class="invite-title">邀请好友领现金</text>
					<text class="invite-desc">每邀请一位好友得 20 元</text>
				</view>
				<view class="invite-btn">
					<text class="btn-text">立即邀请</text>
				</view>
			</view>

			<!-- Logout Button -->
			<view class="logout-btn" @click="confirmLogout">
				<text class="logout-text">退出登录</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isLoggedIn: false,
			userInfo: null
		}
	},
	onLoad() {
		this.checkLoginStatus()
	},
	methods: {
		checkLoginStatus() {
			// 检查本地存储的登录状态
			const token = uni.getStorageSync('token')
			const userInfo = uni.getStorageSync('userInfo')

			if (token && userInfo) {
				this.isLoggedIn = true
				this.userInfo = userInfo
			} else {
				this.isLoggedIn = false
				this.userInfo = null
			}
		},
		goToSettings() {
			uni.navigateTo({ url: '/pages/settings/settings' })
		},
		goToNotify() {
			uni.navigateTo({ url: '/pages/notify/notify' })
		},
		goToWallet() {
			uni.navigateTo({ url: '/pages/wallet/wallet' })
		},
		goToCoupons() {
			uni.navigateTo({ url: '/pages/coupons/coupons' })
		},
		goToAddress() {
			uni.navigateTo({ url: '/pages/address/address' })
		},
		goToReviews() {
			uni.navigateTo({ url: '/pages/reviews/reviews' })
		},
		goToService() {
			uni.navigateTo({ url: '/pages/service/service' })
		},
		goToAbout() {
			uni.navigateTo({ url: '/pages/about/about' })
		},
		goToLogin() {
			// 跳转到登录页面
			uni.showToast({
				title: '登录功能待开发',
				icon: 'none'
			})
		},
		goToIndex() {
			uni.switchTab({ url: '/pages/index/index' })
		},
		goToOrders() {
			uni.switchTab({ url: '/pages/orders/orders' })
		},
		goToRunnerApply() {
			// 跳转到跑腿员申请页面
			uni.showToast({
				title: '申请功能待开发',
				icon: 'none'
			})
		},
		inviteFriends() {
			uni.showShareMenu({
				withShareTicket: true,
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		confirmLogout() {
			uni.showModal({
				title: '提示',
				content: '确定要退出登录吗？',
				success: (res) => {
					if (res.confirm) {
						// 清除本地登录状态
						uni.removeStorageSync('token')
						uni.removeStorageSync('userInfo')

						// 重新加载当前页面，显示未登录状态
						this.isLoggedIn = false
						this.userInfo = null

						// 提示用户已退出登录
						uni.showToast({
							title: '已退出登录',
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
	background-color: #F8F8F8;
}

.container {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

/* ========== Header ========== */
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 32rpx;
	height: 112rpx;
	background-color: #FFFFFF;

	.title {
		font-size: 36rpx;
		font-weight: 700;
		color: #1A1A1A;
	}

	.settings-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48rpx;
		height: 48rpx;

		.settings-icon-inner {
			font-size: 48rpx;
		}
	}
}

/* ========== Not Logged In Styles ========== */
.not-logged-in {
	.profile-section {
		background-color: #FFFFFF;
		padding: 48rpx 32rpx;
		margin-bottom: 32rpx;
		display: flex;
		flex-direction: column;
		gap: 32rpx;

		.profile-content {
			display: flex;
			align-items: center;
			gap: 24rpx;

			.avatar {
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
				background-color: #E5E7EB;
				display: flex;
				align-items: center;
				justify-content: center;

				.avatar-icon {
					font-size: 96rpx;
					color: #9CA3AF;
				}
			}

			.profile-info {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 12rpx;

				.login-btn {
					font-size: 40rpx;
					font-weight: 700;
					color: #1A1A1A;
				}

				.login-desc {
					font-size: 28rpx;
					color: #9CA3AF;
				}
			}
		}

		.stats-row {
			display: flex;
			gap: 24rpx;

			.stat-item {
				flex: 1;
				background-color: #F3F4F6;
				border-radius: 24rpx;
				padding: 24rpx 16rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 12rpx;
				opacity: 0.6;

				.stat-value {
					font-size: 40rpx;
					font-weight: 700;
					color: #1A1A1A;
				}

				.stat-label {
					font-size: 24rpx;
					color: #9CA3AF;
				}
			}
		}
	}

	.function-section {
		margin-bottom: 32rpx;

		.section-title {
			font-size: 32rpx;
			font-weight: 700;
			color: #1A1A1A;
			padding: 0 24rpx;
			margin-bottom: 16rpx;
		}

		.function-grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 24rpx;
			padding: 0 24rpx;

			.function-card {
				background-color: #FFFFFF;
				border-radius: 24rpx;
				padding: 32rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 24rpx;

				.function-icon-wrapper {
					width: 80rpx;
					height: 80rpx;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					justify-content: center;

					&.orange {
						background-color: #FFF7ED;

						.function-icon {
							font-size: 48rpx;
						}
					}
				}

				.function-title {
					font-size: 30rpx;
					font-weight: 700;
					color: #1A1A1A;
				}

				.function-desc {
					font-size: 24rpx;
					color: #9CA3AF;
				}
			}
		}
	}

	.promo-banner {
		background-color: #FF8C00;
		border-radius: 24rpx;
		padding: 40rpx 48rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 24rpx 32rpx;

		.promo-text {
			display: flex;
			flex-direction: column;
			gap: 8rpx;

			.promo-title {
				font-size: 36rpx;
				font-weight: 700;
				color: #FFFFFF;
			}

			.promo-desc {
				font-size: 28rpx;
				color: #FFFFFF;
			}
		}

		.promo-btn {
			background-color: #FFFFFF;
			padding: 12rpx 32rpx;
			border-radius: 40rpx;

			.promo-btn-text {
				font-size: 26rpx;
				font-weight: 700;
				color: #FF8C00;
			}
		}
	}
}

/* ========== Logged In Styles ========== */
.profile-section {
	background-color: #FFFFFF;
	padding: 48rpx 32rpx;
	margin-bottom: 32rpx;
	display: flex;
	flex-direction: column;
	gap: 40rpx;

	.profile-content {
		display: flex;
		align-items: center;
		gap: 24rpx;

		.avatar {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			background-color: #E5E7EB;
		}

		.profile-info {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 12rpx;

			.name-row {
				display: flex;
				align-items: center;
				gap: 12rpx;

				.profile-name {
					font-size: 40rpx;
					font-weight: 700;
					color: #1A1A1A;
				}

				.vip-badge {
					background-color: #FFF7ED;
					padding: 4rpx 16rpx;
					border-radius: 8rpx;

					.vip-text {
						font-size: 22rpx;
						font-weight: 700;
						color: #FF8C00;
					}
				}
			}

			.profile-id {
				font-size: 28rpx;
				color: #9CA3AF;
			}

			.profile-level {
				font-size: 26rpx;
				color: #FF8C00;
			}
		}
	}

	.wallet-row {
		display: flex;
		gap: 24rpx;

		.wallet-card {
			flex: 1;
			background-color: #FFF7ED;
			border-radius: 24rpx;
			padding: 32rpx;
			display: flex;
			flex-direction: column;
			gap: 16rpx;

			.wallet-label {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.label-text {
					font-size: 28rpx;
					color: #6B7280;
				}

				.wallet-icon,
				.coupon-icon {
					font-size: 40rpx;
				}
			}

			.wallet-amount {
				display: flex;
				align-items: baseline;
				gap: 8rpx;

				.currency {
					font-size: 28rpx;
					font-weight: 700;
					color: #FF8C00;
				}

				.value {
					font-size: 48rpx;
					font-weight: 700;
					color: #1A1A1A;
				}
			}

			.coupon-amount {
				display: flex;
				align-items: baseline;
				gap: 8rpx;

				.value {
					font-size: 48rpx;
					font-weight: 700;
					color: #1A1A1A;
				}

				.unit {
					font-size: 28rpx;
					color: #9CA3AF;
				}
			}
		}
	}
}

.function-section {
	margin-bottom: 32rpx;

	.section-title {
		font-size: 32rpx;
		font-weight: 700;
		color: #1A1A1A;
		padding: 0 32rpx;
		margin-bottom: 16rpx;
	}

	.function-list {
		background-color: #FFFFFF;
		border-radius: 24rpx;
		display: flex;
		flex-direction: column;

		.function-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 32rpx;
			border-bottom: 2rpx solid #F3F4F6;

			&:last-child {
				border-bottom: none;
			}

			.function-left {
				display: flex;
				align-items: center;
				gap: 24rpx;

				.function-icon {
					font-size: 48rpx;
				}

				.function-text {
					font-size: 30rpx;
					color: #1A1A1A;
				}
			}

			.chevron {
				font-size: 48rpx;
				color: #9CA3AF;
			}
		}
	}
}

.invite-banner {
	background-color: #FF8C00;
	border-radius: 24rpx;
	padding: 40rpx 48rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 24rpx 32rpx;

	.invite-text {
		display: flex;
		flex-direction: column;
		gap: 8rpx;

		.invite-title {
			font-size: 32rpx;
			font-weight: 700;
			color: #FFFFFF;
		}

		.invite-desc {
			font-size: 26rpx;
			color: #FFFFFF;
		}
	}

	.invite-btn {
		background-color: #FFFFFF;
		padding: 12rpx 32rpx;
		border-radius: 40rpx;

		.btn-text {
			font-size: 26rpx;
			font-weight: 700;
			color: #FF8C00;
		}
	}
}

.logout-btn {
	background-color: #FFFFFF;
	border-radius: 24rpx;
	height: 112rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 24rpx 32rpx;

	.logout-text {
		font-size: 32rpx;
		font-weight: 700;
		color: #EF4444;
	}
}
</style>
