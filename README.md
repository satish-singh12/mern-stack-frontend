
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# Transaction Dashboard

This project is a **Transaction Dashboard** built using React. It includes various components to display and analyze transaction data, such as tables, charts, and statistics. The application interacts with a backend API to fetch, filter, and display data.

## Features

- **Transaction Table**: Displays a list of transactions with details like title, description, price, and more.
- **Search and Filter**: Filter transactions by search term or month.
- **Pagination**: Navigate through multiple pages of transactions.
- **Statistics**: View summary statistics like total sales amount, total sold items, and unsold items.
- **Charts**: Visualize data with bar and pie charts.
- **Database Initialization**: Initialize the database with sample data.

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Charts**: Chart.js, react-chartjs-2
- **UI Components**: Ant Design
- **HTTP Requests**: Axios

## Folder Structure

```bash
src/ ├── components/ │ ├── BarChart.js │ ├── Pagination.js │ ├── PieChart.js │ ├── Statistics.js │ ├── TransactionTable.js ├── pages/ │ └── Dashboard.js ├── App.js └── index.js


#API Endpoints
##The application interacts with the following backend API endpoints:

**Fetch Transactions**: GET /api/v1/transaction/transactions
**Initialize Database**: GET /api/v1/transaction/init
**Fetch Statistics**: GET /api/v1/transaction/statistics
**Fetch Bar Chart Data**: GET /api/v1/transaction/bar-chart
**Fetch Pie Chart Data**: GET /api/v1/transaction/pie-chart

