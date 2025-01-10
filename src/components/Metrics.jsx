import React from 'react';
    import MetricItem from './MetricItem';
    import './Metrics.css';

    const Metrics = () => {
      return (
        <div className="metrics">
          <div className="metrics-row">
            <MetricItem title="ECG" unit="BPM" value="91" />
            <MetricItem title="SpO2" unit="%" value="95" />
            <MetricItem title="Resp" unit="rpm" value="20" />
            <div className="metric-item">
              <h3>Presión arterial</h3>
              <div className="pressure-values">
                <span>Presion brazalete</span>
                <span>96</span>
              </div>
              <button className="measure-button">Medir presión</button>
              <div className="pressure-values">
                <span>Pulso</span>
                <span>100</span>
              </div>
              <div className="pressure-values">
                <span>120/80</span>
              </div>
            </div>
          </div>
          <div className="metrics-row">
            <div className="metric-item">
              <h3>Composición corporal</h3>
              <button className="measure-button">Medir peso</button>
              <div className="body-composition">
                <div>
                  <span>Peso</span>
                  <span>70 kg</span>
                </div>
                <div>
                  <span>Grasa</span>
                  <span>18 %</span>
                </div>
                <div>
                  <span>Agua</span>
                  <span>61 %</span>
                </div>
                <div>
                  <span>Masa</span>
                  <span>21 %</span>
                </div>
                <div>
                  <span>BMI</span>
                  <span>22.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    export default Metrics;
