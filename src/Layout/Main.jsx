import { Outlet } from "react-router-dom";
import Footer from "../pages/share/footer/Footer";
import Navbar from "../pages/share/Navbar/Navbar";

const Main = () => {


    return (

        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;