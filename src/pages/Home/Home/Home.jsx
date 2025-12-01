import Cooking from "../../../component/Cooking/Cooking"
import Menu from "../../../component/FromMenu/FromMenu"
import { Testimonials } from "../../../component/Testimonials/Testimonials"
import FeaturedMenu from "../../FeaturedMenu/FeaturedMenu"
import Cart from "../../Shared/Cart/Cart"
import Banner from "../Banner/Banner"
import PopularMenu from "../PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedMenu></FeaturedMenu>
      <Cooking />
      <PopularMenu />
      <Cart></Cart>
      <Menu />
      <Testimonials></Testimonials>

    </div>
  )
}

export default Home