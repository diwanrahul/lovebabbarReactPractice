/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';

export default function Cart() {
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
            setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    },[cart])

  return (
    <div className='flex justify-center items-center relative'>
        {
            cart.length > 0 ?
            ( <div className='flex gap-10 mt-5 bg-orang-500 h-screen '>
                <div className='w-[30rem] flex flex-col gap-y-5 bg-orang-400 p-1 overflow-auto'>
                    {
                        cart.map((item, index) => {
                            return <CartItem key={item.id} item={item} itemIndex={index} />
                        })
                    }
                </div>
                <div className='flex flex-col bg-blu-300 justify-evenly h-[500px] '>
                  <div className=' '>
                        <div className='text-3xl text-green-500 font-bold'>Your Cart</div>
                        <div className='font-semibold text-green-500 text-2xl'>Summary</div>
                        <p className='text-xl '>
                            <span className=''>Total Items : {cart.length}</span>
                        </p>
                 </div>
                 <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-xl'>Total Amount : <span className='font-bold' > ₹ {totalAmount}</span></p>
                    <button className='w-full bg-green-400 p-3 text-xl rounded-md font-semibold hover:text-white hover:bg-green-600'>
                        Checkout Now
                    </button>
                 </div>
             </div>

            </div>
                
            ) :
            (
                <div className='flex gap-3 flex-col justify-center items-center h-screen'>
                    <h1 className='text-2xl'>Cart Empty</h1>
                    <NavLink to={"/"} >
                        <button className='bg-green-400 py-5 px-7 text-2xl rounded-xl hover:bg-green-500 hover:text-white'>
                            Shop Now
                        </button>
                    </NavLink>
                </div>
            )
        }
        
    </div>
  )
}
