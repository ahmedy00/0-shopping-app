import {useStore} from "vuex";

export const useCarts = () => {
    const store = useStore()

    const addCart = async (product) => {
        store.state.showMiniCart = true
        await store.dispatch("addItem", {id: product.Id, price: product.Price})
    }

    return {
        addCart
    }
}
