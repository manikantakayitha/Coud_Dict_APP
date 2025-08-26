import React from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";
import '../styles/SearchHeader.css';

const SearchHeader = ({ searchTerm, setSearchTerm, onSearch, theme, toggleTheme, setView, view, currentUser, onLogout }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <header className="search-header">
      <div className="header-container">
        <div className="header-top-row">
          <h1 className="header-title">Cloud Dictionary</h1>
          <div className="header-actions">
            <span className="welcome-message">Welcome, {currentUser}!</span>
            <button onClick={() => setView(view === 'search' ? 'favorites' : 'search')}
              className="header-btn btn-view-toggle">
              {view === 'search' ? 'Favorites' : 'Search'}
            </button>
            <button onClick={toggleTheme} className="header-btn btn-theme-toggle">
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button onClick={onLogout} className="header-btn btn-logout">
              Logout
            </button>
          </div>
        </div>
        {view === 'search' && (
          <form onSubmit={handleSubmit} className="search-form">
            <div className="search-input-group">
              <input type="search" value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                placeholder="Search for terms..." />
              <button type="submit" className="search-button">Search</button>
            </div>
          </form>
        )}
      </div>
    </header>
  );
};

export default SearchHeader;