import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import ItemCard from './ItemCard'
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { emptyCart } from "../redux/Slices/CartSlice";

const Cart = () => {
  const [activeCart,setActiveCart]=useState(false);
  const cartItems = useSelector((state)=>state.cart.cart);
  const totalItems = cartItems.reduce((totalQty,item)=> totalQty+item.qty,0);
  const totalPrice = cartItems.reduce((total,item)=> total+(item.qty * item.price),0);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  return (
    <>
         <div className={`fixed right-0 top-0 w-full  lg:w-[20vw] h-full p-5 bg-black  text-amber-200 z-50
          mb-3 ${activeCart ? "translate-x-0" : "translate-x-full "}
         transition-all duration-500 `}>
              <div className='flex justify-between items-center my-3' >
                  <span className='text-xl font-bold'>My Order</span>
                  <MdOutlineClose className='border-2 border-amber-200 text-amber-200 font-bold p-1 text-2xl rounded-lg
                  hover:text-red-500 hover:border-red-500 cursor-pointer' onClick={()=>setActiveCart(!activeCart)} />

              </div>

              {
                cartItems.length > 0 ?
                cartItems.map((food)=>{
                  return <ItemCard key={food.id} 
                  id={food.id} 
                  name={food.name}
                  price={food.price} 
                  img={food.img}
                  qty={food.qty}/>
                }) :<h2 className='text-xl font-bold text-gray-500 mt-20 text-center'>Your cart is empty</h2>
              }
          
               
              <div className='absolute bottom-0'>
                  <h3 className='text-amber-50 font-semibold'>Items : {totalItems} </h3>
                  <h3 className='text-amber-50 font-semibold'>Total Amount : {totalPrice}</h3>
                  <hr className='w-[90vw] lg:w-[18vw] my-2'/>
                  <button
                   className='bg-red-500 text-white font-bold py-2 rounded-lg w-[90vw]  lg:w-[18vw] mb-5 hover:bg-red-700'
                   onClick={()=>{
                    navigate("/Success")
                    dispatch(emptyCart())
                   }}>Checkout</button>
               </div>
          </div>
          <FaShoppingCart className={`rounded-full bg-amber-200 text-black shadow-md text-5xl p-3 fixed bottom-4 right-4 hover:bg-amber-400
           ${totalItems > 0 && "animate-bounce delay-500 transition-all"}
          `}
           onClick={()=>setActiveCart(!activeCart)} />
    </>
  
   )
}

export default Cart