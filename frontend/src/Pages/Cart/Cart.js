import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PageIndicator from './../../Components/PageIndicator';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiDeleteBin7Fill } from "react-icons/ri";
import Details from '../../Components/Details';

function Cart() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const { product, count } = state;
    const [prodData, setProdData] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            await axios.get('http://localhost:5000/cartItem/show')
                .then(res => setProdData(res.data))
        }
        fetchData()
    }, [prodData])

    function handleClick(item) {
        navigate('/CheckOut', { state: { product: item, count: count } })
    }

    return (
        <>
            <PageIndicator page={"Cart"} />
            <div className='cart-content '>
                <div className='cart-heading-left'>
                    <div className='cart-heading-indicator'>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Subtotal</span>
                    </div>
                    {
                        prodData.length === 0 ? <h2 style={{textAlign:"center" ,marginTop:"2rem"}}>Cart Empty</h2> : prodData.map(item => {
                        return    <>

                                <div className='cart-item'>

                                    <img src={`http://localhost:5000/${item.img}`} />
                                    <div style={{ color: "#9F9F9F" }}>{item.prodName}</div>
                                    <div style={{ color: '#9F9F9F' }}>{item.prodPrice}</div>
                                    <div>{item.quantity}</div>
                                    <div>{item.prodPrice} * {item.quantity}</div>
                                    <div><RiDeleteBin7Fill style={{ color: "#b88e2f", fontSize: "1.15rem" }} /></div>
                                </div>
                            </>
                        })
                    }

                </div>
                <div className='cart-heading-right'>
                    <div>Cart Totals</div>
                    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "2rem", fontWeight: "500" }}>SubTotal   <span style={{ fontWeight: "400", color: "#9F9F9F" }}>{count} * {product.price}</span></div>
                        <div style={{ display: "flex", gap: "2rem", fontWeight: "500" }}>Total <span style={{ color: "#B88E2F" }}>{count} * {product.price}</span></div>
                    </div>
                    <div><button className='check-cart-button' onClick={() => handleClick(product)}>Check Out</button></div>
                </div>
            </div>

            <Details />

        </>
    )
}

export default Cart