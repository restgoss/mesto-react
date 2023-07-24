import React from 'react';
function Card(card) {
    function handleClick() {
        card.onCardClick(card);
    }
    
    return (
        <figure className="element">
            <img 
            className="element__image" 
            src={card.link} 
            alt={card.name}
            onClick={handleClick}
            />
            <button className="element__delete-btn" type="button" />
            <figcaption className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-block">
                    <button className="element__button" type="button" />
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card;