import { useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {

  // состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);



  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleEditProfileSubmit(data) {
    api.setUserInfo(data)
    .then((newUser) => {
      setCurrentUser(newUser);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleAvatarSubmit(data) {
    api.changeAvatar(data)
    .then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setCardSelected(null);
  }

  const [selectedCard, setCardSelected] = useState(null);

  function handleCardClick(card) {
    setCardSelected(card);
  }

  function handleCardlike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => (c._id === card._id ? newCard : c))
                );
            })
            .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((newCard) => {
      const newCards = cards.filter((c) => 
      c._id === card._id ? "" : newCard 
      );
      setCards(newCards);
    })
    .catch((err) => console.log(err));
  }


  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then(res => {

      setCards(res);
    })
      .catch(err => {
        console.log(err);
      })
  }, [])


  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api.getUserInfo().then(res => {

      setCurrentUser(res);
    })
  }, [])






  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardlike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <AddPlacePopup isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit} />
        <EditProfilePopup isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} onSubmit={handleEditProfileSubmit} />
        <EditAvatarPopup isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} onSubmit={handleAvatarSubmit} />
        <ImagePopup
          isOpen={selectedCard}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

// <template id="card__template" />
