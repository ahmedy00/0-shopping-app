<template>
  <transition enter-active-class="animate__animated animate__slideInDown">
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-4 text-center">Name</div>
        <div class="col-2 text-center">Price</div>
        <div class="col-2 text-center">Quantity</div>
        <div class="col-2 text-center"></div>
      </div>
        <div class="row pt-3" v-for="(product,index) in newProducts" :key="`product${index}`">
          <div class="col-2 text-center"><img :src="product.img" alt="" width="50" height="50" style="border-radius: 25px"></div>
          <div class="col-4 text-center mt-2" >{{product.id}}</div>
          <div class="col-2 text-center mt-2" >${{product.price.toFixed(2)}}</div>
          <div class="col-2 text-center d-flex align-items-center justify-content-center flex-row">
            <a v-if="product.counter >= 2" class="buttonStyle" @click="product.counter--">-</a>
            <a style="color: #fafae1" v-if="product.counter < 2" class="buttonStyle" @click="product.counter--">-</a>
            <p style="user-select: none; text-align: center !important">{{ product.counter }}</p>
            <a  class="buttonStyle" @click="product.counter++">+</a>
          </div>
          <div class="col-2">
            <button
                class="btn btn-danger p-0"
                style="border-radius: 50%; width: 40px; height: 40px;"
                @click="() => emits('onDeleteCart')"
            >

              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      <div class="row" style="padding: 15px 0 0 15px">
        <router-link to="/cart">
          <button @click="store.state.miniCartVisible=false" class="btn btn-success">Go to Cart</button>
        </router-link>
        <div>
          <p class="ml-2 mt-2">Total Price: ${{total.toFixed(2)}}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed} from "vue";

const store = useStore()

const router = useRouter()

const emits = defineEmits(["onDeleteCart"])

const newProducts = computed(() => store.state.miniCartItems)

// const goToCart = () => {
//   router.push({
//     name: "CartPage"
//   })
// }

const deleteItem = computed(() => {

})

const total = computed(() => {
  let total = 0;
  for(let i=0; i< newProducts.value.length; i++){
    total += newProducts.value[i].price * newProducts.value[i].counter
  }
  return total
})


</script>

<style scoped>
  .container{
    padding: 20px;
    border-radius: 3px;
    background: #fafae1;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    width: 400px;
    max-height: 50vh;
    overflow: auto;
    position: fixed;
    top: 80px;
    right: 200px;
  }

  .buttonStyle{
    background: transparent;
    border: none;
    cursor: pointer !important;
    color: red;
    font-weight: 700;
    margin: 7px 7px 25px 7px;
    user-select: none;
  }
</style>
