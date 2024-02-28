import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

const validationSchema = Yup.object({
  recipeName: Yup.string().required("Recipe Name is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number().required("Price is required"),
  recipeDetails: Yup.string().required("Recipe Details is required"),
  photo: Yup.mixed().required("Photo is required"),
});

const initialValues = {
  recipeName: "",
  category: "",
  price: "",
  recipeDetails: "",
  photo: "",
};

const AddMenuItem: React.FC = () => {
  const handleSubmit = async (values: typeof initialValues) => {
    const recipeName = values.recipeName;
    const category = values.category;
    const price = values.price;
    const recipeDetails = values.recipeDetails;

    const fileInput = document.getElementById("photo") as HTMLInputElement;

    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      Swal.fire({
        title: "No Photo Selected",
        icon: "error",
      });
      return;
    }

    const photo = fileInput.files[0];

    console.log(recipeName, category, price, recipeDetails, photo);

    const img = new FormData();
    img.append("image", photo);

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    try {
      const imgUploadResponse = await axios.post(image_hosting_api, img);
      const imageUrl = imgUploadResponse.data.data.url;
      console.log(imageUrl);
      // TODO: Send menu item to the database

      Swal.fire({
        icon: "success",
        title: "Item Added Successfully",
      });
    } catch (error) {
      Swal.fire({
        title: "Error uploading photo to ImgBB",
        icon: "error",
      });
    }
  };

  return (
    <div className="py-5">
      <h3 className="text-center font-bold text-4xl mb-12">Add New Item</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-control font-semibold">
            <label className="label" htmlFor="recipeName">
              <span>Recipe Name</span>
            </label>
            <Field
              className="input input-bordered"
              type="text"
              id="recipeName"
              name="recipeName"
              placeholder="Recipe Name"
            />
            <ErrorMessage
              className="text-red-500 mt-1 font-semibold"
              name="recipeName"
              component="div"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-6">
            <div className="form-control font-semibold w-full sm:w-1/2">
              <label className="label" htmlFor="category">
                <span>Category</span>
              </label>
              <Field
                className="select select-bordered font-semibold cursor-pointer"
                component="select"
                id="category"
                name="category"
              >
                <option disabled value="">
                  Select a category
                </option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </Field>
              <ErrorMessage
                className="text-red-500 mt-1 font-semibold"
                name="category"
                component="div"
              />
            </div>
            <div className="form-control font-semibold w-full sm:w-1/2">
              <label className="label" htmlFor="price">
                <span>Price</span>
              </label>
              <Field
                className="input input-bordered"
                type="number"
                id="price"
                name="price"
                placeholder="Price"
              />
              <ErrorMessage
                className="text-red-500 mt-1 font-semibold"
                name="price"
                component="div"
              />
            </div>
          </div>
          <div className="form-control font-semibold">
            <label className="label" htmlFor="recipeDetails">
              <span>Recipe Details</span>
            </label>
            <Field
              className="input-bordered py-2 px-4 rounded-lg"
              as="textarea"
              id="recipeDetails"
              name="recipeDetails"
              placeholder="Recipe Details"
              rows={3}
            />
            <ErrorMessage
              className="text-red-500 mt-1 font-semibold"
              name="recipeDetails"
              component="div"
            />
          </div>
          <div className="form-control font-semibold">
            <label className="label" htmlFor="photo">
              <span>Photo</span>
            </label>
            <Field
              className=""
              type="file"
              id="photo"
              name="photo"
              placeholder="Photo"
            />
            <ErrorMessage
              className="text-red-500 mt-1 font-semibold"
              name="photo"
              component="div"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-outline text-white">
              Add Item
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMenuItem;
