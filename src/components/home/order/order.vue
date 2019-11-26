<template>
	<div class="order">
		<Top></Top>
		<Tip></Tip>
		<List></List>
	</div>
</template>

<script>
import Top from './top'
import Tip from './tip'
import List from './list'
export default {
	name: 'Order',
	components: {
		Top,
		Tip,
		List
	}
}
</script>

<style lang="stylus" scoped>

</style>