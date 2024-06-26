import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import AllPublisher from "../AllPublisher/AllPublisher";
import Reviews from "../reviews/Reviews";
import PlanSection from "../planSection/PlanSection";
import TrendingArticle from "../TrendingArticle/TrendingArticle";
import Statistic from "../Statistic/Statistic";
import Faq from "../FaqSection/Faq";
import BreakingNews from "../../../components/BreakinkNews/BreakingNews";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> NewsBD | Home</title>
            </Helmet>
           <Banner></Banner>
           <BreakingNews></BreakingNews>
           <AllPublisher></AllPublisher>
           <TrendingArticle></TrendingArticle>
           <PlanSection></PlanSection>
           <Statistic></Statistic>
           <Faq></Faq>
           <Reviews></Reviews>
            
        </div>
    );
};

export default Home;