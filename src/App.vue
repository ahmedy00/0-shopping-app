<template>
  <MainHeader></MainHeader>
  <router-view to="/"></router-view>
  <router-link to="/cart"></router-link>
</template>

<script setup>
import MainHeader from "./components/Main-Header.vue";
import {useStore} from "vuex";

const store = useStore()

</script>