import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditPropfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      defaultButtonText='Сохранить'
    >
      <input
        className='popup__input popup__input_type_name'
        name='name'
        id='user-name-input'
        type='text'
        onChange={handleChangeName}
        value={`${name || ''}`}
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
        onChange={handleChangeDescription}
        value={`${description || ''}`}
        placeholder='О себе'
        minLength='2'
        maxLength='200'
        required
      />
      <span className='popup__error user-job-input-error'></span>
    </PopupWithForm>
  );
}

export default EditPropfilePopup;
