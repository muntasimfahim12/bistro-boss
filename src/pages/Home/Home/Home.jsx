import Cooking from "../../../component/Cooking/Cooking"
import Menu from "../../../component/Menu/Menu"
import { Testimonials } from "../../../component/Testimonials/Testimonials"
import Banner from "../Banner/Banner"
import Category from "../category/category"

import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
      <Category></Category>
      <Cooking/>
      <PopularMenu/>
      <Menu/>
      <Testimonials></Testimonials>      
    
    </div>
  )
}

export default Home