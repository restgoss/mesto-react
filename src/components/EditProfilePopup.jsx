import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ onSubmit, isOpened, onClose }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [about, setAbout] = React.useState("");
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setAbout(e.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({
            name: name,
            about: about,
        });
    }

    React.useEffect(() => {
        if (isOpened) {
          setName(currentUser.name);
          setAbout(currentUser.about);
        }
      }, [isOpened, currentUser]);
    return (
        <PopupWithForm
            isOpened={isOpened}
            onClose={onClose}
            title={"Редактировать профиль"}
            buttonText={"Сохранить"}
            name={"form_edit"}
            onSubmit={handleSubmit}
        >
            <label className="form__input-label">
                <input
                    className="popup__input"
                    id="name1"
                    placeholder="Введите имя"
                    minLength={2}
                    maxLength={40}
                    required=""
                    onChange={handleNameChange}
                    value={name}
                />
                <span className="popup__error" id="name1-error" />
            </label>
            <label>
                <input
                    className="popup__input"
                    id="about"
                    placeholder="Введите описание"
                    minLength={2}
                    maxLength={200}
                    required=""
                    onChange={handleLinkChange}
                    value={about}
                />
                <span className="popup__error about-error" id="about-error" />
            </label>
        </PopupWithForm>
    );
}
