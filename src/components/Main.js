import React from "react";
import { api } from "../utils/api";

function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(promises)
      .then((results) => {
        // console.log(results);
        setupUser(results[0]);
        // setupCards(results[1]);

        // добавление слушателей на кнопки после получения информации о пользователе и карточках с сервера
        // editButton.addEventListener("click", openPopupEdit);
        // addButton.addEventListener("click", openPopupAdd);
        // profileAvatar.addEventListener("click", openPopupAvatar);
      })
      .catch((err) => console.log(`Error ${err}`));

    // переменная для запоминания пользователя, который что-то делает на страничке (а именно меня)
    let currentUser = null;

    // функция установки информации о пользователе, например с сервера
    function setupUser(user) {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      currentUser = user;
    }
  });

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button aria-label="Добавить пост" type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
