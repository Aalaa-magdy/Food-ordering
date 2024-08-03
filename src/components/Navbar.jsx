

import  '../index.css'
const Navbar = () => {
  return (
    <div className=" w-full bg-transparent flex items-center justify-around h-[50px] ">
        <div className="flex flex-row">
               <h1 className="my-4 mx-4 lg:text-2xl font-bold font-mono text-amber-50   md:text-xl ">Loo<span className='text-amber-300'> Lokanta</span></h1>
        </div>

        <div>
            <ul className="flex flex-row lg:space-x-4 md:space-x-1 ">
               <li className='nav hover:bg-amber-100'><a  href='#home'>Home</a></li>
               <li className='nav hover:bg-amber-100'><a href='#menu'>Menu</a></li>
               <li className='nav hover:bg-amber-100'><a href='#contact'>Contact</a></li>
            </ul>
        </div>
      
    </div> 
  )
}

export default Navbar