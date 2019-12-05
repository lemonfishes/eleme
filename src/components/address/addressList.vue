<template>
  <div class="address-manage">
		<mt-header id="" title="收货地址管理">
			<router-link to="/home/mine" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<ul>
			<mt-cell-swipe
				v-for="(v, i) in addressList" :key="i"
				:right="[
					{
						content: '删除',
						style: { background: 'red', color: '#fff' },
						handler: () => del(v)
					},
					{
						content: '修改',
						style: { background: '#26a2ff', color: '#fff' },
						handler: () => toUpdate(v)
					}
				]">
				<li>
				<p class="addr-info user">
					<span>{{v.name}}</span>
					<span>{{v.phone}}</span>
				</p>
				<p class="addr-info addr">
					<span>{{v.address}}</span>
					<span class="default">{{v.default}}</span>
				</p>
				</li>
			</mt-cell-swipe>
				
		</ul>
		<mt-button type="primary" size="large" @click="toAdd">新建收货地址</mt-button>
	</div>
</template>

<script>
	export default {
		name: 'AddressList',
		methods: {
			del (obj) {
				if (window.confirm('是否确认删除?')) {
					this.$store.commit('deleteAddress', obj)
				}
			},
			toAdd () {
				this.$router.push({name: 'AddAddress', params: {name: ''}})
			},
			toUpdate (addr) {
				this.$router.push({name: 'AddAddress', params: {name: addr.name}})
			}
		},
		computed: {
			addressList () {
				return this.$store.getters.address
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.mint-header {
		font-size: .426667rem /* 32/75 */;
		height: 1.2rem /* 90/75 */;
		line-height: 1.2rem;
	}
	.address-manage {
		h1 {
			font-size: .4rem /* 30/75 */
			line-height: 1.2rem /* 90/75 */
			text-align: center;
		}
		ul {
			li {
				width: 100%;
				height: 2rem /* 150/75 */;
				border-top: 1px solid #999;
				.addr-info {
					-webkit-display: flex;
					display: flex;
					justify-content: space-between;
					padding: 0 .266667rem /* 20/75 */
					margin-top: .333333rem /* 25/75 */
					span {
						flex: 0 0 auto;
						font-size: .32rem /* 24/75 */
					}
					&.addr {
						margin-top: .666667rem /* 50/75 */;
						.default {
							color: #ce0000
						}
					}
				}
			}
		}
	}
</style>