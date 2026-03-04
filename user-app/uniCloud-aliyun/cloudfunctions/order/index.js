// 云函数教程：https://uniapp.dcloud.net.cn/uniCloud/cloud-function
'use strict';

const db = uniCloud.database()

/**
 * 创建订单
 * @param {object} event 事件参数
 * @param {object} event.sender_address 发件人地址信息
 * @param {object} event.receiver_address 收件人地址信息
 * @param {string} event.item_type 物品类型
 * @param {number} event.item_weight 物品重量 (kg)
 * @param {number} event.total_price 订单合计价格
 * @param {object} context 云函数调用上下文
 * @returns {object} 创建结果
 */
exports.main = async (event, context) => {
	console.log('云函数被调用:', event)

	const { sender_address, receiver_address, item_type, item_weight, total_price } = event

	// 参数校验
	if (!sender_address) {
		return {
			errCode: 'SENDER_ADDRESS_IS_NULL',
			errMsg: '发件地址不能为空'
		}
	}
	if (!receiver_address) {
		return {
			errCode: 'RECEIVER_ADDRESS_IS_NULL',
			errMsg: '收件地址不能为空'
		}
	}
	if (!item_type) {
		return {
			errCode: 'ITEM_TYPE_IS_NULL',
			errMsg: '物品类型不能为空'
		}
	}
	if (!item_weight || item_weight < 0.1) {
		return {
			errCode: 'ITEM_WEIGHT_INVALID',
			errMsg: '物品重量必须大于 0.1kg'
		}
	}
	if (total_price === undefined || total_price < 0) {
		return {
			errCode: 'TOTAL_PRICE_INVALID',
			errMsg: '订单价格无效'
		}
	}

	try {
		// 尝试从 context 获取用户 ID，如果没有则生成临时 ID
		let userId = context.uid
		if (!userId) {
			// 如果没有登录，使用匿名 ID
			userId = 'anonymous_' + Date.now()
			console.log('未登录用户，使用临时 ID:', userId)
		}

		// 创建订单数据
		const orderData = {
			user_id: userId,
			sender_address,
			receiver_address,
			item_type,
			item_weight,
			total_price,
			status: 'pending',
			create_time: new Date().getTime()
		}

		console.log('准备插入订单数据:', orderData)

		// 插入数据库
		const result = await db.collection('order').add(orderData)

		console.log('订单创建成功，ID:', result.id)

		return {
			errCode: 'SUCCESS',
			errMsg: '订单创建成功',
			orderId: result.id,
			...orderData
		}
	} catch (error) {
		console.error('创建订单失败:', error)
		return {
			errCode: 'CREATE_ORDER_FAILED',
			errMsg: '订单创建失败：' + error.message,
			detail: error.stack
		}
	}
}
