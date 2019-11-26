<template>
  <div class="seller">
        <Top :seller="seller"></Top>
        <!-- <GoodsList :products="products" :shopcartData="shopcartData"></GoodsList> -->
        <GoodsList :products="products"></GoodsList>
        <Shop-cart :shopcartData="shopcartData"></Shop-cart>
  </div>
</template>
<script>
import * as api from '@/api/index'
import Top from './top/top'
import ShopCart from './shopCart/shopCart'
import GoodsList from './goodsList/GoodsList'
export default {
  name: 'Seller',
  data () {
    return {
      showCart: true,
      products: [],
      shopcartData: []
    }
  },
  computed: {
    seller () {
      return this.$store.getters.seller
    }
  },
  components: {
    Top,
    ShopCart,
    GoodsList
  },
  created () {
    this.$http({
      url: api.GOODS
    }).then(res => {
      // console.log(res)
      // console.log(this.seller)
      let arr = res.data.filter(v => {
        return v.sellerId === this.seller.id
      })
      // console.log(arr)
      this.products = arr[0]
    })
  },
  methods: {
    getGoods () {}
  }
}
</script>
<style lang="stylus" scoped>
.seller {
  position:absolute;
  overflow: hidden;
  z-index: 99;
  height: 100%;
  width:100%;
  background-color: #fff;
  top:0;
  left:0;
}
</style>
