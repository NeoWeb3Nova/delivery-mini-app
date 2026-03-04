// 云对象教程：https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc 语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	/**
	 * 获取订单列表
	 * @param {object} params 查询参数
	 * @param {string} params.tab 标签页，'waiting' 待抢单 / 'scheduled' 预约单
	 * @returns {object} 订单列表数据
	 */
	async list(params) {
		try {
			// 获取数据库引用
			const db = uniCloud.database()

			// 构建查询条件
			let query = db.collection('order')

			// 根据 tab 筛选订单状态
			if (params?.tab === 'waiting') {
				// 待抢单：状态为 pending
				query = query.where({
					status: 'pending'
				})
			} else if (params?.tab === 'scheduled') {
				// 预约单：可以定义为状态为 scheduled 或特定的订单
				// 根据实际业务需求调整
				query = query.where({
					status: 'pending',
					is_scheduled: true
				})
			}

			// 按创建时间倒序排序
			query = query.orderBy('create_time', 'desc')

			// 执行查询
			const res = await query.limit(20).get()

			return {
				data: res.data,
				total: res.data.length
			}
		} catch (err) {
			console.error('获取订单列表失败:', err)
			return {
				errCode: 'GET_ORDER_LIST_FAILED',
				errMsg: err.message
			}
		}
	}
}
