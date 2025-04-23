const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 md:p-4 ml-14 lg:ml-0  md:ml-0">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-6">My profile</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <p className="mt-1 text-lg">habibe112005</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address{' '}
              <span className="text-blue-500 cursor-pointer">| Change</span>
            </label>
            <p className="mt-1 text-lg">ha********@gmail.com</p>
            <label className="label cursor-pointer mt-1">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              <span className="label-text">Receive marketing emails</span>
            </label>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Mobile <span className="text-blue-500 cursor-pointer">| Add</span>
            </label>
            <p className="mt-1 text-gray-400">Please enter your mobile</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Birthday
            </label>
            <p className="mt-1 text-gray-400">Please enter your birthday</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <p className="mt-1 text-gray-400">Please enter your gender</p>
          </div>
          <div>
            <img src="https://i.ibb.co.com/5x6jws2/img-9.jpg" alt="" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn btn-info w-full sm:w-auto">
            EDIT PROFILE
          </button>
          <button className="btn btn-info w-full sm:w-auto">
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
