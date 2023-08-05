import React from 'react';
function ImagePopup(props) {
    return (
        <div className={`popup popup_image-view ${props.card ? "popup_active" : ""}`}>
            <div className="popup__container">
                <img className="popup__image" 
                src={props.card ? props.card.link : ""}
                alt={props.card ? props.card.name : ""} 
                />
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={props.onClose}
                />
                <p className="popup__description">{props.card ? props.card.name : ""}</p>
            </div>
        </div>
    );
}



export default ImagePopup;