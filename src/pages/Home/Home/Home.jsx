import Cooking from "../../../component/Cooking/Cooking"
import Menu from "../../../component/Menu/Menu"
import { Testimonials } from "../../../component/Testimonials/Testimonials"
import Category from "../../Category/category"
import Banner from "../Banner/Banner"

import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Cooking />
      <PopularMenu />
      <Menu />
      <Testimonials></Testimonials>

    </div>
  )
}
 
export default Home