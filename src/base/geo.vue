<template>
	<div class="geo">
		<span>{{location}}</span>
	</div>
</template>

<script>
import BMap from 'BMap'
export default {
	name: 'Geo',
	data () {
		return {
			location: ''
		}
	},
	created () {
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition (r => {
			var p = new BMap.Point(r.point.lng, r.point.lat);
			//  创建地理编码实例 
			var myGeo = new BMap.Geocoder();
			//  根据坐标得到地址描述 
			myGeo.getLocation (p, result => {
				if(result) {
					//alert(result.address);
					this.location = result.address;
					console.log(this)
				}
			});
		})
	}
}
</script>

<style lang="stylus" scoped>
	.geo {
		display: inline-block;
	}
</style>