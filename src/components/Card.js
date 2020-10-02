import React from "react";

function Card({ link, name, likes, onCardClick }) {
  function handleClick() {
    onCardClick({ link: link, name: name });
  }

  return (
    <li className="element">
      <button aria-label="Удалить" type="button" className="element__delete"></button>
      <img src={link} alt={name} className="element__img" onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__likes">
          <button aria-label="Лайк" type="button" className="element__like"></button>
          <p className="element__like-amount">{likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
