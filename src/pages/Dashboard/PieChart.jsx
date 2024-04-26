import Chart from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const PieChart = () => {
  return (
    <div className="flex-1 border shadow-lg rounded p-5">
      <div className="text-center py-2 text-white font-semibold bg-[#293a50]">
        % Coste Contribution
      </div>
      <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
    </div>
  );
};

export default PieChart;
