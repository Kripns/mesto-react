// import './Content.css';

function Content(props) {
  return (
    <main className='content'>
      <section className='profile'>
        <button className='profile__avatar' type='button' onClick={props.onEditAvatar}></button>
        <div className='profile__info'>
          <div className='profile__name-card'>
            <h1 className='profile__heading'>asdfas asdasdf</h1>
            <button className='edit-button' type='button' onClick={props.onEditProfile}></button>
          </div>
          <p className='profile__subheading'>adsads sasdff</p>
        </div>
        <button className='add-card-button' type='button' onClick={props.onAddPlace}></button>
      </section>
      <section className='places'></section>
    </main>
  );
}

export default Content;
