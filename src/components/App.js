import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <div class="page">
      <Header />
      <Main />
      <Footer />

      <div class="popup popup-edit">
        <div class="popup__container">
          <button aria-label="Закрыть редактирование профиля" type="button" class="popup__close-button"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form action="#" name="popup-form" class="popup__form popup-edit__form" novalidate>
            <input required name="name" type="text" placeholder="Введите имя" maxlength="40" minlength="2" class="popup__input popup__input_name" id="name-input" />
            <span id="name-input-error"></span>
            <input required name="description" type="text" placeholder="Введите описание" maxlength="200" minlength="2" class="popup__input popup__input_description" id="description-input" />
            <span id="description-input-error"></span>
            <button type="submit" class="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup-add">
        <div class="popup__container">
          <button aria-label="Закрыть добавление нового места" type="button" class="popup__close-button"></button>
          <h2 class="popup__title">Новое место</h2>
          <form action="#" name="popup-form" class="popup__form popup-add__form" novalidate>
            <input required name="name" type="text" placeholder="Название" maxlength="30" minlength="1" class="popup__input popup__input_title" id="title-input" />
            <span id="title-input-error"></span>
            <input required name="link" type="url" placeholder="Ссылка на картинку" class="popup__input popup__input_link" id="link-input" />
            <span id="link-input-error"></span>
            <button type="submit" class="popup__button">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div class="popup popup-img" id="popup-image">
        <div class="popup__img-container">
          <button aria-label="Закрыть картинку" type="button" class="popup__close-button"></button>
          <img src="./images/element-baikal.jpg" alt="Картинка места" class="popup__full-img" />
          <h2 class="popup__title-img">Байкал</h2>
        </div>
      </div>
      <div class="popup popup-confirm">
        <div class="popup__container">
          <button aria-label="Закрыть подтверждение удаления карточки" type="button" class="popup__close-button"></button>
          <h2 class="popup__title">Вы уверены?</h2>
          <button type="submit" class="popup__button">
            Да
          </button>
        </div>
      </div>
      <div class="popup popup-avatar">
        <div class="popup__container">
          <button aria-label="Закрыть редактирование аватарки" type="button" class="popup__close-button"></button>
          <h2 class="popup__title">Обновить аватар</h2>
          <form action="#" name="popup-form" class="popup__form popup-avatar__form" novalidate>
            <input required name="link" type="url" placeholder="Ссылка на картинку" class="popup__input popup__input_link" id="link-input" />
            <span id="link-input-error"></span>
            <button type="submit" class="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
