import Cooking from "../../../component/Cooking/Cooking"
import Menu from "../../../component/Menu/Menu"
import { Testimonials } from "../../../component/Testimonials/Testimonials"
import Banner from "../Banner/Banner"

import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      
      <Cooking />
      <PopularMenu />
      <Menu />
      <Testimonials></Testimonials>

    </div>
  )
}
 
export default Home