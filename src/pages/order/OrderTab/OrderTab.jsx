import Card from "../../../components/ArticleCard/Card";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const OrderTab = ({ items }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    // Filter services based on the search input
    const filteredServices = items.filter(service => {
        return service.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div >

            {/* Search input */}
            <div className="text-center my-4">

                <div className="flex justify-center">
                    <div className="form-control ">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search by service name"
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
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                        {/* FoodCard */}
                        {filteredServices.map(item => <Card item={item} key={item._id}></Card>)}
                    </div>

                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default OrderTab;