const Status = () => {
  return (
    <div className="stats shadow w-full mx-auto flex justify-center">
      <div className="stat place-items-center">
        <div className="stat-title">Tutors </div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">From January 1st to February 1st</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Review </div>
        <div className="stat-value text-secondary">4,200</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Languages</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
      <div className="stat place-items-center">
        <div className="stat-title">User's</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Status;
