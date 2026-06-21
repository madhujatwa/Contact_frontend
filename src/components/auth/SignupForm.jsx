import { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../../services/authService";

const SignupForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await signupUser(formData);

      alert("Signup Successful");

      console.log(response.data);

      setFormData({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

      <h2 className="text-3xl font-bold text-center mb-6">
        Create Account
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Create Account
        </button>

      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-green-600"
        >
          Login
        </Link>
      </p>

    </div>
  );
};

export default SignupForm;