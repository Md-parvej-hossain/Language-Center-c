import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Test = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    //name, email , Image , language, price, description
    const corscTitle = form.corscTitle.value;
    const email = user.email;
    const language = form.language.value;
    const price = form.price.value;
    const description = form.description.value;
    const addData = {
      corscTitle,
      email,
      buyer: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },

      language,
      price,
      description,
    };
    console.log(addData);
    // Add your form submission logic here
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add You Tutorials</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="corscTitle"
            className="input input-bordered w-full"
            placeholder="Courses Tital"
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Language</span>
          </label>
          <select
            name="language"
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

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            className="input input-bordered w-full"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Review</span>
          </label>
          <input
            type="number"
            name="review"
            className="input input-bordered w-full bg-gray-100 "
          />
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
