import Swal from "sweetalert2";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    // console.log(menu);
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }

    const handleMakeApprove = async(_id) => {
        const menuItem = {
           status: 'true'

        }
        //  
        console.log(menuItem);
        console.log(_id);
        const menuRes = await axiosSecure.patch(`/menuStatus/${_id}`, menuItem);
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
            // show success popup
            // reset();
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "status is updated to the menu",
                showConfirmButton: false,
                timer: 1500
            });

        }

    }

    return (
        <div>
            <SectionTitle Heading={"manage All Items"} ></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>publisher</th>
                                <th>Status</th>
                                <th>category</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.title}


                                    </td>
                                    <td>{item.publisher_name}</td>
                                    <td>
                                        {item?.status === 'true' ? 'approved' : <button
                                            onClick={() => handleMakeApprove(item?._id)}
                                            className="btn btn-sm bg-orange-500"> Approve
                                        </button>}

                                    </td>
                                    <td>{item.category}</td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost btn-xs">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-xs">Delete</button>
                                    </td>
                                </tr>)
                            }




                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;