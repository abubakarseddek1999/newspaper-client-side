import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
   

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error.message))
    }
    const navLink = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AddArticle">Add Article</Link></li>
        <li><Link to="/PremiumArticle">Premium Article</Link></li>
        <li><Link to="/subscription">Subscription</Link></li>
        <li><Link to="/Article/salad">All Articles</Link></li>
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }

        {/* {
            user ? <> <button onClick={handleLogOut} className="btn btn-ghost bg-red-700 bg-opacity-20">LogOut</button></> : <li><Link to="/login">Login</Link></li>
        } */}

    </>
    return (
        <div>
            <div className="navbar fixed z-20 bg-opacity-40 max-w-screen-xl bg-black shadow-lg  text-white mx-w-full">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">  <img className="w-[40px] h-[40px] rounded-full" src="https://i.postimg.cc/ZK64GFyn/letter-n-logo-design-for-business-and-company-identity-with-luxury-concept-free-vector.jpg" alt="" /> NewsBD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost text-black">{user.displayName} </button>

                                </li>
                                <li>
                                    <div className="flex justify-center">
                                    <Link to='/myProfile'><button className="btn btn-sm btn-ghost text-black">My Profile </button></Link>
                                    </div>

                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost text-black">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>


            </div>

        </div>
    );
};

export default Navbar;