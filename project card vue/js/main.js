var app = {

    data(){
        return{
            products : products,
            iscardvisible : false,
            cart :[]

        }
    },

    methods :{
        addcart(product){
            
            var checkcart =this.cart.some(function(item){
                return item.product.id == product.id
            })

            if (!checkcart){

                this.cart.push({
                    product : product,
                    quantity : 1
                })
            }else{
                this.cart.find(function(item){
                return item.product.id == product.id
                }).quantity++;

            }
            product.stock--;
        },

        deletcart(item){
            var index = this.cart.findIndex(function(items){
                return items.product.id == item.product.id
            })
        
            this.cart.splice(index ,1)

            this.products.find(function(product){
                return product.id == item.product.id
            }).stock += item.quantity
        }
    
    }
} 


Vue.createApp(app).mount('#app');