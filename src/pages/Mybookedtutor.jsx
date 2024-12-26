import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Mybookedtutor = () => {
  const [myData, setMyData] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetchAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const fetchAllData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/my-booken/${user?.email}`
    );
    setMyData(data);
  };
  console.log(myData);
  return (
    <section className="container px-4 mx-auto my-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">MyBooking Tutor </h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {myData.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Language
                    </th>

                    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {myData.map(data => (
                    <tr key={data._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {data.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        ${data.price}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className={`px-3 py-1  text-blue-500 bg-blue-100/60 text-xs  rounded-full`}
                          >
                            {data.languages}
                          </p>
                        </div>
                      </td>
                     
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mybookedtutor;
