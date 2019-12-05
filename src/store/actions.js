import * as api from '@/api/index'
import axios from 'axios'

export default {
	getSeller (context, seller) {
		context.commit('saveSeller', seller)
	},
	// 除了组件，其他地方用axios都要导入一遍
	findSeller (context, seller) {
		return axios({
			url: api.SELLERS
		}).then(res => {
			res.data.filter(item => {
				return seller.id === item.id
			})
		})
	},
}