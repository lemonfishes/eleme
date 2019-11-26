<template>
  <div class="recommend">
		<h1>美食热推</h1>
		<h2>你的口味，我都懂得</h2>
		<ul>
			<li>
				<a href="#">
					<img src="/static/img/goods/aeljtplr.webp" alt="">
					<p>特价，麻辣土豆丝</p><br>
					<span>￥15</span><i>￥43</i>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="/static/img/goods/bbz.webp" alt="">
					<p>特价，麻辣土豆丝</p><br>
					<span>￥15</span><i>￥43</i>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="/static/img/goods/bcdht.webp" alt="">
					<p>特价，麻辣土豆丝</p><br>
					<span>￥15</span><i>￥43</i>
				</a>
			</li>
		</ul>
		<p class="more">
			<a href="#">查看更多</a>
		</p>
	</div>
</template>

<script>
export default {
  name: 'Recommend'
}
</script>

<style lang="stylus" scoped>
	.recommend {
		text-align: center;
		background: #fff;
		padding: 0.333333rem 0.333333rem 0.5rem 0.333333rem;
		margin-top: 25px;
		h1 {
			font-size: 0.373333rem;
			font-weight: normal;
			color: #000;
			letter-spacing: 2px;
		}
		h2 {
			font-size: 0.373333rem;
			font-weight: normal;
			color: #999;
			letter-spacing: 2px;
			margin-top: 0.133333rem;
		}
		ul {
			width: 100%;
			-webkit-display: flex;
			display: flex;
			justify-content: space-around;
			text-align: left;
			margin-top: 0.333333rem;
			overflow: hidden;
			li {
				flex: 0 1 auto;
				width: 30%;
				a {
					display: block;
					font-size: 0.293333rem;
					img {
						width: 100%;
					}
					p {
						margin-top: 0.2rem;
					}
					span {
						color: red
					}
					i {
						color: #666;
						text-decoration: line-through;
						margin-left: 15px;
					}
				}
			}
		}
		.more {
			margin-top: 0.533333rem;
			a {
				font-size: 0.293333rem;
				color: #666;	
			}
		}
	}
</style>