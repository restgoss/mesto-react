import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {

  // состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setCardSelected(null);
  }

  const [selectedCard, setCardSelected] = React.useState(null);

  function handleCardClick(card) {
    setCardSelected(card);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} 
        />
        <Footer />
        <PopupWithForm
          isOpened={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title={"Новое место"}
          buttonText={"Создать"}
          name={"form_add"}
        >
          <label className="form__input-label">
            <input
              className="popup__input"
              defaultValue=""
              id="name2"
              placeholder="Название"
              minLength={2}
              maxLength={30}
              required=""
            />
            <span className="popup__error" id="name2-error" />
          </label>
          <label>
            <input
              className="popup__input"
              type="url"
              defaultValue=""
              id="link"
              placeholder="Ссылка на картинку"
              required=""
            />
            <span className="popup__error" id="link-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title={"Редактировать профиль"}
          buttonText={"Сохранить"}
          name={"form_edit"}
        >
          <label className="form__input-label">
            <input
              className="popup__input"
              id="name1"
              placeholder="Введите имя"
              minLength={2}
              maxLength={40}
              required=""
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
            />
            <span className="popup__error about-error" id="about-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title={"Обновить аватар"}
          buttonText={"Сохранить"}
          name={"form_avatar"}
        >
          <label className="form__input-label">
            <input
              className="popup__input"
              defaultValue=""
              type="url"
              id="avatar"
              placeholder="Ссылка на изображение"
              required=""
            />
            <span className="popup__error" id="avatar-error" />
          </label>
        </PopupWithForm>
        <ImagePopup
          isOpen={selectedCard}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>

    </>

  );
}

export default App;

// <template id="card__template" />
