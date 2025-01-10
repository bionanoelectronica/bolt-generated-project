import React from 'react';
    import PatientInfo from './PatientInfo';
    import VitalSigns from './VitalSigns';
    import './MainContent.css';

    const MainContent = () => {
      return (
        <div className="main-content">
          <PatientInfo />
          <VitalSigns />
        </div>
      );
    };

    export default MainContent;
