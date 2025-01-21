# Frontend for Transaction Dashboard

This project serves as the frontend for a transaction dashboard application. It allows users to view and interact with transaction data, including viewing detailed information, statistics, and visualizations such as bar charts and pie charts.

---

## Table of Contents

- [Frontend for Transaction Dashboard](#frontend-for-transaction-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [Features](#features)
  - [API Integration](#api-integration)
    - [Example API Endpoints](#example-api-endpoints)
    - [API Requests](#api-requests)
  - [Environment Variables](#environment-variables)
  - [Dependencies](#dependencies)
  - [License](#license)

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- A working backend server (refer to the backend's README.md file)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. The application will run at [http://localhost:3000](http://localhost:3000).

---

## Folder Structure

```
src/
├── components/             # Reusable UI components
│   ├── BarChart.js         # Bar chart component
│   ├── Pagination.js       # Pagination controls
│   ├── PieChart.js         # Pie chart component
│   ├── Statistics.js       # Statistics display
│   ├── TransactionTable.js # Table to display transactions
├── pages/                  # Page components
│   └── Dashboard.js        # Main dashboard page
├── App.js                  # Main React component
├── index.js                # React entry point
├── services/               # API interaction layer
│   └── api.js              # API call methods
└── styles/                 # Global and component styles
    └── App.css             # Global styles for the app
```

---

## Features

- **Transaction Table**: Display transactions with pagination and filtering options.
- **Statistics**: Show statistics on total sales, sold, and unsold items for a specific month.
- **Bar Chart**: Visual representation of transactions grouped by price ranges.
- **Pie Chart**: Visual representation of transactions grouped by category.
- **Pagination**: Navigate through multiple pages of transactions.
- **Search**: Search transactions by title, description, or price.

---

## API Integration

The frontend communicates with the backend to fetch transaction data, statistics, and visualizations. The base API URL is set to the backend server address, typically [http://localhost:5000](http://localhost:5000).

### Example API Endpoints
- **GET** `/api/v1/transaction/transactions`: Get a paginated list of transactions.
- **GET** `/api/v1/transaction/statistics`: Get statistics for a specific month.
- **GET** `/api/v1/transaction/bar-chart`: Get bar chart data grouped by price range.
- **GET** `/api/v1/transaction/pie-chart`: Get pie chart data grouped by category.

### API Requests
API requests are made using the `axios` library (or any other HTTP client) and are defined in the `services/api.js` file.

---

## Environment Variables

| Variable      | Description                               |
|---------------|-------------------------------------------|
| \`REACT_APP_API_URL\`  | Base URL for the backend API (default: \`http://localhost:5000\`). |

---

## Dependencies

| Package          | Version  | Description                              |
|------------------|----------|------------------------------------------|
| \`axios\`         | ^1.7.9   | For making HTTP requests to the backend. |
| \`react\`         | ^18.x.x  | Core React library.                      |
| \`react-dom\`     | ^18.x.x  | DOM bindings for React.                  |
| \`react-router-dom\` | ^6.x.x | For handling routing in React.          |
| \`chart.js\`      | ^4.0.1   | For rendering bar charts and pie charts. |
| \`react-chartjs-2\` | ^4.1.1  | For integrating Chart.js with React.     |

---

## License

This project is licensed under the ISC License.
