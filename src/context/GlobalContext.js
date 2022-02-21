import React,{useContext,useReducer,createContext,useEffect} from 'react'
import cartItems from './data';
import reducer from '../Reducer';
const AppContext = createContext();

//console.log(cartItems);

const url = "https://course-api.com/react-useReducer-cart-project";

const InitialState = {
    loading:false,
    cart:cartItems,
    amount:0,
    total:0
}

const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer,InitialState);

    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    };
    
    const remove = (id)=>{
        dispatch ({type:"REMOVE", payload: id});
    }

    const increase = (id)=>{
        dispatch({type:"INCREASE",payload:id})
    }

    const decrease = (id)=>{
        dispatch({type:"DECREASE",payload:id})
    }

    const fetchData = async () =>{
        dispatch({type:"LOADING"})
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({type:"DISPLAY_ITEMS",payload:cart})
    }

    const toggleAmount = (id, type) =>{
        console.log(id);
        console.log(type);
        dispatch({type:"TOGGLE_AMOUNT",payload:{id,type}});
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log("inside this gettotal useeffect");
        dispatch({type:"GET_TOTALS"})
    }, [state.cart])

    return (<AppContext.Provider value={{...state,remove, increase, decrease, toggleAmount,clearCart}}>
        {children}
    </AppContext.Provider>);
}
export const GlobalContext = () => {
    return (
        useContext(AppContext)
    )
}

export {AppContext,AppProvider};
