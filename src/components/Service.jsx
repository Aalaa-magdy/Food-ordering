import service1 from '../assets/quality.png'
import service2 from '../assets/free.png'
import service3 from '../assets/fast-delivery.png'
import service4 from '../assets/checkout.png'
const Service = () => {
  return (
    <div className='flex flex-row bg-black justify-around mt-10'>

          <div className='flex flex-col justify-center items-center border border-stone-700 mb-11 py-3 px-3'>
            <img src={service1}alt='' className='w-32 h-32 object-cover rounded-full'/>
            <h3 className='my-2 text-xl font-bold text-center text-amber-50'>Quality Food</h3>
            <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div>

            <div className='flex flex-col justify-center items-center border border-stone-700 mb-11 py-3 px-3'>
            <img src={service3}alt='' className='w-32 h-32 object-cover rounded-full'/>
            <h3 className='my-2 text-xl font-bold text-center text-amber-50'>Fast delivery </h3>
            <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div>

            <div className='flex flex-col justify-center items-center border border-stone-700 mb-11 py-3 px-3'>
            <img src={service2}alt='' className='w-32 h-32 object-cover rounded-full'/>
            <h3 className='my-2 text-xl font-bold text-center text-amber-50'>Free delivey</h3>
            <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div>


            <div className='flex flex-col justify-center items-center border border-stone-700 mb-11 py-3 px-3'>
            <img src={service4}alt='' className='w-32 h-32 object-cover rounded-full'/>
            <h3 className='my-2 text-xl font-bold text-center text-amber-50'>Check Out </h3>
            <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> </div>
      
    </div>
  )
}

export default Service