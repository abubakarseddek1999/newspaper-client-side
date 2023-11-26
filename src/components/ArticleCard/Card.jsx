import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import useCart from "../../Hooks/useCart";


const Card = ({ item }) => {
    const { title, publisher_name, image, price, content, _id } = item;
    console.log(content?.slice(1, 20));
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();


    const handleAddToCart = () => {
        // console.log(food,user.email);
        if (user && user.email) {
            //  send cart item to the database
            // console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                title,
                image,
                price,
                content
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                    //   refetch cart to update the cart item count
                    refetch();
                })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 h-[600px] shadow-xl">
                <div className="border h-[300px]">
                    <figure><img className="h-[300px] w-full" src={image} alt="news" /></figure>
                </div>
                {/* <p className="bg-slate-900 text-white absolute right-0 p-4 mr-4 mt-4">{price}</p> */}
                <div className="card-body  flex flex-col ">
                    <h2 className="card-title  ">{title}</h2>
                    <p> <span className="text-xl font-bold">Publisher</span> :{publisher_name}</p>
                    <p>{content?.slice(0, 70)}...</p>
                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}><button className="btn text-center bg-slate-100 btn-outline text-black border-0 border-blue-400 border-b-4">Details</button></Link>

                        <button onClick={() => handleAddToCart(item)} className="btn text-center bg-slate-100 btn-outline text-black border-0 border-orange-400 border-b-4">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;

