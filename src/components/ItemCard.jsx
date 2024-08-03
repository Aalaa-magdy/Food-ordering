
import { FaPlus,FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart,incrementQty,decrementQty } from "../redux/Slices/CartSlice";
import toast, { Toaster } from 'react-hot-toast';
const ItemCard = ({id,name,qty,price,img}) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-2 shadow-lg rounded-lg p-2 border border-stone-900 mb-2'>
       <MdDelete onClick={()=>{
        dispatch(removeFromCart({id,img,name,price,qty }))
        toast(`${name} Removed!`, {
          icon: '👋',
        });
      }} className='absolute right-7 text-white hover:text-gray-600 cursor-pointer' />
       <img src={img}alt=""
       className=" h-[50px]"/>
       <div className='leading-7'>
             <h2 className='text-white font-bold text-sm'>{name}</h2>
             <div  className='flex justify-between'>
                <span className='text-red-500 font-bold text-sm'>${price}</span>
                <div className='flex justify-center items-center gap-2 absolute right-7  '>
                   <FaPlus onClick={()=>{ dispatch(incrementQty({id,name,qty,price,img}))}} className='border-2 border-white text-white  hover:border-green-500 hover:bg-green-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                   <span className='text-white'>{qty}</span>
                   <FaMinus onClick={()=>{ dispatch(decrementQty({id,name,qty,price ,img}))}} className='border-2 border-white text-white  hover:border-red-500 hover:bg-red-500 rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                </div>
              
             </div>
       </div>
    </div>
  )
}

export default ItemCard