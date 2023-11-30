import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArticleDetails = () => {
    const { id } = useParams()
    console.log(id);
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://newspaper-server-one.vercel.app/menu')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const NewsArticle = services.find(item => item._id === id)
    // console.log(serviceItem);
    return (
        <div className="pt-20">

            <div>
                <h2 className="text-center font-bold text-2xl md:text-3xl">Read this Article of news</h2>
            </div>

            <div className="p-5 rounded-xl border">
                <img className="rounded-xl w-full" src={NewsArticle?.image} alt="" />
                <div className="flex justify-between mt-5">
                    <h2 className="text-xl font-bold"> News name: {NewsArticle?.title}</h2>
                    <p className="font-bold">{NewsArticle?.publisher_name}</p>
                    
                </div>
                <p className="my-5 ">{NewsArticle?.content}</p>
                
               
            </div>



        </div>
    );
};

export default ArticleDetails;