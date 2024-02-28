import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ItemImg from "../../../assets/home/slide4.jpg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMenuItems = () => {
  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);

        // TODO: Have to show it dynamically
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Menu item has been deleted.",
        });
      }
    });
  };

  return (
    <div className="py-5">
      <h3 className="text-center font-bold text-4xl mb-12">Manage All Items</h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-white text-black">
              <tr>
                <th className="rounded-tl-xl">#</th>
                <th>Item Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th className="rounded-tr-xl">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={ItemImg} alt="" />
                    </div>
                  </div>
                </td>
                <td>Quality Control Specialist</td>
                <td>150</td>
                <td>
                  <Link to={`/dashboard/updateMenuItem/${"1"}`}>
                    <button className="btn btn-md btn-outline">
                      <FaEdit className="text-white text-2xl"></FaEdit>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete("1")}
                    className="btn btn-outline btn-md"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMenuItems;
