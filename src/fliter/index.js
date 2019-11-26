import Vue from 'vue'

Vue.filter('currency', (v) => {
	let val = ''
	if (typeof(v) === 'number') {
		val = v.toString()
	} else {
		val = v
	}
	
	let len = val.toString().length;
	var num = toCurrency(len);
	function toCurrency(l) {
		if (l > 3) {
			let start = l - 3;
			val = val.slice(0, start) + ',' + val.slice(start);
			l = start;
			return toCurrency(l);
		}
		return val = val + '.00';
		// console.log(v)
	}
	//debugger
	return num;
})

Vue.filter('phone', (v) => {
	let val = ''
	if (typeof(v) === 'number') {
		val = v.toString()
	} else {
		val = v
	}

	return val = val.substring(0, 4) + '****' + val.substring(8)
	console.log(v)
})