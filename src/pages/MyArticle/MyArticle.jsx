import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useMenu from "../../Hooks/useMenu";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";

const ManageItem = () => {
    const { user } = useAuth();
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();
    console.log(menu);
    const menus = menu.filter(item => item.user === user?.email);
    console.log(menus);

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

    return (
        <div className="pt-20 h-screen">

            <div className="p-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>publisher</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menus.map((item, index) => <tr key={item._id}>
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
                                    <td className="text-lime-600 font-bold">{item.status === "true"? 'Approved' : 'pending'}</td>
                                    <td>
                                        <Link to={`/updateArticle/${item._id}`}>
                                            <button className="btn btn-ghost btn-xs">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600 text-xl"></FaTrashAlt></button>
                                    </td>
                                    <td>
                                        <Link to={`/details/${item?._id}`}> <button className="btn btn-ghost btn-xs">Details</button></Link>
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