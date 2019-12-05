<template>
  <div class="redpackage">
		<mt-header id="" title="红包">
			<router-link to="/home/mine" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<ul>
			<li v-for="(v,i) in coupons" :key="i">
				<strong>{{v.name}}</strong>
				<div>
					<h1>{{v.title}}</h1>
					<p>{{v.desc}}</p>
				</div>
				<button>进店使用</button>
			</li>

		</ul>
	</div>
</template>

<script>
export default {
	name: 'RedPackage',
	computed: {
		coupons () {
			return this.$store.getters.user.coupon
		}
	}
}
</script>

<style lang="stylus" scoped>
	.redpackage {
		.mint-header {
			font-size: .426667rem /* 32/75 */;
			height: 1.2rem /* 90/75 */;
			line-height: 1.2rem;
			.mint-button {
				height: .933333rem /* 70/75 */
			}
		}
		ul {
			li {
				margin: .133333rem auto 0; /* 10/75 */
				width: 98%;
				padding: .4rem /* 30/75 */ 0;
				-webkit-display: flex;
				display: flex;
				justify-content: space-around;
				background: #fff;
				border-bottom: 1px solid #999;
				strong {
					width: 15%;
					text-align: center;
					line-height: 1.133333rem /* 85/75 */
					font-size: .533333rem /* 40/75 */
					color: #da2a2a;
					flex: 0 0 auto
				}
				div {
					width: 50%;
					font-size: .32rem /* 24/75 */
					color: #999
					line-height: .4rem /* 30/75 */
					h1 {
						font-size: .426667rem /* 32/75 */
						color: #000;
						line-height: .6rem /* 45/75 */
					}
				}
				button {
					width: 17%;
					height: .466667rem /* 35/75 */
					text-align: center;
					line-height: .4rem;
					color: #fff;
					font-size: .32rem; /* 24/75 */
					background: #da2a2a;
					border-radius: 50px;
					margin-top: 0.25rem;
				}
			}
		}
	}
</style>