export const productMixin = {
    props: ['searchText'],
    computed: {
        filteredList() {
            return this.products.filter(product => {
                return product.Id.toLowerCase().includes(this.$store.state.searchText.toLowerCase())
            })
        },
        // filteredRating(){
        //     return this.products.filter(product => {
        //         return product.Ratings.
        //     })
        // }
    }
}