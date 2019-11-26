<template>
	<div class="ad">
		<mt-swipe :auto="4000" class="swiper">
			<mt-swipe-item v-for="(v,index) in list" :key="index">
				<img :src="v" class="ad-img" />
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
export default {
	name: 'Ad',
	data () {
		return {
			list: [
				'/static/img/ad/ad.png',
				'/static/img/ad/ad2.gif',
				'/static/img/ad/ad3.jpg'
			]
		}
	}
}
</script>

<style lang="stylus" scoped>
.ad {
	height: 20vh
		.ad-img {
			width: 100%
		}
}
</style>