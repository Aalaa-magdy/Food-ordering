import rest from '../assets/back.jpg'

const Welcome = () => {
  return (
    <section id="home" className="hero h-screen text-white relative overflow-hidden">
    <img
      src={rest}
      alt="Restaurant"
      className="absolute inset-0 w-full h-full object-cover filter "
    />
    <div className="bg-black bg-opacity-70 h-full w-full flex items-center justify-center relative">
      <div className="text-center p-6 md:p-12">
        <h1 className="text-5xl font-bold mb-4 font-mono"> <span className="font-thin font-adu text-amber-100 tracking-wider ">Welcome to Our</span> <br/> <br/> Restaurant</h1>
        <p className="text-xl mb-8">Experience the best dining in Our Love Bites restaurant </p>
        <button className="cta px-6 py-3 text-xl font-bold rounded-full text-black bg-amber-100 hover:bg-amber-300 focus:outline-none focus:ring-2 ">Explore Our Menu</button>
      </div>
    </div>
  </section>
  )
}

export default Welcome