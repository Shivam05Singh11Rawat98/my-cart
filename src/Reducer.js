const reducer = (state,action)=>{
    
    if(action.type === 'CLEAR_CART'){
        return {...state,cart:[]};
    }

    if(action.type === 'REMOVE'){
        return {
            ...state, cart:state.cart.filter((cartItem)=> cartItem.id!== action.payload)
        }
    }

    if(action.type === 'INCREASE'){
        let tempCart = state.cart.map((cartItem)=> {
            if(cartItem === action.payload) {
                return {...cartItem,amount:cartItem+1};
            }
            return cartItem;
        });
        return {...state,cart:tempCart}
    }

    if(action.type === 'DECREASE'){
        let tempCart = state.cart.map((cartItem)=> {
            if(cartItem === action.payload) {
                return {...cartItem,amount:cartItem-1};
            }
            return cartItem;
        }).filter((cartItem)=> cartItem.id!==action.payload)
        return {...state,cart:tempCart}
    }

    if(action.type === 'GET_TOTALS'){
        
        // let {total,amount} = state.cart.reduce((cartTotal, cartItem) => {
        //     const {price, amount} = cartItem;
        //     const itemTotal = price * amount;

        //     cartTotal.total += itemTotal;
        //     cartTotal.amount += amount; 
        // },
//         var totalAmountnswers = 0
// var totalQuant = 0

// respostas.forEach(function (element,index) {
//     console.log(index+"-"+element["responses"])
//     totalAmountnswers += element["responses"]
//     totalQuant += (index*element["responses"])                
// })
        // {
        //     total:0,
        //     amount:0,
        // }
        // );
        var totalAmount = 0
        var totalQuant = 0
        state.cart.forEach(function (cartItem) {
                totalAmount += cartItem.price*cartItem.amount;
                totalQuant += cartItem.amount;
        })
        totalAmount = parseFloat(totalAmount.toFixed(2));
        return {...state,total:totalAmount,amount:totalQuant}
    }

    if(action.type === 'LOADING'){
        return {...state,loading:true}
    }

    if(action.type === 'DISPLAY_ITEMS'){
        return {...state,loading:false,cart: action.payload}
    }

    if(action.type === 'TOGGLE_AMOUNT'){
        console.log('inside toggle Amount');
        let tempCart = state.cart.map((cartItem) =>{
            if(cartItem.id === action.payload.id){
                if(action.payload.type === 'inc'){
                    console.log('inside inc');
                    return {...cartItem, amount:cartItem.amount+1}
                }
                if(action.payload.type === 'dec'){
                    
                    return {...cartItem, amount:cartItem.amount-1}
                }
                
            }
            return cartItem;
        }).filter((cartItem)=> cartItem.amount !== 0);
        return {...state, cart:tempCart};
    }

    throw new Error ("no matching action type");
}

export default reducer;