import React from "react";
import DefinitionCard from "./DefinitionCard";
import dictionary from "../data/dictionary";

const FavoritesDisplay = ({ favorites, onToggleFavorite }) => {
  const favoriteItems = dictionary.filter(item => favorites.includes(item.term));

  if (favoriteItems.length === 0) {
    return (
      <div className="info-panel">
        <h2 className="info-title">No Favorites Yet</h2>
        <p className="info-text">Click the star on a definition card to save it here.</p>
      </div>
    );
  }

  return (
    <>
      {favoriteItems.map((item) => (
        <DefinitionCard
          key={item.term}
          item={item}
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </>
  );
};

export default FavoritesDisplay;