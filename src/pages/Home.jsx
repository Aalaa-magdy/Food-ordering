
import CategoryMenu from "../components/CategoryMenu"
import Navbar from "../components/Navbar"
import Welcome from "../components/Welcome"
import Service from "../components/Service"
import ActiveSlider from "../components/ActiveSlider"
import FoodItems from "../components/FoodItems"
import '../index.css'
import Footer from "../components/Footer"
import Cart from '../components/Cart'
const Home = () => {
  return (
  < >
    <Navbar/>
    <Welcome/>
    <Service/>
    <ActiveSlider/>
    <CategoryMenu/>
    <FoodItems/>
    <Cart/>
    <Footer/>
  </>
  )
}

export default Home