import { Link } from "react-router-dom";
import MenuItem from "../../share/MenuItem/MenuItem";
import Cover from "../../share/cover/Cover";

const MenuCategory = ({ item, title, coverImg }) => {
    return (
        <div className="mt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    item.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="flex justify-center">
                <Link to={`/order/${title}`}>
                    <button className="btn text-center btn-outline text-black border-0 border-b-4">Order now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;