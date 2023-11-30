import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://newspaper-server-one.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    return (
        <section className="my-20">
            <SectionTitle SubHeading={"What Our Client Say"}
                Heading={"Reviews"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews.map(review =>
                    <SwiperSlide key={review._id}>
                        <div>

                            <div className="flex flex-col items-center mx-24 my-16 m-24">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="my-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-500">{review.name} </h3>
                            </div>
                        </div>
                    </SwiperSlide>

                )}
            </Swiper>

        </section>
    );
};

export default Reviews;