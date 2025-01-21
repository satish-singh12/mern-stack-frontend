import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PieChart = ({ pieChartData, monthName }) => {
  // Pie Chart Data
  const pieData = {
    labels: pieChartData.map((item) => item.category),
    datasets: [
      {
        data: pieChartData.map((item) => item.count),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };
  return (
    <>
      <div className="m-auto w-[50%] mt-5">
        <h2 className="text-2xl font-bold text-center">
          Pie Chart - {monthName}
        </h2>
        {pieChartData.length > 0 ? (
          <Pie
            data={pieData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Pie Chart Statistics" },
              },
            }}
          />
        ) : (
          <p className="text-center">No data available.</p>
        )}
      </div>
    </>
  );
};

export default PieChart;
