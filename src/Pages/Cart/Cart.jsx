import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { cartItems, food_list , removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate =useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-tittle">
          <p>Items</p>
          <p>Tittle</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-tittle cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p> Rs {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p> Rs {item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>

 
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2> Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs {getTotalCartAmount()===0?0:10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b> Rs { getTotalCartAmount()===0 ?0:getTotalCartAmount()+10}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to CheckOut</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promoCode enter here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart