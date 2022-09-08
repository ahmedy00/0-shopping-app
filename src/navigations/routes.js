import {createRouter, createWebHistory} from "vue-router";
import ProductCards from "../pages/ProductCards.vue";
import Cart from "../pages/Cart.vue";
import DetailsPage from "../pages/DetailsPage.vue";


const routes = [
    {
        name: "ProductsPage",
        path: "/",
        component: ProductCards
    },
    {
        name: "CartPage",
        path: "/cart",
        component: Cart
    },
    {
        name: "DetailsPage",
        path: "/details",
        component: DetailsPage
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;