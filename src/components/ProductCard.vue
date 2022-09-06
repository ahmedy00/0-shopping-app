<template>
    <div class="card p-3 mt-2">
      <div class="d-flex justify-content-between align-items-center" style="height: 250px;">
        <div class="mt-5">
          <h5>{{ id }}</h5>
          <h5 class="text-uppercase mb-0">{{ maker }}</h5>
          <h2>${{ price }}</h2>
          <div class="d-flex flex-row user-ratings">
            <div class="ratings">
              <i class="fa fa-star"></i>
            </div>
            <h6 class="text-muted ml-1">{{ ratings }}</h6>
          </div>
        </div>
        <div class="image">
          <img src="require(`img`)" width="200">
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
        <a href="#"> Details </a>
      </div>
      <button class="btn btn-danger" @click="addToCart">Add to cart</button>
    </div>
</template>

<script>
export default {
  props: ['id', 'maker', 'img', 'price', 'ratings'],
  data() {
    return{

    }
  },
  methods: {
    addToCart(){
      this.$store.state.showMiniCart = true;
      console.log(this.$store.state.miniCartItems)
    }
  }
}
</script>

<style scoped>

</style>