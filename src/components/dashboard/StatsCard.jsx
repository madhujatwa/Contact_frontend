const StatsCard = ({ title, count, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6">

      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-gray-500">
            {title}
          </h3>

          <h2 className="text-3xl font-bold mt-2">
            {count}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatsCard;