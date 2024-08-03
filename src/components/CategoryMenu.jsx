import {useState,useEffect}from 'react';
import FoodData from "../data/FoodData"; 
import {useDispatch,useSelector} from 'react-redux'
import {setCategory} from '../redux/Slices/CategorySlice'
import { setSearch } from '../redux/Slices/SearchSlice';
const CategoryMenu = () => {

  const [category,setCategories] = useState([]);
  const listUniqueCategories = ()=>{
    const uniqueCategories = [...new Set(FoodData.map((food)=>food.category))];
    setCategories(uniqueCategories);
  }
  useEffect(
    ()=>{
      listUniqueCategories();
    }
  ,[])  

  const dispatch = useDispatch(); 
  const selectedCategory = useSelector((state)=>state.category.category)
  return (

        <div className="bg-black bg-opacity-70 h-full w-full flex flex-col  items-center relative mt-28 mb-8">
          <div>
             <h3 className=" text-4xl  tracking-wider text-amber-300 font-adu mb-6" >Yummy N Tasty </h3> 
             <h2 className=' text-4xl text-white font-bold'> DELICIOUS MENU </h2>
          </div>
          <div className='flex wrap gap-20 mt-10 '>
            <div className='flex flex-row gap-4  overflow-x-hidden scroll-smooth lg:over-flow-x-hidden '>
            <button
                    onClick={()=> dispatch(setCategory("All"))} 
                    className={`p-2 bg-white font-bold rounded-lg text-black  hover:bg-amber-100 hover:text-red-950 ${selectedCategory === "All " && "bg-amber-100 text-red-950"}`}>
                    All
                  </button>
            {
              category.map((category,index)=>{
                return (
                  <button
                    onClick={()=> dispatch(setCategory(category))}  
                    key={index} 
                    className={`p-2 bg-white font-bold rounded-lg text-black  hover:bg-amber-100 hover:text-red-950 ${selectedCategory === category && "bg-amber-100 text-red-950"}`}>
                    {category}
                  </button>
                )

 
              })
            }
                 
             </div>
          <div>
           <input type= 'search'
           name='search'
           id=""
           placeholder="Search here ..."
           autoComplete='off'
           onChange={(e)=>dispatch(setSearch(e.target.value))}
           className='p-2 border border-gray-400 text-sm text-black font-bold rounded-lg outline-none w-full lg:w-[400px]'/>

         </div>
          </div>
          
      
        </div>
    
    
  )
}

export default CategoryMenu  