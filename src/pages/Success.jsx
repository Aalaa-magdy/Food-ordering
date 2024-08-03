import {PropagateLoader} from "react-spinners"
import {useState,useEffect}from 'react';

const Success = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  })
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       {
        loading ?  <PropagateLoader color='#ffedd5'/>: <div>
        <h2 className='text-4xl font-semibold mb-4 text-amber-200'>Order Successful!</h2>
        <p className='text-gray-300 ml-14'>Thank you for your order.</p>
        <p className='text-gray-300 ml-8'>We will deliver it as soon as possible.</p>
        </div>
       }
      
    </div>
  )
}

export default Success