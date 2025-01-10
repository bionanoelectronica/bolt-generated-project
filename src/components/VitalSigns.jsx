import React from 'react';
    import MonitoringControls from './MonitoringControls';
    import SignalChart from './SignalChart';
    import Metrics from './Metrics';
    import './VitalSigns.css';

    const VitalSigns = () => {
      const chartData = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: 'Signal Data',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

      return (
        <div className="vital-signs">
          <MonitoringControls />
          <div className="charts-container">
            <SignalChart title="ECG Ch1" data={chartData} />
            <SignalChart title="ECG Ch2" data={chartData} />
            <SignalChart title="SpO2" data={chartData} />
            <SignalChart title="Resp" data={chartData} />
          </div>
          <Metrics />
        </div>
      );
    };

    export default VitalSigns;
