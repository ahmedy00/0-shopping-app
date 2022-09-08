<template>
  <div class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-2">
        <router-link to="/" @click="window.location.reload();">
          <i  class="fa-sharp fa-solid fa-house-chimney"
             style="color: blue; font-size: 30px; margin-left: 100px;"></i>
        </router-link>
      </div>
      <div class="col-6 search d-flex align-items-center justify-content-center">
        <input
            type="text"
            placeholder="Search for products"
            class="form-control"
            v-model="this.$store.state.searchText"
        >
      </div>
      <div class="col-2 d-flex align-items-center" style="height: 100%;">
            <a style="cursor:pointer; color: blue;" @click="store.state.miniCartVisible = !store.state.miniCartVisible">
              <i style="margin-left: 100px;font-size: 30px" class="fa-solid fa-cart-shopping"></i>
            </a>
        <MiniCart
            v-if="store.state.miniCartVisible"
            @onDeleteCart="carts.deleteCart(product)"
        >
        </MiniCart>
      </div>
    </div>
  </div>
</template>

<script setup>
import MiniCart from "../components/MiniCart.vue"
import {useStore} from "vuex";
import {useCarts} from "../compositions/cart-composition.js";

const store = useStore()

const carts = useCarts()

</script>

<style scoped>
.container-fluid {
  background: #66b4ad;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 999;
}

.search input {
  width: 30vw;
  min-width: 300px;
}
</style>