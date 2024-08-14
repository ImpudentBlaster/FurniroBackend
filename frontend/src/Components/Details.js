import React from 'react'
import { GoVerified } from "react-icons/go";
import { BsFillTrophyFill } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
function Details() {
    return (
        <>
            <div className='details-container'>
                <div className='details-1'>
                    <BsFillTrophyFill style={{fontSize:"3rem"}}/>
                    <div className='trophy-text'>
                        <span>High Quality</span>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='details-2'>
                    <GoVerified style={{fontSize:"3rem"}}/>
                    <div className='verified-text'>
                        <span>Warranty Protection</span>
                        <p>Over 2 years</p>
                    </div>
                </div>
                <div className='details-3'>
                    <MdLocalShipping style={{fontSize:"3rem"}}/>
                    <div className='shipping-text'>
                        <span>Free Shipping</span>
                        <p>Order over 150 $</p>
                    </div>
                </div>
                <div className='details-4'>
                <BiSupport style={{fontSize:"3rem"}}/>
                <div className='support-text'>
                  <span>24 / 7 Support</span>
                  <p>Dedicated support</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Details