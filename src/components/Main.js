import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(promises)
      .then((results) => {
        // console.log(results);
        setupUser(results[0]);
        setupCards(results[1]);
      })
      .catch((err) => console.log(`Error ${err}`));

    // переменная для запоминания пользователя, который что-то делает на страничке (а именно меня)
    // let currentUser = null;

    // функция установки информации о пользователе, например с сервера
    function setupUser(user) {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
      // currentUser = user;
    }

    function setupCards(cards) {
      setCards(
        cards.map((item) => ({
          id: item._id,
          link: item.link,
          name: item.name,
          owner: item.owner,
          likes: item.likes,
        }))
      );
    }
  }, []);

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
        <ul className="elements__list">
          {cards.map((props) => (
            <Card key={props.id} link={props.link} name={props.name} likes={props.likes} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
