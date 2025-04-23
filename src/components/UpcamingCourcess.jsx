const UpcamingCourcess = () => {
  return (
    <div className="bg-[#F2F2F2] p-2 md:p-5 lg:p-20">
      <div className="text-center mb-20">
        <h1 className="text-2xl md:text-3 lg:text-5xl text-[#969696] font-bold">
          Upcoming Courses{' '}
        </h1>
        <p className="text-sky-500 mt-5">Wait For a While</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure className="">
            <img
              src="https://i.ibb.co.com/5x6jws2/img-9.jpg"
              alt="Shoes"
              className="w-[321px] h-[212px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center gap-y-4">
            <h2 className="card-title">$620</h2>
            <p className="text-[#969696]"> General English Fluency</p>
            <div className="card-actions">
              <button className="btn bg-[#5BD9B3] rounded-none text-white font-bold">
                Book Now!
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure className="">
            <img
              src="https://i.ibb.co.com/TwPgTW3/istockphoto-1391004406-1024x1024.jpg"
              alt="Shoes"
              className="w-[321px] h-[212px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center gap-y-4">
            <h2 className="card-title">$620</h2>
            <p className="text-[#969696]"> General English Fluency</p>
            <div className="card-actions">
              <button className="btn bg-[#5BD9B3] rounded-none text-white font-bold">
                Book Now!
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl rounded-none">
          <figure className="">
            <img
              src="https://i.ibb.co.com/gthD94J/gettyimages-103059806-170667a.jpg"
              alt="Shoes"
              className="w-[321px] h-[212px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center gap-y-4">
            <h2 className="card-title">$620</h2>
            <p className="text-[#969696]"> General English Fluency</p>
            <div className="card-actions">
              <button className="btn bg-[#5BD9B3] rounded-none text-white font-bold">
                Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcamingCourcess;
