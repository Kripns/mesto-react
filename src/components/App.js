import './App.css';

import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  
  
  return (
    <div className='App'>
      <Header />
      <Content
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input popup__input_type_name'
          name='name'
          id='user-name-input'
          type='text'
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='popup__error user-name-input-error'></span>
        <input
          className='popup__input popup__input_type_job'
          name='about'
          id='user-job-input'
          type='text'
          placeholder='О себе'
          minLength='2'
          maxLength='200'
          required
        />
        <span className='popup__error user-job-input-error'></span>
      </PopupWithForm>
      <PopupWithForm
        name='card-adding'
        title='Новое место'
        isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input popup__input_type_place-name'
          name='name'
          id='place-name-input'
          type='text'
          placeholder='Название'
          minLength='2'
          maxLength='30'
          required
        />
        <span className='popup__error place-name-input-error'></span>
        <input
          className='popup__input popup__input_type_url'
          name='link'
          id='picture-link-input'
          type='url'
          placeholder='Ссылка на картинку'
          required
        />
        <span className='popup__error picture-link-input-error'></span>
      </PopupWithForm>
      <PopupWithForm 
        name='edit-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
        onClose={closeAllPopups}
      >
        <input
          className='popup__input popup__input_type_url'
          name='avatar'
          id='avatar-link-input'
          type='url'
          placeholder='Ссылка на аватар'
          required
        />
        <span className='popup__error avatar-link-input-error'></span>
      </PopupWithForm>
      <PopupWithForm 
        name='type_delete'
        title='Вы уверены?'
        isOpen
        onClose={closeAllPopups}
      ></PopupWithForm>
      <ImagePopup />
      {/* <div className='popup popup_type_profile'>
        <div className='popup__container'>
          <button className='popup__close-icon' type='button'></button>
          <h2 className='popup__heading'>Редактировать профиль</h2>
          <form className='popup__form' name='edit-profile' novalidate>
            <input
              className='popup__input popup__input_type_name'
              name='name'
              id='user-name-input'
              type='text'
              placeholder='Имя'
              minlength='2'
              maxlength='40'
              required
            />
            <span className='popup__error user-name-input-error'></span>
            <input
              className='popup__input popup__input_type_job'
              name='about'
              id='user-job-input'
              type='text'
              placeholder='О себе'
              minlength='2'
              maxlength='200'
              required
            />
            <span className='popup__error user-job-input-error'></span>
            <button className='popup__button' type='submit'>
              Сохранить
            </button>
          </form>
        </div>
      </div> */}
      {/* <div className='popup popup_type_card-adding'>
        <div className='popup__container'>
          <button className='popup__close-icon' type='button'></button>
          <h2 className='popup__heading'>Новое место</h2>
          <form className='popup__form' name='add-card' novalidate>
            <input
              className='popup__input popup__input_type_place-name'
              name='name'
              id='place-name-input'
              type='text'
              placeholder='Название'
              minlength='2'
              maxlength='30'
              required
            />
            <span className='popup__error place-name-input-error'></span>
            <input
              className='popup__input popup__input_type_url'
              name='link'
              id='picture-link-input'
              type='url'
              placeholder='Ссылка на картинку'
              required
            />
            <span className='popup__error picture-link-input-error'></span>
            <button className='popup__button' type='submit'>
              Создать
            </button>
          </form>
        </div>
      </div> */}
      {/* <div className='popup popup_type_update-avatar'>
        <div className='popup__container'>
          <button className='popup__close-icon' type='button'></button>
          <h2 className='popup__heading'>Обновить аватар</h2>
          <form className='popup__form' name='update-avatar' novalidate>
            <input
              className='popup__input popup__input_type_url'
              name='avatar'
              id='avatar-link-input'
              type='url'
              placeholder='Ссылка на аватар'
              required
            />
            <span className='popup__error avatar-link-input-error'></span>
            <button className='popup__button' type='submit'>
              Сохранить
            </button>
          </form>
        </div>
      </div> */}

      {/* <div className='popup popup_type_delete'>
        <div className='popup__container'>
          <button className='popup__close-icon' type='button'></button>
          <h2 className='popup__heading'>Вы уверены?</h2>
          <button className='popup__button' type='button'>
            Да
          </button>
        </div>
      </div> */}
      {/* <template className='place-card-template'>
        <article className='place-card'>
          <img className='place-card__image' src='#' alt='' />
          <div className='place-card__info'>
            <h2 className='place-card__heading'></h2>
            <button className='place-card__remove-icon' type='button'></button>
            <div className='place-card__likes-wrapper'>
              <button className='place-card__like' type='button'></button>
              <p className='place-card__like-counter'></p>
            </div>
          </div>
        </article>
      </template> */}
    </div>
  );
}

export default App;
