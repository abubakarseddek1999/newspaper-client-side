import Card from "../../../components/ArticleCard/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";

const OrderTab = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter services based on the search input
    const filteredServices = items.filter(service => {
        return service.title.toLowerCase().includes(searchTerm.toLowerCase());
    });


    const articlesPerPage = 9; // Adjust the number of articles per page as needed
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedArticles, setDisplayedArticles] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToShow = filteredServices.slice(startIndex, endIndex);
        setDisplayedArticles(articlesToShow);
    }, [filteredServices, currentPage]);

    const totalPages = Math.ceil(filteredServices.length / articlesPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div >

            {/* Search input */}
            <div className="text-center my-4">

                <div className="flex justify-center">
                    <div className="form-control ">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search by Article title name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input md:w-96 input-bordered"
                            />
                            <button className="btn w-10 btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <Swiper

            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                        {/* FoodCard */}
                        {displayedArticles?.map(item => <Card item={item} key={item._id}></Card>)}


                    </div>


                </SwiperSlide>

            </Swiper>
            {/* Pagination controls */}
            <div className="flex justify-center my-5">
                <button className="btn"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                <span className="flex justify-center items-center p-2 font-bold">
                    Page {currentPage} of {totalPages}
                </span>
                <button className="btn "
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next<MdKeyboardDoubleArrowRight className="text-xl" />
                </button>
            </div>

        </div >
    );
};

export default OrderTab;