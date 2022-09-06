<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-3 side">x</div>
    <div class="col-6 search d-flex align-items-center justify-content-center">
      <input
          type="text"
          placeholder="Search for products"
          class="form-control"
          v-model="searchText"
          :searchText="searchText"
      >
      <button class="btn btn-success ml-2" @click="searchInList">Search</button>
    </div>
    <div class="col-3 side">x</div>
  </div>
</div>
</template>

<script>
import {ref} from "vue";

export default {
  setup(){
    const searchText = ref('')
    const searchInList = () => {
      console.log()
    }

    return{
      searchText,
    }
  }
}
</script>

<style scoped>
 .container-fluid{
   background: darkviolet;
   height: 100px;
 }

 .side{
   height: 100px;
 }

 .search input{
   width: 30vw;
 }
</style>