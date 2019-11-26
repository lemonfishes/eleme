<template>
	<el-rate v-model="value" show-score :allow-half="true" :disabled="onlyRead"></el-rate>
</template>

<script>
export default {
	props: ['onlyRead', 'value'],
	name: 'Rate',
  data () {
		return {
			defValue: 4
		}
	}
}
</script>