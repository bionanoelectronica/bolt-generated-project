import React from 'react';
    import './PatientInfo.css';

    const PatientInfo = () => {
      return (
        <div className="patient-info">
          <h2>Juan David Vasquez Mesa</h2>
          <div className="tabs">
            <button className="tab active">Datos del paciente</button>
            <button className="tab">Signos vitales</button>
            <button className="tab">Afinamiento</button>
          </div>
        </div>
      );
    };

    export default PatientInfo;
