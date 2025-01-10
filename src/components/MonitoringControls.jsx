import React from 'react';
    import './MonitoringControls.css';

    const MonitoringControls = () => {
      return (
        <div className="monitoring-controls">
          <h3>Monitoreo continuo</h3>
          <div className="controls">
            <button className="control-button play">▶️</button>
            <button className="control-button pause">⏸️</button>
            <button className="control-button stop">⏹️</button>
          </div>
          <div className="sampling-options">
            <button className="sampling-option active">Muestra simple</button>
            <button className="sampling-option">Personalizada</button>
          </div>
        </div>
      );
    };

    export default MonitoringControls;
