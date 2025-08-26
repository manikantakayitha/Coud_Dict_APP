import React from "react";
import DefinitionCard from "./DefinitionCard";

const ResultsDisplay = ({ results, hasSearched, favorites, onToggleFavorite }) => {
  if (!hasSearched) {
    return (
      <div className="info-panel">
        <h2 className="info-title">Search the Dictionary</h2>
        <p className="info-text">Enter a term in the search bar above to find a definition.</p>
      </div>
    );
  }
  
  if (results.length === 0) {
    return (
      <div className="info-panel">
        <h2 className="info-title">No Results Found</h2>
        <p className="info-text">We couldn't find a definition for your search term. Please try another.</p>
      </div>
    );
  }
  
  return (
    <>
      {results.map((item) => (
        <DefinitionCard
          key={item.term}
          item={item}
          isFavorite={favorites.includes(item.term)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </>
  );
};

export default ResultsDisplay;