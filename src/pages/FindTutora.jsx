import { useEffect, useState } from 'react';
import ToiralsCard from '../components/ToiralsCard';
import axios from 'axios';

const FindTutora = () => {
  const [tutoras, setTutors] = useState([]);
  useEffect(() => {
    fetchAllJobs();
  }, []);
  const fetchAllJobs = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/alldata`);
    setTutors(data);
  };
  console.log(tutoras);
  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="ENGLISH">ENGLISH</option>
              <option value="FRENCH">FRENCH</option>
              <option value="ITALIAN">ITALIAN</option>
              <option value="GERMAN">GERMAN</option>
              <option value="SPANISH">SPANISH</option>
              <option value="JAPANESE">JAPANESE</option>
            </select>
          </div>

          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Deadline</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <button className="btn">Reset</button>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tutoras &&
            tutoras.map(data => <ToiralsCard key={data._id} data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default FindTutora;
