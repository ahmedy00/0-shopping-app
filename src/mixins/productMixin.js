export const productMixin = {
    props: ['searchText'],
    computed: {
        filtered() {
            return this.$store.state.products.filter((element) => {
                return element.match(this.searchText)
            })
        }
    }
}