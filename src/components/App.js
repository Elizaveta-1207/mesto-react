import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false });

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

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm name={"edit"} title={"Редактировать профиль"} buttonTitle={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input required name="name" type="text" placeholder="Введите имя" maxLength="40" minLength="2" className="popup__input popup__input_name" id="name-input" />
        <span id="name-input-error"></span>
        <input required name="description" type="text" placeholder="Введите описание" maxLength="200" minLength="2" className="popup__input popup__input_description" id="description-input" />
        <span id="description-input-error"></span>
      </PopupWithForm>

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
  );
}

export default App;
