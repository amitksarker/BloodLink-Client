import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar";
import Footer from "../Pages/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;