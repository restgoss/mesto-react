import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onSubmit, isOpened, onClose }) {
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({
            name: name,
            link: link,
        });
    }

    React.useEffect(() => {
        if (isOpened) {
            setName("");
            setLink("");
        }
    }, [isOpened]);
    return (
        <PopupWithForm
            isOpened={isOpened}
            onClose={onClose}
            title={"Новое место"}
            buttonText={"Создать"}
            name={"form_add"}
            onSubmit={handleSubmit}
        >
            <label className="form__input-label">
                <input
                    className="popup__input"
                    id="name2"
                    placeholder="Название"
                    minLength={2}
                    maxLength={30}
                    required=""
                    onChange={handleNameChange}
                    value={name || ''}
                />
                <span className="popup__error" id="name2-error" />
            </label>
            <label>
                <input
                    className="popup__input"
                    type="url"
                    id="link"
                    placeholder="Ссылка на картинку"
                    required=""
                    onChange={handleLinkChange}
                    value={link || ''}
                />
                <span className="popup__error" id="link-error" />
            </label>
        </PopupWithForm>
    );
}
export default AddPlacePopup;