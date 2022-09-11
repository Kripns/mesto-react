function ImagePopup(props) {
  return (
    <div className={`popup popup_type_${props.card.name} ${props.isOpen}`}>
      <div className='popup__image-container'>
        <button
          className='popup__close-icon'
          type='button'
          onClick={props.onClose}
        />
        <img
          className='popup__fullsize-image'
          src={props.card.link}
          alt={props.card.name}
        />
        <p className='popup__subheading'>{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
