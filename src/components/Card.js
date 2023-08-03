import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Card(card) {
    
    function handleClick() {
        card.onCardClick(card);
    }
    
    function handleLike() {
        card.onCardLike(card)
    }

    function handleDelete() {
        card.onCardDelete(card);
    }

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    const cardLikeButtonClassName = (`element__button ${isLiked && 'element__button_active'}`);

    return (
        <figure className="element">
            <img
                className="element__image"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            {isOwn && <button className="element__delete-btn" type="button" onClick={handleDelete} />}
            <figcaption className="element__info">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__like-block">
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLike} />
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </figcaption>
        </figure>
    )
}

export default Card;