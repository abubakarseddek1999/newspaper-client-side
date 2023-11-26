import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data)
        // image upload to imgbb and then get an url

        const imageFile ={ image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem ={
                title: data.title,
                category: data.category,
                publisher_name: data.publisher,
                content: data.content,
                image: res.data.data.display_url 
                
            }
            //  
            const menuRes = await axiosSecure.post('/menu',menuItem);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });

            }
            
            
        }
        console.log('with image url',res.data);

    };
    return (
        <div>
            <SectionTitle Heading={'add an News'} SubHeading={"What's new"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} >

                    <div className="form-control w-full my-6 ">
                        <label className="label">
                            <span className="label-text">News title*</span>

                        </label>
                        <input
                            type="text"
                            {...register("title",{required:true})}
                            placeholder="news title"
                            className="input input-bordered w-full " />

                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6 ">
                            <label className="label">
                                <span className="label-text">category*</span>

                            </label>
                            <select defaultValue="default" {...register("category",{required:true})}
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
                                <span className="label-text">publisher_name
*</span>

                            </label>
                            <input
                                type="text"
                                {...register("publisher",{required:true})}
                                placeholder="publisher type here"
                                className="input input-bordered w-full " />

                        </div>

                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">News Details</span>

                        </label>
                        <textarea  {...register("content")} className="textarea textarea-bordered h-24" placeholder="news details"></textarea>

                    </div>
                    <div>
                        <input  {...register("image",{required:true})} type="file" className="file-input w-full max-w-xs" />
                    </div>


                   <button className="btn m-2">Add News</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;