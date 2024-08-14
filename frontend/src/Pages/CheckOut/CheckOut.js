import React from 'react'
import PageIndicator from './../../Components/PageIndicator';
import { useLocation } from 'react-router-dom';
import { Divider } from 'antd';
import Details from '../../Components/Details';

function CheckOut() {
    const location = useLocation();
    const { state } = location;
    const { product,count } = state;
    console.log(state)
    return (
        <>
            <PageIndicator page={"Checkout"} />

            <div className='checkout-content'>
                <div className='checkout-left'>
                    <p style={{fontSize:"3rem" , fontWeight:"600"}}>Billing Details</p>
                    <div style={{display:"flex" ,gap:"10rem"}}>
                        <span>First Name</span>
                        <span >Last Name</span>
                    </div>
                    <div style={{display:"flex" , gap:"1rem"}}>
                        <input></input>
                        <input></input>
                    </div>
                    <p>Company Name (Optional)</p>
                    <input />
                    <p>Country/Region</p>
                    <input />
                    <p>Street Address</p>
                    <input />
                    <p>Town / City</p>
                    <input />
                    <p>Province</p>
                    <input />
                    <p>ZIP Code</p>
                    <input />
                    <p>Phone</p>
                    <input />
                    <p>Email Address</p>
                    <input />
                    <p></p>
                    <input placeholder='Additional Information' />
                </div>
                <div className='checkout-right'>
                    <div className='price-details'>
                        <p style={{fontSize:"1.5rem" , fontWeight:"500"}}><span>Product</span><span>Subtotal</span></p>
                        <p><span style={{color:"#9F9F9F"}}>{product.name} * {count}</span><span>{product.price} * {count}</span></p>
                        <p><span>Subtotal</span><span>{product.price} * {count}</span></p>
                        <p><span>Total</span><span style={{color:"#B88E2F" , fontSize:"1.25rem" , fontWeight:"700"}}>{product.price} * {count}</span></p>
                    </div>
                 <Divider/>
                    <div>
                        <p><span>⚫</span>Direct Bank Transfer</p>
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <p><span>⚪</span>Direct Bank Transfer</p>
                        <p><span>⚪</span>Cash on Delivery</p>
                    </div>
                    <div>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span style={{fontWeight:"600"}}>privacy policy</span>.</p>
                    </div>

                    <div>
                        <button className='check-cart-button'>Place Order</button>
                    </div>

                </div>
            </div>
<Details/>
        </>
    )
}

export default CheckOut