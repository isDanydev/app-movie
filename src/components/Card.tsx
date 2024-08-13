import { Link } from "react-router-dom";
import { IMAGE_URL } from "../../env";
import backImage from "../assets/img/not-poster.png";
interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
}

export const Card = ({ movie }: { movie: Movie }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300 ease-in-out group relative ">
      <Link to={`/movie/${movie.id}`}>
        <img
          className="rounded-t-lg rounded-b-lg h-full"
          src={movie.poster_path ? IMAGE_URL + movie.poster_path : backImage}
          alt=""
        />
      </Link>
      <div className="p-5 hidden group-hover:flex absolute  left-0 right-0 bottom-0 bg-slate-500/85 rounded-b-lg h-2/4 flex-col ">
        <Link to={`/movie/${movie.id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {movie.original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-300 text-justify overflow-auto p-3 h-[60%]">
          {movie.overview}
        </p>
        <Link
          to={`/movie/${movie.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver mas
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
