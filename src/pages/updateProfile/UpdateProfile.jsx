
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const ProfileUpdate = () => {
    const { user } = useAuth();
    console.log(user);
    const auth = getAuth();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const phone = form.phone.value;
        console.log(name, photo, phone);

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo, phoneNumber: phone

        }).then(() => {
            // Profile updated!
            console.log('profile updated');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Updated your profile",
                showConfirmButton: false,
                timer: 1500
            });
            // ...
        }).catch((error) => {
            console.log(error.message);
            // An error occurred
            // ...
        });
    }


    return (
        <div className="pt-20 flex mb-2  justify-center">
            <div className="max-w-md bg-slate-300  w-full h-[700px] py-24 px-5 mt-5  rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Profile Update</h2>
                <form onSubmit={handleLogin} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">User Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="Your name" name='name' className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL </span>
                        </label>
                        <input type="text" name='photo' defaultValue={user?.photoURL} placeholder="phot url" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Phone Number </span>
                        </label>
                        <input type="text" name='phone' defaultValue={user?.phoneNumber} placeholder="phone number" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">

                        <input className="btn bg-[#bf472f] text-white" type="submit" value="Update" />
                    </div>

                </form>

                <div className="flex mt-5">
                    <Link to='/myProfile'><button className="btn text-cen"><FaBackward></FaBackward> Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;
