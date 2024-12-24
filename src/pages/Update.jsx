// import DatePicker from 'react-datepicker';

import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';




const Update = () => {
    const navigete = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    featchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const featchData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/update/${id}`
    );
    setData(data);
  };
 const handleSubmit = async e => {
   e.preventDefault();
   const form = e.target;
   //name, email , Image , language, price, description
   const corscTitle = form.corscTitle.value;
   const email = user.email;
   const language = form.language.value;
   const price = form.price.value;
   const description = form.description.value;
   const nametuters = form.name.value;
   const review = form.review.value;
   const photo = form.photo.value;
   const updateData = {
     corscTitle,
     review,
     email,
     photo,
     nametuters,
     buyer: {
       email,
       name: user?.displayName,
       photo: user?.photoURL,
     },

     language,
     price,
     description,
   };
   console.log(updateData);
   //post requast
   try {
     await axios.put(`${import.meta.env.VITE_API_URL}/update-data/${id}`, updateData);
     form.reset();
     toast.success('Data Update Successfull !!');
     navigete('/mytutorials');
   } catch (err) {
     console.log(err);
     toast.error(err.message);
   }
 };
  
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Update You Tutorials
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="corscTitle"
            defaultValue={data.corscTitle}
            className="input input-bordered w-full"
            placeholder="Courses Tital"
            required
          />
        </div>
        <div className=" md:flex lg:flex items-center justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={data.name}
              className="input input-bordered w-full  rounded-none "
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled={true}
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="photoURL"
            name="photo"
            className="input input-bordered w-full"
            defaultValue={data.photo}
            placeholder="Enter a PhotoURL"
            required
          />
        </div>
        {data.language && (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Language</span>
            </label>
            <select
              name="language"
              defaultValue={data.language}
              id="category"
              className="border p-2 rounded-md"
            >
              <option value="ENGLISH">ENGLISH</option>
              <option value="FRENCH">FRENCH</option>
              <option value="ITALIAN">ITALIAN</option>
              <option value="GERMAN">GERMAN</option>
              <option value="SPANISH">SPANISH</option>
              <option value="JAPANESE">JAPANESE</option>
            </select>
          </div>
        )}
        <div className=" md:flex lg:flex items-center justify-between">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={data.price}
              className="input input-bordered w-full"
              placeholder="Enter price"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Review</span>
            </label>
            <input
              type="number"
              defaultValue={data.review}
              name="review"
              className="input input-bordered w-full bg-gray-100 "
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            defaultValue={data.description}
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
