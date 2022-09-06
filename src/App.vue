<template>
  <main-header></main-header>
  <product-cards></product-cards>
  <cart></cart>
</template>

<script>
import ProductCards from "./components/ProductCards.vue";
import MainHeader from "./components/Main-Header.vue";
import Cart from "./components/Cart.vue";

export default {
  components: {
    ProductCards,
    MainHeader,
    Cart
  },
  data(){
    return{

    }
  }
}
</script>