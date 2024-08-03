import { FaFacebookF } from "react-icons/fa"; //<FaFacebookF />
import { FaTwitter } from "react-icons/fa";//<FaTwitter />
import { FaGoogle } from "react-icons/fa";//<FaGoogle />
import { FaLocationArrow } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='h-[320px] mt-14 mx-10 bg-gray-950 px-7 py-10 mb-14'>
         <div className='flex justify-between'>
                   <div className='flex flex-row gap-1 mb-6'>
                      <span className='text-white'>FOLLOW US :  </span>
                      <span className='text-white flex justify-center items-center'><FaFacebookF className='mr-3 text-white'/></span>
                      <span className='text-white flex justify-center items-center'><FaTwitter className='mr-3 text-white'/></span>
                      <span className='text-white flex justify-center items-center'><FaGoogle className='mr-3 text-white'/></span>
                   </div>
            
                   <div className='flex flex-row '>
                    
                      <input type='text' placeholder='Your Email Address ' className='text-gray-500 text-sm bg-black border border-stone-400 px-9  relative bottom-4 right-2'/>
                      <span className='text-white flex justify-center items-center absolute '><FaLocationArrow className='mr-3 text-white'/></span>
                   </div>
                  
         </div>
         <hr className='mb-9'/>
         <div className='flex flex-row justify-around'>
            <div className='flex flex-col gap-7 items-center'>
              <h2 className='text-white text-2xl'>Address</h2>
              <h4 className='text-gray-400'>El-Sadat City</h4>
              <h4 className='text-gray-400'>1240 HighWay 315</h4>
            </div>  

            <div className='flex flex-col items-center gap-2 border-x-2 border-yellow-200 px-11 border-solid'>
              <h2 className='text-amber-300 font-adu border-b-2 border-yellow-200 text-2xl py-6'>Open Timing</h2>
          
              <h4 className='text-amber-300'>Monday - Friday </h4>
               <p className='text-gray-400'>10am - 10pm</p>
               <p className='text-gray-400'>[Breakfast, Lunch ,Dinner]</p>
            </div>  


            <div className='flex flex-col gap-7 items-center'>
              <h2 className='text-white text-2xl'>Contact Us</h2>
              <h4 className='text-gray-400'>Lokanta24@gmail.com</h4>
              <h4 className='text-gray-400'>+2(212)644526627</h4>
            </div>  


         </div>
    </div>
  )
}

export default Footer