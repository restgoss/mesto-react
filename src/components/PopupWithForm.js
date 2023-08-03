import React from 'react';
function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpened ? `popup_active` : ''
            }`}>
            <div className="popup__window">
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" onSubmit={props.onSubmit}>
                    <fieldset className="form">
                        {props.children}
                    </fieldset>
                    <button className="popup__button" type="submit">
                        {props.buttonText}
                    </button>
                </form>
                <button
                    type="button"
                    className="popup__close-button"
                    onClick={props.onClose}
                />
            </div>
        </div>
    )
}
export default PopupWithForm;

