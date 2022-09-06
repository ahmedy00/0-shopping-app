<template>
  <div class="card p-3 mt-2">
    <div class="d-flex justify-content-between align-items-center" style="height: 250px;">
      <div class="mt-5">
        <h5>{{ props.id }}</h5>
        <h5 class="text-uppercase mb-0">{{ props.maker }}</h5>
        <h2>${{ props.price }}</h2>
        <div class="d-flex flex-row user-ratings">
          <div class="ratings">
            <i class="fa fa-star"></i>
          </div>
          <h6 class="text-muted ml-1">{{ props.ratings }}</h6>
        </div>
      </div>
      <div class="image">
        <img :src="props.img" width="100">
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
      <a href="#"> Details </a>
    </div>
    <button class="btn btn-danger" @click="() => emits('onAddCard')">Add to cart</button>
  </div>
</template>

<script setup>
const props = defineProps(['id', 'maker', 'img', 'price', 'ratings'])
const emits = defineEmits(["onAddCard"])
</script>

<style scoped>

</style>
