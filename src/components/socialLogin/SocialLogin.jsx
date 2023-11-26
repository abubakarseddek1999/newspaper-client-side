import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const {signInWithGoogle}= useAuth();
    const axiosPublic =useAxiosPublic();
    const navigate =useNavigate()


    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/');
            })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="flex justify-center" >
            <hr />
            <button onClick={handleGoogleSignIn} className="btn">
                <FcGoogle></FcGoogle>
                Google
            </button>

        </div>
    );
};

export default SocialLogin;