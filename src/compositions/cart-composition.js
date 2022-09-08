import {useStore} from "vuex";

export const useCarts = () => {
    const store = useStore()

    const addCart = async (product) => {
        await store.dispatch("addItem", {
            img: product.img,
            id: product.Id,
            price: product.Price,
            counter: product.Counter
        })
    }
    const deleteCart = async (product) => {
        await store.dispatch("deleteItem", {})
    }

    return {
        addCart,
        deleteCart
    }
}
