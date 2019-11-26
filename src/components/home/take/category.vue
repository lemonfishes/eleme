<template>
	<div class="category">
		<mt-swipe :auto="4000" class="swiper">
			<mt-swipe-item v-for="(cates,index) in list" :key="index">
				<a class="item" v-for="(cate,i) in cates" :href="cate.url" :key="i">
					<img :src="cate.icon" :alt="cate.name">
					<p>{{cate.name}}</p>
				</a>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
import * as api from '@/api'
export default {
	name: 'Category',
	data () {
		return {
			list: []
		}
	},
	created () {
		this.$http({
			url: api.CATEGORIES,
		}).then(res => {
			// console.log(res.data)
			this.list = res.data
		})
	}
}
</script>

<style lang="stylus" scoped>
.category {
	height: 20vh;
  margin-top: 0.2415rem;
  .swiper {
    margin: 0 0.2657rem;
    height: 4.72rem;
    .item {
      float: left;
      width: 20%;
      text-align: center;
      img {
        width: 1.1916rem;
        height: 1.1916rem;
      }
      p {
        color: #666;
      }
    }
  }
}
</style>