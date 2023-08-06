import Plants from "../components/Plants";
import Offer from "../components/Offer";
import Advantages from "../components/Advantages";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Submit from "../components/Submit";
import Blog from "../components/Blog";

import "../assets/style/home.css"



const Home = () => {
    return (
        <>
            <Plants/>
            <Offer/>
            <Advantages/>
            <Gallery/>
            <Testimonials/>
            <Submit/>
            <Blog/>
        </>
    );
};

export default Home;