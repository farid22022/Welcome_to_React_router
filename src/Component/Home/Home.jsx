

import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h2>This is home Component </h2>
            <Header></Header>
            {
                navigation.state === "loading" ? 
                <p>Loading...</p>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;