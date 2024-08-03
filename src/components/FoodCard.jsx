import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";
const FoodCard = ({img,name ,price ,desc,rating,id,handleToast}) => {
  const dispatch = useDispatch();
  return (
    <div className='font-bold border border-stone-700 w-[250px] mt-5 bg-black p-5 flex flex-col rounded-lg gap-2 relative' >
       <img  src={img}
       alt=''
       className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'/>
    
      <div className='text-sm flex justify-between '>
         <h2 className='text-amber-200'>{name}</h2>
         <span className='text-red-400'> {price} $</span>
      </div>
       <p className='text-gray-400 text-sm font-normal'>{desc.slice(0,50)} ... </p>
       <div className='flex justify-between'>
          <span className='text-white flex justify-center items-center'><FaStar className='mr-3 text-yellow-400'/>{rating}</span>
          <button className='p-1 text-white bg-red-500 rounded-lg hover:bg-red-700'
           onClick={()=>{
             dispatch(addToCart({id,name, price, img,rating,qty:1}));
             handleToast(name);
 
           }}>Add to cart</button>
       </div>
    </div>
  )
}

export default FoodCard