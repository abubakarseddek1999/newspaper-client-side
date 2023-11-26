// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../share/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularItem = () => {
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('item.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular');
    //             setMenu(popularItem);
    //         })
    // }, [])
    const [menu]=useMenu();
    const popularItem = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle Heading={"From Our Menu"}
                SubHeading={"Popular Item"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popularItem.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center my-5">
                <button className="btn btn-outline text-center border-0 border-b-4">View Full  Menu</button>
            </div>

        </section>
    );
};

export default PopularItem;