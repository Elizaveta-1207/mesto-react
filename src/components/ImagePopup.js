import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup-img" id="popup-image">
      <div className="popup__img-container">
        <button aria-label="Закрыть картинку" type="button" className="popup__close-button"></button>
        <img src="./images/element-baikal.jpg" alt="Картинка места" className="popup__full-img" />
        <h2 className="popup__title-img">Байкал</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
