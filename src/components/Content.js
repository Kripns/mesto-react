// import './Content.css';

import React from 'react';
import api from '../utils/Api';

function Content(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  const getUser = api.getUser();
  const getCards = api.getCards();

  React.useEffect(() => {
    Promise.all([getUser, getCards])
      .then(([user, cardsList]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards([...cards, cardsList]);
        // console.log(cardsList);
      })
      .catch(err => console.log(err));

    
  }, []) 

  return (
    <main className='content'>
      <section className='profile'>
        <button
          className='profile__avatar'
          type='button'
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        />
        <div className='profile__info'>
          <div className='profile__name-card'>
            <h1 className='profile__heading'>{userName}</h1>
            <button
              className='edit-button'
              type='button'
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className='profile__subheading'>{userDescription}</p>
        </div>
        <button
          className='add-card-button'
          type='button'
          onClick={props.onAddPlace}
        />
      </section>
      <section className='places'></section>
    </main>
  );
}

export default Content;
