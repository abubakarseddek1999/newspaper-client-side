import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const MyProfile = () => {
    const { user } = useAuth();


    return (
        <div className="pt-20 mb-2 flex justify-center">
            <div className="max-w-md w-full h-[700px] py-24 px-5 mt-5 bg-slate-300 rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">My Profile </h2>
                <div className="flex justify-center">

                    <div className="avatar offline">
                        <div className="w-24 rounded-full">
                            <img src={user.photoURL
                            } alt="user photo" />
                        </div>
                    </div>
                </div>
                

                <p className="text-center text-xl mt-5"><span className="text-xl font-bold">Name:</span>{user.displayName}</p>
                <p className="text-center text-xl mt-5"> <span className="text-xl font-bold">Email:</span> {user.email}</p>







                <div className="flex justify-center mt-32">
                    <Link to='/updateProfile'><button className="btn text-cen">Update Profile</button></Link>
                </div>


            </div>
        </div>
    );
};

export default MyProfile;