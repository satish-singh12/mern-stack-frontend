import React from "react";

const Statistics = ({ statistics }) => {
  return (
    <>
      <div className="my-3 bg-green-300 p-4 w-[30%] rounded-3xl">
        <h2 className="text-2xl font-bold">Statistics</h2>
        <table>
          <tbody>
            <tr>
              <td>Total Sale Amount:</td>
              <td className="px-6">
                {Math.round(statistics.totalSaleAmount || 0)}
              </td>
            </tr>
            <tr>
              <td>Total Sold Items:</td>
              <td className="px-6">{statistics.totalSoldItems || 0}</td>
            </tr>
            <tr>
              <td>Total Unsold Items:</td>
              <td className="px-6">{statistics.totalNotSoldItems || 0}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statistics;
