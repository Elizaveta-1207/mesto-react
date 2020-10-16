import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false });
  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      link: card.link,
      title: card.name,
    });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ isOpen: false });
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile({ name, about })
      .then((result) => setCurrentUser(result))
      .catch((err) => console.log(`Error ${err}`));

    closeAllPopups();
  }

  React.useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(promises)
      .then((results) => {
        // console.log(results);
        setCurrentUser(results[0]);
        // setupCards(results[1]);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <PopupWithForm name={"add"} title={"Новое место"} buttonTitle={"Создать"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input required name="name" type="text" placeholder="Название" maxLength="30" minLength="1" className="popup__input popup__input_title" id="title-input" />
          <span id="title-input-error"></span>
          <input required name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_link" id="link-input" />
          <span id="link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name={"avatar"} title={"Обновить аватар"} buttonTitle={"Сохранить"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input required name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_link" id="link-input" />
          <span id="link-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name={"confirm"} title={"Вы уверены?"} buttonTitle={"Да"} onClose={closeAllPopups}></PopupWithForm>

        <ImagePopup link={selectedCard.link} title={selectedCard.title} isOpen={selectedCard.isOpen} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
