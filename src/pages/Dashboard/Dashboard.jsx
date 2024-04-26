import PieChart from "./PieChart";
import BarChart from "./BarChart";

const Dashboard = () => {
  return (
    <div className="flex gap-5">
      <BarChart />
      <PieChart />
    </div>
  );
};

export default Dashboard;
