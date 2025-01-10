import React from 'react';
    import './Sidebar.css';

    const Sidebar = () => {
      return (
        <aside className="sidebar">
          <div className="sidebar-item">
            <span className="sidebar-icon">➕</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">»</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">⌂</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">🧑‍🤝‍🧑</span>
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">📱</span>
          </div>
          <div className="sidebar-item profile">
            <img src="https://via.placeholder.com/50" alt="Profile" />
          </div>
          <div className="sidebar-item">
            <span className="sidebar-icon">↶</span>
          </div>
        </aside>
      );
    };

    export default Sidebar;
