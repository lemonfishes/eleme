<template>
	<div class="add">
		<mt-header id="" title="新增收货地址">
			<router-link to="/address/list" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>

		<div class="content">
			<mt-field label="姓名" placeholder="请输入用户名" v-model="username" class="input-ct"></mt-field>
			<mt-field label="手机号码" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field label="所在地址" placeholder="所在地址" type="url" v-model="address"></mt-field>
			<section style="float:left;font-size: .36rem;padding: 0 10px;width:94%;line-height: 1.3rem;height: 1.2rem;">
				<p style="float:left">设置默认地址</p>
				<mt-switch v-model="isDefault" style="float: right;margin-top:4%"></mt-switch>
			</section>
			<div class="clearfix"></div>
		</div>

		<mt-button type="primary" size="large" @click="save">保存</mt-button>
	</div>
</template>
<script>

export default {
	name:"AddAddress",
	data () {
		return {
			username: '',
			phone: '',
			address: '',
			id: '',
			isDefault: false,
			isModify: false
		}
	},
	created () {
		let name = this.$route.params.name
		if (name !== '') {
			this.isModify = true
			let updateAddr = this.$store.state.address.filter(v => {
				return v.name === name
			})
			this.id = updateAddr[0].id
			this.username = updateAddr[0].name
			this.phone = updateAddr[0].phone
			this.address = updateAddr[0].address
			this.isDefault = updateAddr[0].default === '默认' ? true : false
		}
	},
	methods: {
		save () {
			if (this.username !== '' && this.phone !== '' && this.address !== '') {
				let value = ''
				if (this.isDefault) {
					value = '默认'
				}

				if (!this.isModify) {
					// 添加新地址
					let id = Date.now().toString() + (Math.random() * 10).toFixed(4) + (this.$store.getters.user.id).toString()
					let obj = {id: id, name: this.username, phone: this.phone, address: this.address, default: value}
					this.$store.commit('addAddress', obj)
				} else {
					// 修改地址
					let obj = {id: this.id, name: this.username, phone: this.phone, address: this.address, default: value}
					this.$store.commit('updateAddress', obj)
				}
				
				this.$router.push({name: 'AddressList'})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.address{
		font-size: .346667rem /* 26/75 */;
		letter-spacing: 3px;
	}
	.clearfix{
		clear:both
	}
	.mint-header {
		font-size: .426667rem /* 32/75 */;
		height: 1.2rem /* 90/75 */;
		line-height: 1.2rem;
	}
	#back{
		font-size: .4rem;
	}
</style>