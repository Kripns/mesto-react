import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditPropfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  //Переменные состояния
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({})

  //Обработчики открытия и закрытия попапов
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleUpdateUser(data) {
    api.editProfile(data)
      .then(updatedUser => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar(url) {
    api.updateAvatar(url)
      .then(updatedUser => {
        setCurrentUser(updatedUser);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    api.getUser()
      .then(userInfo => setCurrentUser(userInfo))
      .catch(err => console.log(err));
  }, [])


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditPropfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup  
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <PopupWithForm
          name='card-adding'
          title='Новое место'
          isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
          onClose={closeAllPopups}
          defaultButtonText='Создать'
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
        
        {/* <PopupWithForm 
          name='type_delete'
          title='Вы уверены?'
          isOpen
          onClose={closeAllPopups}
          defaultButtonText='Да'
        ></PopupWithForm> */}
        <ImagePopup
          name='image'
          isOpen={isImagePopupOpen ? 'popup_opened' : ''}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
