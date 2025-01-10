import React from 'react';
    import { Line } from 'react-chartjs-2';
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
    } from 'chart.js';
    import './SignalChart.css';

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

    const SignalChart = ({ title, data }) => {
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: title,
            color: '#333',
            font: {
              size: 16,
            },
          },
        },
        scales: {
          x: {
            grid: {
              color: '#e0e0e0',
            },
          },
          y: {
            grid: {
              color: '#e0e0e0',
            },
          },
        },
      };

      return (
        <div className="signal-chart">
          <Line options={options} data={data} />
        </div>
      );
    };

    export default SignalChart;
