import React from 'react';
import CartItems from './CartItems';
import { GlobalContext } from './context/GlobalContext';

function CartContainer() {
    const {cart, total,clearCart} = GlobalContext();
    console.log(cart);
    if(cart.length === 0){
        return (
            //section shows that the cart is empty
            <section>
                <header>
                    <h2>Your WishList</h2>
                    <h4>is Empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className='cart'>
            <header>
                <h2>Your WishList</h2>
            </header>
            <div className='cart-box'>
                {cart.map((item)=>{
                    return <CartItems key={item.id} {...item} />
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h1>Total <span>₹ {total*75}</span></h1>
                </div>
                <button className='btn clear-btn' onClick={()=>{clearCart()}} >clear cart</button>
            </footer>
        </section>
    )
}

export default CartContainer
