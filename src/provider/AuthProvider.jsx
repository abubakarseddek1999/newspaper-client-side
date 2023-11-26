/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";



const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const axiosPublic =useAxiosPublic();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () => {
        setLoading(true);
        console.log('google sign in calling');
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (name,photo) => {
        // update profile
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          });
          
    }
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            console.log(error.message)
        })
    }

    // observe auth state change

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                // get token and store client
                const userInfo={email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })

            }
            else{
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token')
                setLoading(false);
            }
           
        });

        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        updateUserProfile,
        loading,
        signInWithGoogle,
        createUser,
        signInUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

