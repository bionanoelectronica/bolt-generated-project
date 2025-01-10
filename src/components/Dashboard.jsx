import React from 'react';
    import Header from './Header';
    import Sidebar from './Sidebar';
    import MainContent from './MainContent';
    import './Dashboard.css';

    const Dashboard = () => {
      return (
        <div className="dashboard">
          <Header />
          <Sidebar />
          <MainContent />
        </div>
      );
    };

    export default Dashboard;
