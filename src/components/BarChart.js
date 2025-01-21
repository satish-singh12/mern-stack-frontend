import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ barChartData, monthName }) => {
  // Bar Chart Data
  const barData = {
    labels: barChartData?.map((item) => item.range),
    datasets: [
      {
        label: "Count",
        data: barChartData?.map((item) => item?.count * 100),
        backgroundColor: "rgba(9, 146, 146, 0.6)",
      },
    ],
  };
  return (
    <>
      <div className="m-auto mt-2 w-[70%]">
        <h2 className="text-2xl text-center font-bold">
          Bar Chart Stats - {monthName}
        </h2>
        {barChartData.length > 0 ? (
          <Bar
            data={barData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: "Bar Chart Statistics" },
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

export default BarChart;
