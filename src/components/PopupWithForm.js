// import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <div className='popup__container'>
        <button className='popup__close-icon' type='button' onClick={props.onClose}></button>
        <h2 className='popup__heading'>{`${props.title}`}</h2>
        <form className='popup__form' name={`${props.name}`} novalidate>
          {props.children}
          <button className='popup__button' type='submit'>
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;