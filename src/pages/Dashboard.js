import React, { useEffect, useState } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

import TransactionTable from "../components/TransactionTable";
import Statistics from "../components/Statistics";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("");
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  const monthName =
    month && month.includes("-")
      ? [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ][parseInt(month.split("-")[1], 10) - 1]
      : "N/A";
  // Fetch Transactions
  const fetchTransactions = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/transaction/transactions`,
        {
          params: { page, perPage, search, month },
        }
      );

      console.log(data);
      setTransactions(data.transactions);
      setTotal(data.total);
    } catch (error) {
      console.error("Failed to fetch transactions", error);
    }
  };

  // Initialize Database
  const initDatabase = async () => {
    try {
      await axios.get(`http://localhost:5000/api/v1/transaction/init`);
      alert("Database initialized successfully");
    } catch (error) {
      console.error("Failed to initialize database", error);
    }
  };

  // Fetch Statistics
  const fetchStatistics = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/transaction/statistics`,
        {
          params: { month },
        }
      );
      setStatistics(data);
    } catch (error) {
      console.error("Failed to fetch statistics", error);
    }
  };

  // Fetch Bar Chart Data
  const fetchBarChartData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/transaction/bar-chart`,
        {
          params: { month },
        }
      );
      setBarChartData(data);
    } catch (error) {
      console.error("Failed to fetch bar chart data", error);
    }
  };

  // Fetch Pie Chart Data
  const fetchPieChartData = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/transaction/pie-chart`,
        {
          params: { month },
        }
      );
      setPieChartData(data);
    } catch (error) {
      console.error("Failed to fetch pie chart data", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
    if (month) {
      fetchStatistics();
      fetchBarChartData();
      fetchPieChartData();
    }
  }, [page, perPage, search, month]);

  return (
    <div className="max-w-screen-xl mx-auto p-5 bg-slate-300">
      <h1 className="flex m-auto text-3xl font-bold mb-5 text-center bg-slate-100 w-1/4 p-3 rounded-3xl">
        Transaction Dashboard
      </h1>

      <button
        onClick={initDatabase}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-5"
      >
        Initialize Database
      </button>

      <div className="mb-5 flex justify-between">
        <input
          type="text"
          placeholder="Search Transaction"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 mr-3 bg-orange-300 rounded-3xl"
        />

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2 rounded  bg-orange-500"
        >
          <option value="">Select Month</option>
          {Array.from({ length: 5 }, (_, yearOffset) => {
            const year = new Date().getFullYear() - 4 + yearOffset; // Adjust the range as needed
            return Array.from({ length: 12 }, (_, i) => {
              const month = (i + 1).toString().padStart(2, "0");
              return (
                <option key={`${year}-${month}`} value={`${year}-${month}`}>
                  {`${year}-${month}`}
                </option>
              );
            });
          }).flat()}
        </select>
      </div>

      {/* TransactionTable */}
      <TransactionTable transactions={transactions} />

      {/* Pagination */}
      <Pagination
        page={page}
        setPage={setPage}
        total={total}
        perPage={perPage}
        setPerPage={setPerPage}
      />
      <hr />
      {/* Statistics */}
      <Statistics statistics={statistics} />
      <hr />
      {/* BarChart */}
      <BarChart barChartData={barChartData} monthName={monthName} />
      <hr />
      {/* PieChart */}
      <PieChart pieChartData={pieChartData} monthName={monthName} />
    </div>
  );
};

export default Dashboard;
