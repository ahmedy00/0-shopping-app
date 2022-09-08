<template>

    <div class="container">
      <div class="row d-flex" style="flex-direction: row; margin-top: 100px">
        <div class="col-lg-4 col-md-6 col-12" v-for="product in filteredList" :key="`product${product.Id}`">
          <ProductCard
              :id="product.Id"
              :maker="product.Maker"
              :img="product.img"
              :price="product.Price"
              :ratings="product.Ratings"
              :details="product.Url"
              @onAddCard="carts.addCart(product)"
          >
          </ProductCard>
          <div>{{ total }}</div>
        </div>
      </div>
    </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";

import {computed, ref} from "vue";
import {useCarts} from "../compositions/cart-composition";
import {useStore} from "vuex";

const store = useStore()

const carts = useCarts()

const products = ref([
  {
    "Id": "jenlooper-cactus",
    "Maker": "@jenlooper",
    "img": "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",
    "Url": "https://www.hackster.io/agent-hawking-1/the-quantified-cactus-an-easy-plant-soil-moisture-sensor-e65393",
    "Ratings": 3,
    "Price": 10,
    "Counter": 1,
  },
  {
    "Id": "jenlooper-light",
    "Maker": "jenlooper",
    "img": "https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg",
    "Url": "https://www.hackster.io/agent-hawking-1/book-light-dee7e4",
    "Ratings": 4,
    "Price": 12,
    "Counter": 1
  },
  {
    "Id": "jenlooper-lightshow",
    "Maker": "@jenlooper",
    "img": "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png",
    "Url": "https://www.hackster.io/agent-hawking-1/bling-your-laptop-with-an-internet-connected-light-show-30e4db",
    "Ratings": 2,
    "Price": 13,
    "Counter": 1
  },
  {
    "Id": "jenlooper-survival",
    "Maker": "jenlooper",
    "img": "https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg",
    "Url": "https://www.hackster.io/agent-hawking-1/create-a-compact-survival-kit-38bfdb",
    "Ratings": 4,
    "Price": 9,
    "Counter": 1
  },
  {
    "Id": "sailorhg-bubblesortpic",
    "Maker": "sailorhg",
    "img": "https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png",
    "Url": "https://twitter.com/sailorhg/status/1090107740049952770",
    "Ratings": 5,
    "Price": 19,
    "Counter": 1
  },
  {
    "Id": "sailorhg-corsage",
    "Maker": "sailorhg",
    "img": "https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png",
    "Url": "https://twitter.com/sailorhg/status/1090113666911891456",
    "Ratings": 2,
    "Price": 11,
    "Counter": 1
  },
  {
    "Id": "sailorhg-kit",
    "Maker": "sailorhg",
    "img": "https://user-images.githubusercontent.com/41929050/61567056-142c1c80-aa33-11e9-8682-10065d338145.png",
    "Url": "https://twitter.com/sailorhg/status/1090122822007963648",
    "Ratings": 1,
    "Price": 23,
    "Counter": 1
  },
  {
    "Id": "sailorhg-led",
    "Maker": "sailorhg",
    "img": "https://user-images.githubusercontent.com/41929050/61567052-13938600-aa33-11e9-9a88-cd842073ba44.jpg",
    "Url": "https://twitter.com/sailorhg/status/1090117277540745216",
    "Ratings": 4,
    "Price": 21,
    "Counter": 1
  },
  {
    "Id": "selinazawacki-soi-shirt",
    "Maker": "selinazawacki",
    "img": "https://user-images.githubusercontent.com/41929050/61567060-142c1c80-aa33-11e9-8188-5a4803844a9e.png",
    "Url": "https://www.instagram.com/p/BNvESj-j8PI/",
    "Ratings": 3,
    "Price": 17,
    "Counter": 1
  },
  {
    "Id": "selinazawacki-soi-pins",
    "Maker": "selinazawacki",
    "img": "https://user-images.githubusercontent.com/41929050/61567059-142c1c80-aa33-11e9-939b-2ecf4492786d.png",
    "Url": "https://www.instagram.com/p/BNm6hZzDoEF/",
    "Ratings": 4,
    "Price": 10,
    "Counter": 1
  },
  {
    "Id": "vogueandcode-hipster-dev-bro",
    "Maker": "vogueandcode",
    "img": "https://user-images.githubusercontent.com/41929050/61567061-14c4b300-aa33-11e9-9fee-63ff2c0c9823.png",
    "Url": "https://www.vogueandcode.com/shop/hipster-dev-bro",
    "Ratings": 3,
    "Price": 8,
    "Counter": 1
  },
  {
    "Id": "vogueandcode-pretty-girls-code-tee",
    "Maker": "vogueandcode",
    "img": "https://user-images.githubusercontent.com/41929050/61567062-14c4b300-aa33-11e9-9dcd-8bfed4ece810.png",
    "Url": "https://www.vogueandcode.com/shop/pretty-girls-code-tee",
    "Ratings": 2,
    "Price": 16,
    "Counter": 1
  },
  {
    "Id": "vogueandcode-ruby-sis-2",
    "Maker": "vogueandcode",
    "img": "https://user-images.githubusercontent.com/41929050/61567063-14c4b300-aa33-11e9-8515-bcb866da9ea3.png",
    "Url": "https://www.vogueandcode.com/shop/ruby-sis-2",
    "Ratings": 3,
    "Price": 18,
    "Counter": 1
  },
  {
    "Id": "selinazawacki-moon",
    "Maker": "selinazawacki",
    "img": "https://user-images.githubusercontent.com/41929050/61567057-142c1c80-aa33-11e9-9781-9e442418eaab.png",
    "Url": "https://www.instagram.com/p/BFktVYPinKQ/",
    "Ratings": 5,
    "Price": 22,
    "Counter": 1
  },
  {
    "Id": "selinazawacki-shirt",
    "Maker": "selinazawacki",
    "img": "https://user-images.githubusercontent.com/41929050/61567058-142c1c80-aa33-11e9-89fb-b4f30d84d69d.png",
    "Url": "https://www.instagram.com/p/BEXlpiZCnJ3",
    "Ratings": 4,
    "Price": 17,
    "Counter": 1
  }
])

const filteredList = computed(() => {
  return products.value.filter((product) => {
    return product.Id.toLowerCase().includes(store.state.searchText.toLowerCase())
  })
})

</script>

<style scoped>

</style>
