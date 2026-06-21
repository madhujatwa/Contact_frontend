import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

      <h2 className="text-3xl font-bold text-center mb-6">
        Login
      </h2>

      <form className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
        />

        <button
          className="w-full bg-blue-600 text-white p-3 rounded-lg"
        >
          Login
        </button>

      </form>

      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="text-blue-600"
        >
          Signup
        </Link>
      </p>

    </div>
  );
};

export default LoginForm;