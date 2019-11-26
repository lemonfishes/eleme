<template>
  <div class="top">
		<h1>订单</h1>
		<h1>早餐</h1>
	</div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/variable.styl"
	.top {
		text-align: center;
		font-size: $sz-14;
		height: 1.066666rem;
		color: #fff;
		line-height: 1.066666rem;
		background: $background;
		-webkit-display: flex;
		display: flex;
		justify-content: space-between;
		padding: 0 $sz-15;
		h1 {
			letter-spacing: 0.026666rem;
			flex: 0 1 auto;
			font-weight: lighter;
		}
	}
</style>