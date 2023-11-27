import { useLoaderData, useParams } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);
    // const { _id } = item;
    // console.log(_id);

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const [menu, setMenu] = useState();
    console.log(menu);
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data)

            });
    }, [])
    
    // Use the menu data to find the item with the specific ID
    const selectedItem = menu?.find(item => item._id === id);
    // console.log(selectedItem);
    const { title, category, price, recipe, image,_id } = selectedItem || {};
    
    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgbb and then get an url

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                title: data.title,
                category: data.category,
                publisher_name: data.publisher,
                content: data.details,
                image: res.data.data.display_url

            }
            //  
            console.log(menuItem);
            console.log(_id);
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.title} is updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }


        }
        console.log('with image url', res.data);

    };
    console.log(category);
    return (
        <div>
            <SectionTitle Heading={"Update an Item"} SubHeading={"Refresh info"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">News title*</span>

                        </label>
                        <input
                            type="text"
                            defaultValue={selectedItem?.title}
                            {...register("title", )}
                            placeholder="news title"
                            className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">category*</span>

                            </label>
                        
                            <select defaultValue={category} {...register("category", )}
                                className="select select-bordered w-full ">
                                <option disabled value="default" >Select a category</option>
                                <option value="sports">sports</option>
                                <option value="study">study</option>
                                <option value="jobs">jobs</option>
                                <option value="technology">technology</option>
                                <option value="health">health</option>

                            </select>

                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">Publisher_name*</span>

                            </label>
                            <input
                                type="text"
                                defaultValue={selectedItem?.publisher_name}
                                {...register("publisher",)}
                                placeholder="Publisher_name type here"
                                className="input input-bordered w-full " />

                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">News Details</span>

                        </label>
                        <textarea defaultValue={selectedItem?.content} {...register("details")} className="textarea textarea-bordered h-24" placeholder="news details"></textarea>

                    </div>
                    <div>
                        <input  {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="btn m-2">Update Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;