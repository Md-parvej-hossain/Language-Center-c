const About = () => {
  return (
    <section className="bg-base-200 py-12 my-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-base-content text-lg">
            We are dedicated to providing compassionate and professional
            counseling services that empower individuals to overcome challenges
            and lead fulfilling lives. Our team of experienced counselors is
            here to guide you every step of the way.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-secondary">
                Our Mission
              </h3>
              <p>
                To create a safe and supportive environment where individuals
                can achieve mental well-being and personal growth.
              </p>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold text-secondary">
                Our Vision
              </h3>
              <p>
                To be a trusted resource for mental health and wellness,
                fostering resilience and happiness in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
