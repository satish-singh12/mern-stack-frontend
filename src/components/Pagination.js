import React from "react";

const Pagination = ({ page, setPage, total, perPage, setPerPage }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="bg-gray-300 text-black px-4 py-2 rounded-l"
          >
            Previous
          </button>
          <span className="px-4">{`Page ${page} of ${Math.ceil(
            total / perPage
          )}`}</span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page * perPage >= total}
            className="bg-gray-300 text-black px-4 py-2 rounded-r"
          >
            Next
          </button>
        </div>

        <div>
          <select
            onChange={(e) => setPerPage(Number(e.target.value))}
            value={perPage}
            className="border p-2 rounded"
          >
            {[10, 20, 50].map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Pagination;
