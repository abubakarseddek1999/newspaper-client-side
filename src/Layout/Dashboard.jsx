import { FaAd, FaCalendar, FaHome, FaList, FaNewspaper, FaShoppingCart, FaUsers,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();

    return (
        <div className="flex ">

            {/* dashboard side bar */}
            <div className="div w-64 min-h-screen bg-blue-200">
                <ul className="menu p-3">

                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to="/dashboard/adminHome"> <FaHome></FaHome> Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard/addItems"> <FaNewspaper></FaNewspaper> Add Article</NavLink>
                            </li>
                            <li>

                                <NavLink to="/dashboard/manageItems"> <FaList></FaList>  Manage Items</NavLink>
                            </li>
                            
                            <li>

                                <NavLink to="/dashboard/users"> <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </> :
                            <>
                                <li>

                                    <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>  My Cart ({cart.length})</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/history"> <FaCalendar></FaCalendar> History</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/review"> <FaAd></FaAd> review</NavLink>
                                </li>
                                <li>

                                    <NavLink to="/dashboard/paymentHistory"> <FaList></FaList> Payment Real History</NavLink>
                                </li>
                            </>
                    }

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>

                        <NavLink to="/"><FaHome></FaHome>   Home</NavLink>
                    </li>
                    <li>

                        <NavLink to="/dashboard/publisher"> Add Publisher</NavLink>
                    </li>
                    <li>

                        <NavLink to="/Article/salad">All Articles</NavLink>
                    </li>

                </ul>

            </div>

            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;