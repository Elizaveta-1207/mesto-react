import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setisEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setisEditAvatarPopupOpen(false);
  }

  return (
    <div class="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />

      <PopupWithForm name={"edit"} title={"Редактировать профиль"} buttonTitle={"Сохранить"} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input required name="name" type="text" placeholder="Введите имя" maxlength="40" minlength="2" className="popup__input popup__input_name" id="name-input" />
        <span id="name-input-error"></span>
        <input required name="description" type="text" placeholder="Введите описание" maxlength="200" minlength="2" className="popup__input popup__input_description" id="description-input" />
        <span id="description-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name={"add"} title={"Новое место"} buttonTitle={"Создать"} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input required name="name" type="text" placeholder="Название" maxlength="30" minlength="1" className="popup__input popup__input_title" id="title-input" />
        <span id="title-input-error"></span>
        <input required name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_link" id="link-input" />
        <span id="link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name={"avatar"} title={"Обновить аватар"} buttonTitle={"Сохранить"} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input required name="link" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_link" id="link-input" />
        <span id="link-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name={"confirm"} title={"Вы уверены?"} buttonTitle={"Да"}></PopupWithForm>

      <ImagePopup />
    </div>
  );
}

export default App;
