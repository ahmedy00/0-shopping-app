<template>
  <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <p style="color: white"><span class="h2">Shopping Cart </span><span class="h4">({{newProducts.length}} item<span v-if="newProducts.length>1">s</span> in your cart)</span></p>
          <div class="card mb-4">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-2"> </div>
                <div class="col-2 text-muted text-center">Name</div>
                <div class="col-2 text-muted text-center">Quantity</div>
                <div class="col-2 text-muted text-center">Unit Price</div>
                <div class="col-2 text-muted text-center">Total</div>
              </div>
              <div class="row align-items-center pt-2 pb-2" style="border: 1px solid lightgray" v-for="product in newProducts" :key="`product${index}`">
                <div class="col-md-2">
                  <img :src="product.img" width="75">
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                    <p class="lead fw-normal text-center mb-0">{{ product.id }}</p>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="lead fw-normal mb-0">{{ product.counter }}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="lead fw-normal mb-0">${{ product.price }}</p>
                  </div>
                </div>
                <div class="col-md-2 d-flex justify-content-center">
                  <div>
                    <p class="lead fw-normal mb-0">${{product.price * product.counter}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5">
            <div class="card-body p-4">
              <div class="float-end">
                <p class="mb-0 me-5 d-flex align-items-center">
                  <span class="small text-muted me-2">Order total:</span>
                  <span class="lead fw-normal pl-2">${{ total.toFixed(2) }}</span>
                </p>
              </div>
            </div>
          </div>
          <router-link to="/payment">
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-primary btn-lg" @click="">Go to payment</button>
            </div>
          </router-link>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import {useStore} from "vuex";
import {computed, ref} from "vue";

const store = useStore()

const newProducts = computed(() => store.state.miniCartItems)

const total = computed(() => {
  let total = 0;
  for(let i=0; i< newProducts.value.length; i++){
    total += newProducts.value[i].price * newProducts.value[i].counter
  }
  return total
})


</script>

<style scoped>
section{
  background: url("https://static.vecteezy.com/system/resources/previews/001/410/750/original/cyber-monday-happy-shopping-background-free-vector.jpg") no-repeat;
  background-size: 100% 100%;
  margin-top: 100px;
}

</style>