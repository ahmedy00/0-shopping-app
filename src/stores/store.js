import {createStore} from "vuex";

const store = createStore({
    state: {
        searchText: '',
        showMiniCart: false,
        miniCartItems: [],
    },
    mutations: {
        addItem: (state, payload) => {
            state.miniCartItems.push(payload)
            console.log("mutation", payload)
        }
    },
    actions: {
        addItem: (injectee, payload) => {
            console.log("action", payload)
            injectee.commit("addItem", payload)
        }
    }
});

export default store;
