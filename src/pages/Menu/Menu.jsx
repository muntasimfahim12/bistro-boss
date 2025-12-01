import Cover from "../Shared/Cover/Cover";
import covre from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import Cover1 from "../Cover1/Cover1";
import cover1 from "../../assets/menu/dessert-bg.jpeg"
import cover2 from "../../assets/menu/pizza-bg.jpg"
import cover3 from "../../assets/menu/salad-bg.jpg"
import cover4 from "../../assets/menu/soup-bg.jpg"
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../component/sectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const soup = menu.filter(item => item.category === 'soup');


  return (
    <div>
      <Cover
        img={covre}
        title="OUR MENU"
        subtitle="WOULD YOU LIKE TO TRY A DISH?"
      />
      <SectionTitle
        subTitle="---Don't miss---"
        title="TODAY'S OFFER"
      />

      <MenuCategory items={offered}></MenuCategory>
      <Cover1
        img={cover1}
        title="DESSERTS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <MenuCategory
        items={dessert}
        title="dessert"
      ></MenuCategory>

      <Cover1
        img={cover2}
        title="PIZZA"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={pizza}
        title="pizza"
      ></MenuCategory>

      <Cover1
        img={cover3}
        title="SALADS"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={salad}
        title="salad"
      ></MenuCategory>

      <Cover1
        img={cover4}
        title="SOPU"
        subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <MenuCategory
        items={soup}
        title="soup"
      ></MenuCategory>



    </div>
  );
};

export default Menu;
