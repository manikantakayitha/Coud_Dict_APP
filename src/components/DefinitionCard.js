import React from "react";
import StarIcon from "../icons/StarIcon";
import '../styles/DefinitionCard.css';

const DefinitionCard = ({ item, isFavorite, onToggleFavorite }) => (
  <div className="definition-card">
    <div className="card-content">
      <h2 className="card-term">{item.term}</h2>
      <p className="card-definition">{item.definition}</p>
    </div>
    <div className="card-actions">
      <button
        onClick={() => onToggleFavorite(item.term)}
        className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
      >
        <StarIcon isFavorite={isFavorite} />
      </button>
    </div>
  </div>
);

export default DefinitionCard;