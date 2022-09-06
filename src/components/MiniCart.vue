<template>
  <transition enter-active-class="animate__animated animate__slideInDown">
    <div class="container">
      <div class="row">
        <div class="col-12" v-for="(product,index) in products" :key="`product${index}`">{{product.price}}</div>
      </div>
      <button class="btn btn-danger">Go To Cart</button>
    </div>
  </transition>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from "vue";

const store = useStore()

const products = computed(() => store.state.miniCartItems)
</script>

<style scoped>
  .container{
    border: 1px solid red;
    width: 350px;
    height: 450px;
    position: fixed;
    right: 0;
  }
</style>
