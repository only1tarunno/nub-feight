import Chart from "react-google-charts";
export const data = [
  ["Year", "Sales"],
  ["2014", 1000],
  ["2015", 1170],
  ["2016", 660],
  ["2017", 1030],
  ["2017", 1030],
  ["2017", 1030],
  ["2017", 1030],
  ["2017", 1030],
  ["2017", 1030],
];
const BarChart = () => {
  return (
    <div className="flex-1 border shadow-lg rounded p-5">
      <div className="py-2 mb-5 flex items-center gap-5">
        <hr className="w-[50px] h-2 bg-red-400" />
        Evulution Coste Contribution
      </div>
      <Chart chartType="Bar" width="100%" height="400px" data={data} />
    </div>
  );
};

export default BarChart;
