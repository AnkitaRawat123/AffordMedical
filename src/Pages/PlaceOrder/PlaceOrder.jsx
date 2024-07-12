import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount}= useContext(StoreContext)
  return (
    <form  className="place-order">
      <div className="place-order-left">
        <p className='tittle'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='FirstName' />
          <input type="text" placeholder='LastName' />
        </div>
        <input type="email"  placeholder='Email address'/>
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
          <button >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
