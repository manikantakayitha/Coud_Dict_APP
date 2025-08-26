import React, { useState, useEffect } from "react";
import dictionary from "../data/dictionary";
import SearchHeader from "./SearchHeader";
import ResultsDisplay from "./ResultsDisplay";
import FavoritesDisplay from "./FavoritesDisplay";
import '../styles/DictionaryApp.css';

const DictionaryApp = ({ currentUser, onLogout, theme, toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(`favorites_${currentUser}`);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [view, setView] = useState("search");

  useEffect(() => {
    localStorage.setItem(`favorites_${currentUser}`, JSON.stringify(favorites));
  }, [favorites, currentUser]);

  const toggleFavorite = (term) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(term)
        ? prevFavorites.filter(fav => fav !== term)
        : [...prevFavorites, term]
    );
  };

  const performSearch = () => {
    setHasSearched(true);
    if (searchTerm.trim() === "") { setResults([]); return; }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredResults = dictionary.filter(item =>
      item.term.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setResults(filteredResults);
  };

  return (
    <>
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        onSearch={performSearch} theme={theme} toggleTheme={toggleTheme}
        setView={setView} view={view} currentUser={currentUser} onLogout={onLogout} />
      <main className="dictionary-main">
        <div className="results-grid">
          {view === "search"
            ? <ResultsDisplay results={results} hasSearched={hasSearched} favorites={favorites} onToggleFavorite={toggleFavorite} />
            : <FavoritesDisplay favorites={favorites} onToggleFavorite={toggleFavorite} />}
        </div>
      </main>
    </>
  );
};

export default DictionaryApp;