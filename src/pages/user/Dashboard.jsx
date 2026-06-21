const Dashboard = () => {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Total Contacts
          </h2>

          <p className="text-4xl font-bold text-blue-600 mt-4">
            120
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Favorites
          </h2>

          <p className="text-4xl font-bold text-green-600 mt-4">
            25
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Groups
          </h2>

          <p className="text-4xl font-bold text-purple-600 mt-4">
            8
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;