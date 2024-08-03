
import FoodCard  from "./FoodCard"
import FoodData from "../data/FoodData"
import toast, { Toaster } from 'react-hot-toast';
import {useSelector }from 'react-redux'
const handleToast = (name)=>{
  toast.success(`Added ${name} to cart`);
}


const FoodItems = () => {
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  return (
    <>
          <Toaster
         position="top-center"
         reverseOrder={false}
         />
          
     <div className='flex flex-wrap gap-20 justfiy-center lg:justify-start mx-32' >
       {
        FoodData.filter((food)=>{
          if(category==="All"){
            return food.name.toLowerCase().includes(search.toLowerCase())
          }
          else{
            return food.category===category && food.name.toLowerCase().includes(search.toLowerCase()) 
          }
        }).map((food)=>(
          <FoodCard
          key={food.id}
          id={food.id}
          img={food.img}
          name={food.name}
          price={food.price}
          rating={food.rating}
          desc={food.desc}
          handleToast={handleToast}
            />
        ))
       }
    
      
    </div>
    
    </>

  )
}

export default FoodItems