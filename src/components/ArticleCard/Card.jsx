import { Link, } from "react-router-dom";
import { FaShare } from "react-icons/fa";

const Card = ({ item }) => {
    const { title, publisher_name, image, price, content, _id } = item;

    const handleShare = (articleId) => {
        // Use the Web Share API or your custom share logic
        if (navigator.share) {
            navigator.share({
                title: 'Check out this article!',
                text: 'Interesting article on NewsBD',
                url: `${window.location.origin}/details/${articleId}`,
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            // Fallback for browsers that do not support Web Share API
            const shareUrl = `${window.location.origin}/details/${articleId}`;
            // Implement your custom share logic (e.g., copy to clipboard, open a modal with share options)
            console.log('Share URL:', shareUrl);
        }
    };
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
                    <div className="card-actions justify-between">
                        <Link to={`/details/${_id}`}>
                            <button className="btn text-center bg-slate-100 btn-outline text-black border-0 border-blue-400 border-b-4">Details</button>
                        </Link>

                        <div className="flex items-center pt-5 justify-center text-center " onClick={() => handleShare(_id)}> <FaShare /></div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;

