import { useState } from "react";


const ProfileUpdate = () => {
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    //   useEffect(() => {
    //     // Fetch and display the current user's profile on component mount
    //     const user = firebase.auth().currentUser;
    //     if (user) {
    //       setDisplayName(user.displayName || '');
    //       setPhotoURL(user.photoURL || '');
    //     }
    //   }, []);

    //   const updateProfile = () => {
    //     const user = firebase.auth().currentUser;

    //     user.updateProfile({
    //       displayName: displayName,
    //       photoURL: photoURL
    //     })
    //     .then(() => {
    //       // Profile updated successfully
    //       console.log("Profile updated successfully");
    //     })
    //     .catch((error) => {
    //       // Handle errors
    //       console.error("Error updating profile:", error);
    //     });
    //   };

    return (
        <div className="pt-20 flex justify-center">
            <div className="max-w-md w-full h-[700px] py-24 px-5 mt-5 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Profile Update</h2>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="displayNameInput" className="block text-sm font-medium text-gray-600">Display Name:</label>
                        <input
                            type="text"
                            id="displayNameInput"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your display name"
                        />
                    </div>

                    <div>
                        <label htmlFor="photoURLInput" className="block text-sm font-medium text-gray-600">Photo URL:</label>
                        <input
                            type="text"
                            id="photoURLInput"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your photo URL"
                        />
                    </div>

                    <div>
                        <button
                            type="button"
                            // onClick={updateProfile}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileUpdate;
