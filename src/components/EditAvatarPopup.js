import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ onSubmit, isOpened, onClose }) {
    const ref = React.useRef();
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit({ avatar: ref.current.value });
    }

    React.useEffect(() => {
        ref.current.value = "";
    }, [isOpened]);
    return (
        <PopupWithForm
            isOpened={isOpened}
            onClose={onClose}
            title={"Обновить аватар"}
            buttonText={"Сохранить"}
            name={"form_avatar"}
            onSubmit={handleSubmit}
        >
            <label className="form__input-label">
                <input
                    ref={ref}
                    className="popup__input"
                    type="url"
                    id="avatar"
                    placeholder="Ссылка на изображение"
                    required=""
                />
                <span className="popup__error" id="avatar-error" />
            </label>
        </PopupWithForm>
    );
}
