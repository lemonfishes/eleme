<template>
  <div class="list">
		<div class="list-top">
			<p>我的订单</p>
			<a href="#">全部订单></a>
		</div>
		<ul>
			<li v-for="(v,i) in list" :key="i">
				<p class="list-img">
					<img :src="v.img" :alt="v.title">
				</p>
				<div class="list-info">
					<p class="info-title">{{v.seller}}</p>
					<p class="order-state">
						<span>></span>
						<span>{{v.state}}</span>
					</p>
					<p class="info-time">{{v.date}}</p>
					<p class="info-content">{{v.title}}</p>
					<p class="price">￥{{v.money}}</p>
					<p class="info-btn">
						<a href="#" class="again">再来一单</a>
						<a href="#" class="getScore">评价晒图得164积分</a>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import * as api from '@/api'
export default {
	name: 'List',
	data () {
		return {
			list: []
		}
	},
	created () {
		this.$http({
			url: api.ORDERS,
		}).then(res => {
			this.list = res.data;
		})
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/variable.styl";
	.list {
		padding: 0 $sz-25;
		margin-top: $sz-35;
		.list-top {
			-webkit-display: flex;
			display: flex;
			justify-content: space-between;
			margin-bottom: $sz-10;
			p {
				font-size: $sz-28;
				color: #000;
				flex: 0 0 auto;
			}
			a {
				font-size: $sz-24;
				color: $background;
				flex: 0 0 auto;
			}
		}
		ul {
			li {
				-webkit-display: flex;
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #666;
				margin-top: $sz-30;
				padding-bottom: $sz-35;
				.list-img {
					flex: 0 0 auto;
					width: 25%;
					img {
						width: 100%;
					}
				}
				.list-info {
					flex: 0 0 auto;
					color: #000;
					font-size: $sz-28;
					width: 72%;
					text-align: left;
					.info-title {
						line-height: $sz-35;
					}
					.order-state {
						-webkit-display: flex;
						display: flex;
						justify-content: space-between;
						margin-top: $sz-15;
						span {
							font-size: $sz-24;
							color: #666;
						}
					}
					.info-time {
						margin-top: $sz-15;
						font-size: $sz-24;
						color: #666;
					}
					.info-content {
						margin-top: $sz-15;
					}
					.price {
						margin-top: $sz-15;
					}
					.info-btn {
						margin-top: $sz-15;
						float: right;
						width: 80%;
						-webkit-display: flex;
						display: flex;
						justify-content: space-between;
						.again {
							width: 32%;
							height: 0.8rem;
							border: 1px solid $background;
							border-radius: 5px;
							text-align: center;
							line-height: 0.8rem;
							font-size: $sz-24;
							color: $background;
							flex: 0 0 auto;
						}
						.getScore {
							width: 63%;
							height: 0.8rem;
							border: 1px solid red;
							border-radius: 5px;
							text-align: center;
							line-height: 0.8rem;
							font-size: $sz-24;
							color: red;
							flex: 0 0 auto;
						}
					}
				}
			}
		}
	}
</style>