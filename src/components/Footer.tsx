import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow  dark:bg-gray-900  text-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex-row md:flex md:items-center md:justify-between flex flex-col justify-center justify-items-center items-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-300">
          © 2024{" "}
          <Link to="/" target="_blank" className="hover:underline">
            Vimovie
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-300 sm:mt-0">
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" target="_blank" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
