<template>
	<div class="take">
		<Top></Top>
		<Category></Category>
		<Ad></Ad>
		<Recommend></Recommend>
		<SellerList></SellerList>
	</div>
</template>

<script>
import Top from './top'
import Ad from './ad'
import Category from './category'
import Recommend from './recommend'
import SellerList from './sellerList'
export default {
	name: 'Take',
	components: {
		Top,
		Category,
		Ad,
		Recommend,
		SellerList
	}
}
</script>

<style lang="stylus" scoped>

</style>