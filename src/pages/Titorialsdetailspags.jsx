import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Titorialsdetailspags = () => {
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
  console.log(data);
  const { price, description, language, review, corscTitle, buyer } =
    data || {};
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
        {/* courcss Details */}
        <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-light text-gray-800 ">
              Review:
              {review}
            </div>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              {language}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
              {corscTitle}
            </h1>

            <p className="mt-2 text-lg text-gray-600 ">{description}</p>
            <p className="mt-6 text-sm font-bold text-gray-600 ">
              Trainer Details:
            </p>
            <div className="flex items-center gap-5">
              <div>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Name: {buyer?.name}
                </p>
                <p className="mt-2 text-sm  text-gray-600 ">
                  Email: {buyer?.email}
                </p>
              </div>
              <div className="rounded-full object-cover overflow-hidden w-14 h-14">
                <img src={buyer?.photo} alt="" />
              </div>
            </div>
            <p className="mt-6 text-lg font-bold text-gray-600 ">
              Range:${price}
            </p>
          </div>
        </div>
        {/* Enroll now  */}
        <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Enroll Now This Courcss
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  required
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Comment
                </label>
                <input
                  id="comment"
                  name="comment"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Enroll Now
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className="space-y-5">
        <p className="text-[#9698A4]">
          Mauris vitae quam ligula. In tincidunt sapien sed nibh scelerisque
          congue. Maecenas ut libero eu metus tincidunt lobortis. Duis accumsan
          at mauris vel lacinia. Mauris vitae quam ligula.
        </p>
        <p className="text-[#9698A4]">
          In tincidunt sapien sed nibh scelerisque congue. Maecenas ut libero eu
          metus tincidunt lobortis. Maecenas ut libero eu metus tincidunt
          lobortis. Duis accumsan at mauris vel lacinia. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
          ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>
      </div>

      <h1 className="text[#969690] text-5xl font-bold py-10">Course Content</h1>
      <div className="space-y-5">
        <div>
          <p className="text-sky-300">
            Language for Beginners | March 6, 2015 by Brandon Martin
          </p>
          <p className="text-[#9698A4]">
            Suspendisse sapien ligula, tempus fringilla tincidunt at, rutrum ut
            nisl. Praesent dolor eros, varius ut luctus eget, fermentum laoreet
            purus.
          </p>
        </div>
        <div>
          <p className="text-sky-300">
            Language for Beginners | March 6, 2015 by Brandon Martin
          </p>
          <p className="text-[#9698A4]">
            Suspendisse sapien ligula, tempus fringilla tincidunt at, rutrum ut
            nisl. Praesent dolor eros, varius ut luctus eget, fermentum laoreet
            purus.
          </p>
        </div>
        <div>
          {' '}
          <p className="text-sky-300">
            Language for Beginners | March 6, 2015 by Brandon Martin
          </p>
          <p className="text-[#9698A4]">
            Suspendisse sapien ligula, tempus fringilla tincidunt at, rutrum ut
            nisl. Praesent dolor eros, varius ut luctus eget, fermentum laoreet
            purus.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 my-10">
        <div className="flex items-center justify-between py-4">
          <p>Reading</p>
          <p>75</p>
        </div>
        <progress
          className="progress progress-success w-full"
          value="75"
          max="100"
        ></progress>
        <div className="flex items-center justify-between py-4">
          <p>Writing</p>
          <p>60</p>
        </div>
        <progress
          className="progress progress-success w-full"
          value="600"
          max="100"
        ></progress>
        <div className="flex items-center justify-between py-4">
          <p>Vocabulary</p>
          <p>92</p>
        </div>
        <progress
          className="progress progress-success w-full"
          value="90"
          max="100"
        ></progress>
        <div className="flex items-center justify-between py-4">
          <p>Conversation</p>
          <p>36</p>
        </div>
        <progress
          className="progress progress-success w-full"
          value="36"
          max="100"
        ></progress>
        <div className="flex items-center justify-between py-4">
          <p>Comprehension</p>
          <p>50</p>
        </div>
        <progress
          className="progress progress-success w-full"
          value="50"
          max="100"
        ></progress>
        <progress className="progress w-full my-4"></progress>
      </div>
    </div>
  );
};

export default Titorialsdetailspags;
