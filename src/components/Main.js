import React from "react";
import { api } from "../utils/api";
import Card from "./Card";
import initialAvatar from "../images/profile-avatar.jpg";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  // переменная для запоминания пользователя, который что-то делает на страничке (а именно меня)
  // let currentUser = null;

  // функция установки информации о пользователе, например с сервера
  // function setupUser(user) {
  //   setUserName(user.name);
  //   setUserDescription(user.about);
  //   setUserAvatar(user.avatar);
  //   // currentUser = user;
  // }

  function setupCards(cards) {
    setCards(
      cards.map((item) => ({
        _id: item._id,
        link: item.link,
        name: item.name,
        owner: item.owner,
        likes: item.likes,
      }))
    );
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => (c._id === card._id ? newCard : c));

      // Обновляем стейт
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      // Обновляем стейт
      setCards(newCards);
    });
  }

  React.useEffect(() => {
    const promises = [api.getUserInfo(), api.getInitialCards()];

    Promise.all(promises)
      .then((results) => {
        // console.log(results);
        // setupUser(results[0]);
        setupCards(results[1]);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={onEditProfile}></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button aria-label="Добавить пост" type="button" className="profile__add-button" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((props) => (
            <Card
              key={props._id}
              _id={props._id}
              owner={props.owner}
              link={props.link}
              name={props.name}
              likes={props.likes}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
