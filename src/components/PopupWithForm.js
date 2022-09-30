function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className='popup__container'>
        <button
          className='popup__close-icon'
          type='button'
          onClick={props.onClose}
        />
        <h2 className='popup__heading'>{`${props.title}`}</h2>
        <form className='popup__form' name={`${props.name}`} onSubmit={props.onSubmit} noValidate>
          {props.children}
          <button className='popup__button' type='submit'>
            {props.defaultButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
