import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPublisher = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                publisher: data.name,
                image: res.data.data.display_url

            }
            //  
            const menuRes = await axiosSecure.post('/publisher', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the publisher`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }


        }
        console.log('with image url', res.data);

    };
    return (
        <div>
            <SectionTitle Heading={'add an Publisher'} SubHeading={"What's new"}></SectionTitle>
            
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">Publisher name*</span>

                        </label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="Publisher name"
                            className="input input-bordered w-full " />

                    </div>

                    <div>
                        <p className="text-xl mb-2">choose publisher logo🔽</p>
                        <input  {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>


                    <button className="btn m-2">Add Publisher</button>
                </form>
            </div>
        </div>
    );
};

export default AddPublisher;