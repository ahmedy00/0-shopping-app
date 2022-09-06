<template>
  <div class="container-fluid">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-6 search d-flex align-items-center justify-content-center">
        <input
            type="text"
            placeholder="Search for products"
            class="form-control"
            v-model="this.$store.state.searchText"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {

    }
  }
}
</script>

<style scoped>
.container-fluid {
  background: darkviolet;
  height: 100px;
  position: fixed;
  top: 0;
  z-index: 999;
}

.side {
  height: 100px;
}

.search input {
  width: 30vw;
  min-width: 300px;
}
</style>