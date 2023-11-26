// Statistic.js

import CountUp from "react-countup";
import { FaUser } from "react-icons/fa";



const Statistic = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl text-center font-bold mb-4">User Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className="bg-gradient-to-tr from-teal-600 to-slate-600 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total Users <FaUser></FaUser></h3>
          <p className="text-3xl font-bold">
            <CountUp end={100} duration={50}/>
          </p>
        </div>

        {/* Normal Users */}
        <div className="bg-gradient-to-tr from-teal-600 to-slate-600 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Normal Users <FaUser></FaUser></h3>
          <p className="text-3xl font-bold">
            <CountUp end={60} duration={50}/>
          </p>
        </div>

        {/* Premium Users */}
        <div className="bg-gradient-to-tr from-teal-600 to-slate-600 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Premium Users <FaUser></FaUser></h3>
          <p className="text-3xl font-bold">
            <CountUp end={40} duration={50}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
