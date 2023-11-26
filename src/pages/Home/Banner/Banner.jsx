import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/home/01.webp'
import img2 from '../../../assets/home/02.webp'
import img3 from '../../../assets/home/03.webp'
import moment from "moment/moment";

const Banner = () => {
    return (
        <Carousel className="w-ful text-center">
            <div>


                <img className="block w-full h-auto" src={img3} alt="" />

                <div className="absolute inset-0 text-white text-center bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold">{moment().format("dddd, MMMM D, YYYY ")}</p>
                    <p>By: [NewsBD] Staff</p>
                    <p>In a sudden and powerful turn of events, a Category 4 hurricane has made landfall along the coast, <br /> prompting urgent evacuations and emergency response efforts. The storm, named Hurricane Delta, <br /> has intensified rapidly, posing a severe threat to the safety of residents in its path.</p>
                    <button className="mt-2 px-4 py-2 btn  bg-slate-500 border-b-2  text-white ">Details</button>
                </div>

            </div>

            <div>
                <img src={img2} />
                <div className="absolute inset-0 text-white text-center bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold">{moment().format("dddd, MMMM D, YYYY ")}</p>
                    <p>By: [NewsBD] Staff</p>
                    <p>In a sudden and powerful turn of events, a Category 4 hurricane has made landfall along the coast, <br /> prompting urgent evacuations and emergency response efforts. The storm, named Hurricane Delta, <br /> has intensified rapidly, posing a severe threat to the safety of residents in its path.</p>
                    <button className="mt-2 px-4 py-2 btn  bg-slate-500 border-b-2  text-white ">Details</button>
                </div>

            </div>
            <div>
                <img src={img1} />
                <div className="absolute inset-0 text-white text-center bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold">{moment().format("dddd, MMMM D, YYYY ")}</p>
                    <p>By: [NewsBD] Staff</p>
                    <p>In a sudden and powerful turn of events, a Category 4 hurricane has made landfall along the coast, <br /> prompting urgent evacuations and emergency response efforts. The storm, named Hurricane Delta, <br /> has intensified rapidly, posing a severe threat to the safety of residents in its path.</p>
                    <button className="mt-2 px-4 py-2 btn  bg-slate-500 border-b-2  text-white ">Details</button>
                </div>

            </div>
            <div>
                <img src={img2} />
                <div className="absolute inset-0 text-white text-center bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold">{moment().format("dddd, MMMM D, YYYY ")}</p>
                    <p>By: [NewsBD] Staff</p>
                    <p>In a sudden and powerful turn of events, a Category 4 hurricane has made landfall along the coast, <br /> prompting urgent evacuations and emergency response efforts. The storm, named Hurricane Delta, <br /> has intensified rapidly, posing a severe threat to the safety of residents in its path.</p>
                    <button className="mt-2 px-4 py-2 btn  bg-slate-500 border-b-2  text-white ">Details</button>
                </div>

            </div>
            <div>
                <img src={img1} />
                <div className="absolute inset-0 text-white text-center bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold">{moment().format("dddd, MMMM D, YYYY ")}</p>
                    <p>By: [NewsBD] Staff</p>
                    <p>In a sudden and powerful turn of events, a Category 4 hurricane has made landfall along the coast, <br /> prompting urgent evacuations and emergency response efforts. The storm, named Hurricane Delta, <br /> has intensified rapidly, posing a severe threat to the safety of residents in its path.</p>
                    <button className="mt-2 px-4 py-2 btn  bg-slate-500 border-b-2  text-white ">Details</button>
                </div>

            </div>
            <div>
                <img src={img3} />
                <div className="absolute inset-0 text-white text-center bg-black bg-opacity-50 p-4 flex flex-col items-center justify-center">
                    <p className="text-2xl font-bold">{moment().format("dddd, MMMM D, YYYY ")}</p>
                    <p>By: [NewsBD] Staff</p>
                    <p>In a sudden and powerful turn of events, a Category 4 hurricane has made landfall along the coast, <br /> prompting urgent evacuations and emergency response efforts. The storm, named Hurricane Delta, <br /> has intensified rapidly, posing a severe threat to the safety of residents in its path.</p>
                    <button className="mt-2 px-4 py-2 btn  bg-slate-500 border-b-2  text-white ">Details</button>
                </div>

            </div>
        </Carousel>
    );
};

export default Banner;