<template>
  <div class="seller">
        <Top :seller="seller"></Top>
        <!-- <GoodsList :products="products" :shopcartData="shopcartData"></GoodsList> -->
        <GoodsList :products="products" :shopcartData="shopcartData" @sub="reduceCount" @plus="addCount"></GoodsList>
        <Shop-cart :shopcartData="shopcartData" :id="seller.id" @sub="reduceCount" @plus="addCount"></Shop-cart>
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
      products: []
    }
  },
  computed: {
    seller () {
      return this.$store.getters.seller
    },
    // shopCarts () {
    //   return this.$store.getters.carts
    // },
    shopcartData () {
      return this.$store.getters.shopCarts[this.seller.id] || []
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
    //this.getShopCarts(this.shopCarts, this.seller.id)
  },
  methods: {
    // getGoods () {},
    // getShopCarts (shopCarts, id) {
    //   debugger
    //   this.shopcartData = shopCarts[id] || []
    // }
    reduceCount (product) {
      this.$store.commit('reduceShopCart', {sellerId: this.seller.id, goods: product})
    },
    addCount (product) {
      this.$store.commit('addShopCart', {sellerId: this.seller.id, goods: product})
    }
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
