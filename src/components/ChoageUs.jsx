const ChoageUs = () => {
  return (
    <div className="my-20">
      <div className="text-center pb-10">
        <h1 className="text-[#969696] font-bold text-5xl">Why Choose Us</h1>
        <p className="text-lg text-[#5BD9B3] font-semibold pt-5">
          Simple Reasons
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <img
              className="bg-slate-300"
              src="https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=gif"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">
                Over 20 Years of Experience
              </h1>
              <p className="text-sm text-[#B2B2B2]">
                In 2000 our centre became an academic department within the
                school of languages.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              className="bg-slate-300"
              src="https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=gif"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Exclusive Learning</h1>
              <p className="text-sm text-[#B2B2B2]">
                Materials Our learning materials include text with multimedia on
                all areas of the curriculum.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img
              className="bg-slate-300"
              src="https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=gif"
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Career Upgrade</h1>
              <p className="text-sm text-[#B2B2B2]">
                Learning a new language is a fascinating thing that can lead to
                great opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="flex hidden sm:hidden pl-20 md:hidden lg:block text-center  items-center ">
          <img src="https://i.ibb.co.com/Dp8k1x4/download.jpg" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <div className="space-y-2 text-right">
              <h1 className="text-2xl font-bold">Certification</h1>
              <p className="text-sm text-[#B2B2B2]">
                At the end of course you will get the certificate and valuable
                skills and experience.
              </p>
            </div>
            <img
              className="bg-slate-300"
              src="https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=gif"
              alt=""
            />
          </div>
          <div className="flex items-start gap-3">
            <div className="space-y-2 text-right">
              <h1 className="text-2xl font-bold">Friendly Learning</h1>
              <p className="text-sm text-[#B2B2B2]">
                Environment Our method based on learning a language in a
                friendly and open atmosphere.
              </p>
            </div>
            <img
              className="bg-slate-300"
              src="https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=gif"
              alt=""
            />
          </div>
          <div className="flex items-start gap-3">
            <div className="space-y-2 text-right">
              <h1 className="text-2xl font-bold">Professional</h1>
              <p className="text-sm text-[#B2B2B2]">
                Teachers Our team consist of high-quality and certified teachers
                with big experience.
              </p>
            </div>
            <img
              className="bg-slate-300"
              src="https://img.icons8.com/?size=100&id=YRgTeE4zIm16&format=gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoageUs;
