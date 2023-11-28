import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import AllPublisher from "../AllPublisher/AllPublisher";
import Reviews from "../reviews/Reviews";
import PlanSection from "../planSection/PlanSection";
import TrendingArticle from "../TrendingArticle/TrendingArticle";
import Statistic from "../Statistic/Statistic";
import Faq from "../FaqSection/Faq";

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
           <AllPublisher></AllPublisher>
           <Faq></Faq>
           <Reviews></Reviews>
            
        </div>
    );
};

export default Home;