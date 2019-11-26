<template>
  <div class="top">
		<div class="top-img-side">
			<a href="#" class="top-img score-store">
				<img src="/static/img/find/faxian-1.png" alt="">
			</a>
			<a href="#" class="top-img free">
				<img src="/static/img/find/faxian-4.png" alt="">
			</a>
		</div>
		<div class="top-img-side">
			<a href="#" class="top-img dlcs">
				<img src="/static/img/find/faxian-2.png" alt="">
			</a>
			<a href="#" class="top-img rcmd">
				<img src="/static/img/find/faxian-3.png" alt="">
			</a>
			
			<a href="#" class="top-img red-pckg">
				<img src="/static/img/find/faxian-5.png" alt="">
			</a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style lang="stylus" scoped>
	.top {
		width: 100%;
		-webkit-display: flex;
		display: flex;
		align-content: flex-start;
		flex-wrap: wrap;
		.top-img-side {
			width: 50%;
			flex: 0 1 auto;
			.top-img {
				display: block;
				
				img {
					width: 100%;
					
				}
				&.score-store {
					
					img {
						width: 100%;
						
					}
				}
			}
		}
	}
</style>