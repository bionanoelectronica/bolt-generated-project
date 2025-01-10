import React from 'react';

    const MetricItem = ({ title, unit, value }) => {
      return (
        <div className="metric-item">
          <h3>{title}</h3>
          <span className="value">{value}</span>
          <span className="unit">{unit}</span>
        </div>
      );
    };

    export default MetricItem;
