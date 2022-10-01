function PopupWithForm(props) {
  const { name, title, isOpen, onClose, onSubmit, defaultButtonText } = props;
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpen && 'popup_opened'
      }`}
    >
      <div className='popup__container'>
        <button
          className='popup__close-icon'
          type='button'
          onClick={onClose}
        />
        <h2 className='popup__heading'>{title}</h2>
        <form
          className='popup__form'
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {props.children}
          <button className='popup__button' type='submit'>
            {defaultButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
