import { createStore } from "vuex";

const store = createStore({
    state: {
        searchText: '',
        showMiniCart: false,
        miniCartItems: [],
    }
});

export default store;