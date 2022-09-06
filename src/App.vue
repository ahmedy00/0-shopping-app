<template>
  <main-header></main-header>
  <mini-cart v-if="this.$store.state.showMiniCart" ></mini-cart>
  <details-page v-if="false"></details-page>
  <product-cards></product-cards>
  <cart></cart>

</template>

<script>
import ProductCards from "./pages/ProductCards.vue";
import MainHeader from "./components/Main-Header.vue";
import Cart from "./pages/Cart.vue";
import DetailsPage from "./pages/DetailsPage.vue";
import MiniCart from "./components/MiniCart.vue";
export default {
  components: {
    ProductCards,
    MainHeader,
    Cart,
    DetailsPage,MiniCart
  },
  data(){
    return{

    }
  }
}
</script>