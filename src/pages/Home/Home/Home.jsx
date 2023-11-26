import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
// import PopularItem from "../Popular/PopularItem";
// import Category from "../category/Category";
import Reviews from "../reviews/Reviews";
import PlanSection from "../planSection/PlanSection";
import TrendingArticle from "../TrendingArticle/TrendingArticle";
import Statistic from "../Statistic/Statistic";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> NewsBD | Home</title>
            </Helmet>
           <Banner></Banner>
           <TrendingArticle></TrendingArticle>
           <PlanSection></PlanSection>
           <Statistic></Statistic>
           {/* <Category></Category> */}
           {/* <PopularItem></PopularItem> */}
           <Reviews></Reviews>
            
        </div>
    );
};

export default Home;