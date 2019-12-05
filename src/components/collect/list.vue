<template>
	<div class="collectlist">
		<div class="redpackage">
		<mt-header id="" title="收藏">
			<router-link to="/home/mine" slot="left">
				<mt-button icon="back"></mt-button>
			</router-link>
		</mt-header>
		<ul class="seller-list">
			<li class="list-item">
				<div class="logo">
					<img src="/static/img/seller/coco.webp">
				</div>
				<div class="detail">
					<h3 class="name">COCO(小寨赛格店)</h3>
					<div class="fee">
						<span>&yen;10起步</span>
						<span>配送费&yen;10</span>
						<span>&yen;10/人</span>
					</div>
				</div>
			</li>
    </ul>
	</div>
	</div>
</template>

<script>
export default {
	name: 'CollectList',
	data () {
		return {
			isOnlyRead: true
		}
	}
}
</script>

<style lang="stylus" scoped>
	.collectlist {
		.mint-header {
			font-size: .426667rem /* 32/75 */;
			height: 1.2rem /* 90/75 */;
			line-height: 1.2rem;
			.mint-button {
				height: .933333rem /* 70/75 */
			}
		}
		.seller-list {
			text-align: left;
			background-color: #fff;
			position: relative;
			min-height: 300px;
			.list-item {
				display: flex;
				padding: 0.4rem 0;
				font-size: 0.293333rem;
				border-bottom: 0.013333rem solid #eee;
				a{
					display: flex;
					color:#333;
				}
				.logo {
					flex: none;
					width: 1.733333rem;
					height: 1.733333rem;
					padding: 0 0.266667rem;
					img {
						display: block;
						width: 100%;
						height: 100%;
						border-radius: 0.053333rem;
						border: 0.133333vw solid rgba(0, 0, 0, 0.08);
					}
				}
				.detail {
					flex: 1;
					padding-left: 0.266667rem;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.h3 {
						font-size: 0.4rem;
					}
					div {
						color: #666;
					}
					.name{
						margin-bottom:15px;
					}
					.fee{
						margin:7px 0;
					}
					.count{
						cursor:default;
					}
					.activity{
						li{
							margin-top:10px;
						}
					}
				}
			}
		}
	}
</style>