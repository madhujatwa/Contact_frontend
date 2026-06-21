import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            SCM
          </Link>

          <div className="flex items-center gap-6">

            <Link
              to="/"
              className="hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="hover:text-blue-600"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-600"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Signup
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;