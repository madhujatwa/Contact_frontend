import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed">

      <div className="p-6">
        <h1 className="text-2xl font-bold">
          SCM
        </h1>
      </div>

      <ul className="mt-6">

        <li>
          <Link
            to="/dashboard"
            className="block px-6 py-3 hover:bg-slate-800"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/add"
            className="block px-6 py-3 hover:bg-slate-800"
          >
            Add Contact
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/view"
            className="block px-6 py-3 hover:bg-slate-800"
          >
            Contacts
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/profile"
            className="block px-6 py-3 hover:bg-slate-800"
          >
            Profile
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Sidebar;