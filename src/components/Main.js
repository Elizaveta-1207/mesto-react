import React from "react";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector(".popup-avatar").classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    document.querySelector(".popup-edit").classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    document.querySelector(".popup-add").classList.add("popup_opened");
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
          <p className="profile__description"></p>
        </div>
        <button aria-label="Добавить пост" type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
