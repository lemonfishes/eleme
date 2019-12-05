import Vue from 'vue'
export default {
	saveSeller (state, seller) {
		state.seller = seller
	},
	addShopCart (state, {sellerId, goods}) {
		// console.log('seller:',sellerId)
		// console.log('goods:', goods)
		let products = state.carts[sellerId]
		if (products) {
			let sign = false
			for (let i = 0; i < products.length; i++) {
				if (goods.name === products[i].name) {
					sign = true
					products[i].count++
				}
			}
			if (!sign) {
				products.push({name: goods.name, count: 1, price: goods.price})
			}
		} else {
			// state.carts[sellerId] = {name: goods.name, count: 1, price: goods.price}
			// 用set(要更新的对象，key，value)方法可以达到响应式的效果，getters可以获取到更新的数据，如果用上面对象赋值的方法，getters获取不到更新的数据
			Vue.set(state.carts, sellerId, [{name: goods.name, count: 1, price: goods.price}])
		}
		console.log('add:', products)
	},

	reduceShopCart (state, {sellerId, goods}) {
		let products = state.carts[sellerId]
		if (products) {
			for (let i = 0; i < products.length; i++) {
				if (goods.name === products[i].name) {
					products[i].count--
					if (products[i].count === 0) {
						products.splice(parseInt(i), 1)
					}
				}
			}
		}
		console.log('reduce:', products)
	},

	addAddress (state, obj) {
		state.address.push(obj)
		// console.log('address:', state.address)
	},

	updateAddress (state, obj) {
		for (let i = 0; i < state.address.length; i++) {
			if (state.address[i].id === obj.id) {
				state.address[i].name = obj.name
				state.address[i].phone = obj.phone
				state.address[i].address = obj.address
				state.address[i].default = obj.default
			}
		}
	},

	deleteAddress (state, obj) {
		for (let i = 0; i < state.address.length; i++) {
			if (state.address[i].id === obj.id) {
				state.address.splice(i, 1)
			}
		}
	}

	// mutation里面不能写ajax
	// getSeller (state, seller) {
	// 	this.$http({
	// 		url: api.SELLERS
	// 	}).then(res => {
	// 		return res.data.filter(v => {
	// 			return v.id === seller.id
	// 		})
	// 	})
	// }
}