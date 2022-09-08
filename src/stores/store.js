import {createStore} from "vuex";

const store = createStore({
    state: {
        searchText: '',
        miniCartItems: [],
        total: 0,
        miniCartVisible: false,
    },
    mutations: {
        addItem: (state, payload) => {
            for (let j = 0; j < state.miniCartItems.length; j++) {
                if (payload.id === state.miniCartItems[j].id) {
                    return alert('You added this product already')
                }
            }
            state.miniCartVisible = true;
            state.miniCartItems.push(payload)
            state.total = state.miniCartItems.price * state.miniCartItems.counter
            console.log("mutation", payload)
        },
        // addItem: (state, product) => {
        //   let item = state.miniCartItems.find(i => i.id === product.id)
        //
        //   if(item) item.quantity++
        //   else {state.miniCartItems.push({...product, quantity: 1})}
        // },
        deleteItem: (state, payload) => {
            const i = state.miniCartItems.map(item => item.id).indexOf(payload.id);
            state.miniCartItems.splice(i,1)
            console.log("mutation", payload)
        },
        // deleteItem: (state, product) => {
        //     let item = state.miniCartItems.find(i => i.id === product.id)
        //     if(item) {
        //         state.miniCartItems = state.miniCartItems.filter(i => i.id !== product.id)
        //     }
        // }
        // updateCartFromLocalStorage(state){
        //     const cart = localStorage.getItem('cart')
        //     if(cart) {
        //         state.miniCartItems = JSON.parse(cart)
        //     }
        // }
    },
    actions: {
        addItem: (injectee, payload) => {
            console.log("action", payload)
            injectee.commit("addItem", payload)
        },
        deleteItem: (injectee, payload) => {
            console.log("action", payload.id)
            injectee.commit("deleteItem", payload)
        }
    },
    getters: {
        productQuantity: state => product => {
            const item = state.miniCartItems.find(i => i.id === product.id)

            if(item) return item.quantity
            else return null
        }
    }
});

export default store;
