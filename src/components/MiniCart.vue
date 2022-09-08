<template>
  <transition enter-active-class="animate__animated animate__slideInDown">
    <div class="container">
      <div class="row">
        <div class="col-3"></div>
        <div class="col-3">Name</div>
        <div class="col-2">Price</div>
        <div class="col-4">Quantity</div>
      </div>
        <div class="row pt-3" v-for="(product,index) in newProducts" :key="`product${index}`">
          <div class="col-3 text-center" ><img :src="product.img" alt="" width="50"></div>
          <div class="col-3 text-center" >{{product.id}}</div>
          <div class="col-2 text-center" >{{product.price.toFixed(2)}}</div>
          <div class="col-4 text-center d-flex" style="flex-direction: row">
            <a v-if="product.counter >= 2" class="buttonStyle" @click="product.counter--">-</a>
            <a style="color: #fafae1" v-if="product.counter < 2" class="buttonStyle" @click="product.counter--">-</a>
            <span style="user-select: none; text-align: center !important">{{ product.counter }}</span>
            <a  class="buttonStyle" @click="product.counter++">+</a>
          </div>
        </div>
      <div class="row" style="padding-left: 20px">
        <router-link to="/cart">
          <button @click="store.state.miniCartVisible=false" class="btn btn-danger">Go to Cart</button>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed, ref} from "vue";

const store = useStore()

const router = useRouter()

const emits = defineEmits(["onDeleteCart"])

const newProducts = computed(() => store.state.miniCartItems)

const goToCart = () => {
  router.push({
    name: "CartPage"
  })
}

const deleteItem = computed(() => {

})

</script>

<style scoped>
  .container{
    padding: 20px;
    border-radius: 3px;
    background: #fafae1;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 400px;
    max-height: 50vh;
    overflow-y: auto;
    position: fixed;
    top: 80px;
    right: 200px;
    overflow: auto;
    z-index: 1000;
  }

  .buttonStyle{
    background: transparent;
    border: none;
    cursor: pointer !important;
    color: red;
    font-weight: 700;
    margin: 0 7px 25px 7px;
    user-select: none;
  }
</style>
