<template>
	<div class="find">
		<div class="title">
			<h1>发现</h1>
		</div>
		<Top></Top>
		<a href="#" class="ad">
			<img src="/static/img/ad/ad3.jpg" alt="">
		</a>
		<Recommend></Recommend>
		<Recommend></Recommend>
	</div>
</template>

<script>
import Top from '@/components/home/find/top'
import Recommend from '@/components/home/find/recommend'
export default {
	name: 'Find',
	components: {
		Top,
		Recommend
	}
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/variable.styl"
	.find {
		background #eee
		.title {
			text-align: center;
			font-size: $sz-14;
			height: 1.066666rem;
			color: #fff;
			line-height: 1.066666rem;
			background: $background;
			h1 {
				letter-spacing: 0.026666rem;
			}
		}
		.ad {
			width: 100%;
			height: 100%;
			display: block;
			margin-top: 0.133rem;
			img {
				width: 100%
			}
		}
	}
</style>