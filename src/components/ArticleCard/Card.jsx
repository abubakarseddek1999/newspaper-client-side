import { Link, } from "react-router-dom";

const Card = ({ item }) => {
    const { title, publisher_name, image, price, content, _id } = item;

    return (
        <div>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="card w-96 bg-base-100 h-[600px] shadow-xl">
                <div className="border h-[300px]">
                    <figure><img className="h-[300px] w-full" src={image} alt="news" /></figure>
                </div>
                <div className="card-body  flex flex-col ">
                    <h2 className="card-title  ">{title}</h2>
                    <p> <span className="text-xl font-bold">Publisher</span> :{publisher_name}</p>
                    <p>{content?.slice(0, 70)}...</p>
                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}><button className="btn text-center bg-slate-100 btn-outline text-black border-0 border-blue-400 border-b-4">Details</button></Link>

                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;

