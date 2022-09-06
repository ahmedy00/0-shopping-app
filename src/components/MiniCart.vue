<template>
  <transition enter-active-class="animate__animated animate__slideInDown">
    <div class="container">
      <div class="row">
        <div class="col">{{}}</div>
      </div>
      <button class="btn btn-danger">go to cart</button>
    </div>
  </transition>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
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