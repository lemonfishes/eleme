export default {
	getSeller (context, seller) {
		context.commit('saveSeller', seller)
	}
}