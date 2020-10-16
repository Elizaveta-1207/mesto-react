class Api {
  constructor(options) {
    this._token = options.baseUrl;
    this._authorization = options.headers.authorization;
    this._contentType = options.headers["Content-type"];
  }

  getInitialCards() {
    return fetch(`${this._token}/cards`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  addNewCard({ name, link }) {
    return fetch(`${this._token}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._token}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._token}/cards/likes/${cardId}`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._token}/users/me`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  editProfile({ name, about }) {
    return fetch(`${this._token}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  editAvatar({ avatar }) {
    return fetch(`${this._token}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": this._contentType,
      },
      body: JSON.stringify({
        avatar: `${avatar}`,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

// экземпляра класса Api
export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-15",
  headers: {
    authorization: "36046fe7-1e8e-4a22-8e60-7f2eb2d5b2d8",
    "Content-type": "application/json",
  },
});
