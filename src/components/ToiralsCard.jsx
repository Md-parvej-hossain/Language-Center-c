import { Link } from 'react-router-dom';
import { format } from 'date-fns';
const ToiralsCard = ({ data }) => {
  const { title, email, dadline, category } = data || {};
  return (
    <Link
      to={'/titorialsdetailspags'}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="card bg-base-100 ">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{email}</p>
          <p> Dadline : {format(new Date(dadline), 'P')}</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ToiralsCard;
