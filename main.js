const app = new Vue({
    el: '#app',

    data() {
        return {
            title: 'Intro a VueJs',
            cart: [],
            showStyle: {
                display: 'block'
            },
            displayCart: false,
            premiumUser: false,
        }
    },
    methods: {
        addToShoppingCart(product){
            this.cart.push(product);
        },
        removeToShoppingCart(product){ 
            let index=this.cart.indexOf(product);
            if(this.cart.lenght > -1){
                
                this.cart.splice(index,1);
            }
        },
        emptyCart(){
            this.cart = [],
            this.$refs.product.test()
        }

        
    },
    computed: {
        modalStyle() {
            if (this.displayCart) {
                return this.showStyle;
            } else {
                return {};
            }
        },
        cartCheck (){
            var cartProducts = this.cart.map ((preduct) => preduct.type)
            result = cartProducts.reduce ((a,c) => (a[c] = (r[c] || 0) + 1, a), {})
           return result
        }

    }
});