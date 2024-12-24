const Welcome = () => {
  return (
    <>
      <div className="my-10">
        <div className="text-center pb-10">
          <h1 className="text-[#969696] font-bold text-5xl">Welcome, Folks!</h1>
          <p className="text-lg text-[#5BD9B3] font-semibold pt-5">
            Why Study With Us
          </p>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 items-center">
          <div className="items-center flex flex-col">
            <img
              className="w-20 pb-5"
              src="https://image.shutterstock.com/image-vector/approval-check-vector-icon-260nw-772897276.jpg"
              alt=""
            />
            <div className="text-center space-y-8">
              <h2 className="text-2xl font-semibold text-[#3E3C36]">
                Certification
              </h2>
              <p className="text-sm text-[#B2B2B2]">
                Get certification from a respected <br /> organization
              </p>
            </div>
          </div>
          <div className="items-center flex flex-col">
            <img
              className="w-20 pb-5"
              src="https://img.icons8.com/?size=100&id=Vi4yU3hEPGoI&format=png"
              alt=""
            />
            <div className="text-center space-y-8">
              <h2 className="text-2xl font-semibold text-[#3E3C36]">
                Teaching Materials
              </h2>
              <p className="text-sm text-[#B2B2B2]">
                Use modern learning materials for over <br /> 15 language
                courses
              </p>
            </div>
          </div>
          <div className="items-center flex flex-col">
            <img
              className="w-20 pb-5"
              src="https://img.icons8.com/?size=160&id=112596&format=png"
              alt=""
            />
            <div className="text-center space-y-8">
              <h2 className="text-2xl font-semibold text-[#3E3C36]">
                {' '}
                Career Upgrade
              </h2>
              <p className="text-sm text-[#B2B2B2]">
                Enhance your professional and <br />
                academic CV as you travel the world
              </p>
            </div>
          </div>
          <div className="items-center flex flex-col">
            <img
              className="w-20 pb-5"
              src="https://img.icons8.com/?size=160&id=Zq1m0ECN9n6p&format=png"
              alt=""
            />
            <div className="text-center space-y-8">
              <h2 className="text-2xl font-semibold text-[#3E3C36]">
                {' '}
                Superior Accomodation
              </h2>
              <p className="text-sm text-[#B2B2B2]">
                Over 100 rooms in premium residences <br /> and welcoming
                homestays
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3E3C36] py-10 px-14 my-20">
        <div className="flex justify-between items-center text-white">
          <div>
            <h2 className="text-5xl font-bold pb-3">
              Intensive English Program
            </h2>
            <p className="font-bold text-[#B5B5B5]">
              for International Students
            </p>
          </div>
          <button className="btn rounded-none text-white bg-[#5BD9B3] px-16 border-none ">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
