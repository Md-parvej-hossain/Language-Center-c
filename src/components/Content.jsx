import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <div className="w-full mx-auto">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/1MBB9X8/istockphoto-1305349522-1024x1024.jpg"
            className="w-[300px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl md:3xl lgtext-5xl font-bold">
              Take this course to further <br />
              improve your language skills.
            </h1>
            <p className="py-2 md:py-3 lg:py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">
              <Link to={'/findtutors'}>Get Started </Link>
            </button>
          </div>
        </div>
      </div>
      <h1 className="text[#969690] text-2xl md:3xl lgtext-5xl font-bold py-10">
        Course Content
      </h1>
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
          <p className="text-[#9698A4]">
            Mauris vitae quam ligula. In tincidunt sapien sed nibh scelerisque
            congue. Maecenas ut libero eu metus tincidunt lobortis. Duis
            accumsan at mauris vel lacinia. Mauris vitae quam ligula.
          </p>
          <p className="text-[#9698A4]">
            In tincidunt sapien sed nibh scelerisque congue. Maecenas ut libero
            eu metus tincidunt lobortis. Maecenas ut libero eu metus tincidunt
            lobortis. Duis accumsan at mauris vel lacinia. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
            enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
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
        <Link
          to={'/findtutors'}
          className="btn bg-sky-300 rounded-none i w-32 mt-10"
        >
          Start Now
        </Link>
      </div>
    </div>
  );
};

export default Content;
