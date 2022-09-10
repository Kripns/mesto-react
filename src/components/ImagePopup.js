// import './ImagePopup.css';

function ImagePopup() {
  return (
    <div className='popup popup_type_image'>
      <div className='popup__image-container'>
        <button className='popup__close-icon' type='button'></button>
        <img className='popup__fullsize-image' src='#' alt='' />
        <p className='popup__subheading'></p>
      </div>
    </div>
  );
}

export default ImagePopup;