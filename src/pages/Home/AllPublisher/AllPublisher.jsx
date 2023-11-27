import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";

const AllPublisher = () => {
    const [data, setData] = useState();
    console.log(data);


    useEffect(() => {
        fetch('http://localhost:5000/publisher')
            .then(res => res.json())
            .then(data => {

                setData(data);

            });
    }, [])
    return (
        <div className="bg-opacity-30 bg-white bg-blur-md bg-backdrop-blur-md border-2 border-white border-opacity-20 rounded-md p-6">
            <img src="" alt="" className="w-full h-auto mb-6 rounded-md" />
            <SectionTitle Heading={"All Publisher"}></SectionTitle>

            <div className="flex flex-col md:flex-row justify-center -mx-2">
                {data?.map(item => (
                    <div key={item.id} className="bg-opacity-40 bg-black w-[calc(33.33% - 1rem)] mb-4 mx-2 p-2 rounded-md shadow-md transition-transform transform hover:scale-105">
                        <div className="h-[150px]">
                            <img
                                src={item?.image}
                                alt={`${item?.publisher} Logo`}
                                className="w-full md:w-[300px] h-full mb-4 rounded-md"
                            />
                        </div>
                        <p className="text-center font-semibold">{item?.publisher}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default AllPublisher;