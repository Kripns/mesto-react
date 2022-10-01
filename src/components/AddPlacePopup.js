import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose, onSubmit } = props;
  const [name, setName] =React.useState('');
  const [link, setLink] =React.useState('');

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, link })
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  return (
    <PopupWithForm
      name='card-adding'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      defaultButtonText='Создать'
    >
      <input
        className='popup__input popup__input_type_place-name'
        name={name}
        onChange={handleChangeName}
        value={`${name || ''}`}
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
        name={link}
        onChange={handleChangeLink}
        value={`${link || ''}`}
        id='picture-link-input'
        type='url'
        placeholder='Ссылка на картинку'
        required
      />
      <span className='popup__error picture-link-input-error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
