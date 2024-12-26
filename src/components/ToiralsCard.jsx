/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const ToiralsCard = ({ data }) => {
  const { photo, nametuters, price, language, review, _id } = data || {};
  return (
    <Link
      to={`/titorialsdetailspags/${_id}`}
      className="w-full mx-auto max-w-sm  bg-white  shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="card bg-base-100 rounded-none gap-y-5">
        <figure>
          <img
            className="w-[290px] h-[191px] object-cover"
            src={photo}
            alt="img"
          />
        </figure>
        <div className="p-2">
          <div>
            <h2 className="card-title">{nametuters}</h2>
            <p>super tutor</p>
          </div>

          <div className="flex  items-center justify-between ">
            <div>
              <p className="flex items-center gap-2">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=100&id=30633&format=png"
                  alt=""
                />
                {language}
              </p>
            </div>

            <div className="">
              <p className="flex items-center">
                <img
                  className="w-6"
                  src="https://img.icons8.com/?size=80&id=21145&format=png"
                  alt=""
                />
                {review}{' '}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between space-y-4">
            <p>Price : ${price}</p>
          </div>
          <p className="">{data.description.substring(0, 80)}.</p>
          <button className=" w-10">
            <img
              src="https://img.icons8.com/?size=100&id=8OOIdPe6NXVi&format=gif"
              alt=""
            />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ToiralsCard;
