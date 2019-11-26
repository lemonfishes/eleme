<template>
	<div class="tip">
		尚有<span>5</span>单未评价，立即评价最多可获得<span>716</span>积分
	</div>
</template>

<script>
import Tip from './tip'
export default {
	name: 'Tip'
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/variable.styl"
	.tip {
		width: 90%;
		height: 0.8rem;
		border: 1px solid #999;
		border-radius: 50px;
		padding-left: $sz-25;
		margin: $sz-12 auto 0;
		line-height: 0.8rem;
		text-align: left;
		color: #666;
		font-size: $sz-24;
		span {
			color: red;
		}
	}
</style>