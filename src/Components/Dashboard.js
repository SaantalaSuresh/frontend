import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { FaTrashAlt, FaHome, FaWallet, FaChartLine } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title } from 'chart.js';
import "./Dashboard.css"

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title);

const API_KEY = 'CD5APXP15BV41R7L'; 
const BASE_URL = 'https://www.alphavantage.co/query';

const getStockData = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: '5min',
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState([
    { name: 'Apple', symbol: 'AAPL', shares: 10, return: '-1.10%' },
    { name: 'Meta', symbol: 'META', shares: 5, return: '-0.10%' },
    
  ]);

  const [watchlist, setWatchlist] = useState([
    { name: 'Spotify', symbol: 'SPOT', price: 310.40 },
    { name: 'Airbnb', symbol: 'ABNB', price: 132.72 },
    { name: 'Shopify', symbol: 'SHOP', price: 28.57 },
    { name: 'Playstation', symbol: 'SONY', price: 71.86 },
  ]);

  const [selectedStock, setSelectedStock] = useState(null);
  const [stockChartData, setStockChartData] = useState(null);

  useEffect(() => {
    if (selectedStock) {
      getStockData(selectedStock.symbol).then((data) => {
        if (!data) return;
        const timeSeries = data['Time Series (5min)'];
        if (!timeSeries) return;
        const dates = Object.keys(timeSeries);
        const prices = dates.map(date => timeSeries[date]['1. open']);
        setStockChartData({
          dates,
          prices,
        });
      });
    }
  }, [selectedStock]);

  const handleRemoveFromWatchlist = (symbol) => {
    setWatchlist(watchlist.filter(stock => stock.symbol !== symbol));
    toast.success(`${symbol} removed from watchlist!`);
  };

  return (
    <div className="d-flex h-100 bg-light">
      
      <div className="flex-grow-1 p-3">
        
        {/* <div className="bg-white p-3 mb-3 shadow-sm rounded" id="portfolio">
          <h3>My Portfolio</h3>
          <div className="d-flex flex-column">
            {portfolio.map(stock => (
              <div key={stock.symbol} className="border p-2 mb-2 rounded">
                <h4>{stock.name}</h4>
                <p>Total Shares: {stock.shares}</p>
                <p>Total Return: {stock.return}</p>
              </div>
            ))}
          </div>
        </div> */}

        
        {stockChartData && (
          <div className="bg-white p-3 mb-3 shadow-sm rounded" id="chart">
            <h4>{selectedStock?.name} ({selectedStock?.symbol})</h4>
            <Line
              data={{
                labels: stockChartData.dates,
                datasets: [
                  {
                    label: 'Stock Price',
                    data: stockChartData.prices,
                    fill: false,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    tension: 0.1,
                  },
                ],
              }}
              options={{
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: 'Date',
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: 'Price',
                    },
                  },
                },
                plugins: {
                  legend: {
                    display: true,
                    position: 'top',
                  },
                },
              }}
            />
          </div>
        )}

       
        <div className="bg-white p-3 shadow-sm rounded" id="watchlist">
          <h3>My Watchlist</h3>
          <ul className="list-unstyled">
            {watchlist.map(stock => (
              <li key={stock.symbol} className="d-flex justify-content-between align-items-center border-bottom py-2">
                <span
                  onClick={() => setSelectedStock(stock)}
                  className="cursor-pointer text-primary"
                >
                  {stock.name} - ${stock.price.toFixed(2)}
                </span>
                <div className="d-flex flex-column flex-md-row align-items-center mt-2 mt-md-0">
              <button 
                className='btn btn-outline-primary btn-sm mb-2 mb-md-0' 
                onClick={() => setSelectedStock(stock)}
              >
                View
              </button>
              <FaTrashAlt
                onClick={() => handleRemoveFromWatchlist(stock.symbol)}
                className="text-danger cursor-pointer trash-icon ms-md-2"
              />
            </div>

              </li>
            ))}
          </ul>
        </div>

      
        <ToastContainer />
      </div>
    </div>
  );
};

export default Dashboard;
