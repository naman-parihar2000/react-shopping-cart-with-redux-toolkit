import React from 'react'
import CartItem from './CartItem.js'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice.js'

const CartContainer = () => {
    const dispatch = useDispatch()

    const { cartItems, total, amount } = useSelector((store) => store.cart)

    if (amount < 1) {
        return (
            <section>
                <header>
                    <h2>Your Bag</h2>
                    <h4>Is Currently Empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header>
                <h2>
                    your bag
                </h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item}></CartItem>
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>CLEAR CART</button>
            </footer>
        </section>
    )
}

export default CartContainer