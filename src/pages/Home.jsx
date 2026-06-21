import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Smart Contact Manager
          </h1>

          <p className="text-xl mb-8">
            Store, manage and organize all your contacts securely.
          </p>

          <Link
            to="/signup"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Get Started
          </Link>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Contact Management
              </h3>

              <p>
                Add, update and manage contacts easily.
              </p>
            </div>

            <div className="shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Secure Authentication
              </h3>

              <p>
                Secure login and signup system.
              </p>
            </div>

            <div className="shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">
                Dashboard
              </h3>

              <p>
                View all contacts from one dashboard.
              </p>
            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default Home;