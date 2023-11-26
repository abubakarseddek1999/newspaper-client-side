import { Helmet } from "react-helmet";
import Cover from "../../share/cover/Cover";
// import Cover from "../../share/cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.png'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div className="">
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title={"Our menu"}></Cover>
            {/* main cover */}
            <SectionTitle SubHeading={"Do not Miss"} Heading={"Today is Offer"}></SectionTitle>

            {/* offered menu items */}
            <MenuCategory item={offered} ></MenuCategory>

            {/* dessert menu item */}
            <MenuCategory item={desserts} title={"dessert"} coverImg={dessertImg}></MenuCategory>

            {/* soup menu item */}
            <MenuCategory item={soup} title={"soup"} coverImg={soupImg}></MenuCategory>

            {/* pizza menu item */}
            <MenuCategory item={pizza} title={"pizza"} coverImg={pizzaImg}></MenuCategory>




        </div>
    );
};

export default Menu;