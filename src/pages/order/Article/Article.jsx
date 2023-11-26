import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
// import Card from "../../../components/FoodCard/Card";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";


const Article = () => {



    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    // console.log(category);
    const [menu] = useMenu();
    const study = menu.filter(item => item.category === 'study');
    const jobs = menu.filter(item => item.category === 'jobs');
    const technology = menu.filter(item => item.category === 'technology');
    const sports = menu.filter(item => item.category === 'sports');
    const health = menu.filter(item => item.category === 'health');
    const all = menu;
    
    return (
        <div className="pt-20">
            <Helmet>
                <title>NewsBD | All Articles</title>
            </Helmet>
            
            {/* <Cover img={OrderImg} title={" All Articles"} ></Cover> */}
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>health</Tab>
                    <Tab>technology</Tab>
                    <Tab>jobs</Tab>
                    <Tab>study</Tab>
                    <Tab>sports</Tab>
                   

                </TabList>
                <TabPanel><OrderTab items={all}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={health}></OrderTab></TabPanel>
                <TabPanel>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3">
                        {pizza.map(item => <Card item={item} key={item._id}></Card>)}
                    </div> */}
                    <OrderTab items={technology}></OrderTab>
                </TabPanel>
                <TabPanel> <OrderTab items={jobs}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={study}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={sports}></OrderTab></TabPanel>
               
            </Tabs>
        </div>
    );
};

export default Article;