import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse mb-5 bg-orange-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-center">ID</th>
              <th className="border px-4 py-2 text-center">Title</th>
              <th className="border px-4 py-2 text-center">Description</th>
              <th className="border px-4 py-2 text-center">Price</th>
              <th className="border px-4 py-2 text-center">Category</th>
              <th className="border px-4 py-2 text-center">Sold</th>
              <th className="border px-4 py-2 text-center">Image</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction._id} className="hover:bg-orange-200">
                <td className="border px-4 py-2">{transaction._id}</td>
                <td className="border px-4 py-2 max-w-[200px]">
                  {transaction.title}
                </td>
                <td className="border px-4 py-2 max-w-[300px]">
                  {transaction.description}
                </td>
                <td className="border px-4 py-2">{transaction.price}</td>
                <td className="border px-4 py-2">{transaction.category}</td>
                <td className="border px-4 py-2">
                  {transaction.sold ? "Yes" : "No"}
                </td>
                <td className="border px-2 py-1">
                  <img
                    src={`${transaction.image}`}
                    alt="Transaction"
                    className="w-20 h-20 rounded-lg object-contain"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
