// import './Content.css';

import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Content(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUser()
      .then(user => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then(cardList => setCards(cardList))
      .catch(err => console.log(err));
  }, []);

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
            />
          </div>
          <p className='profile__subheading'>{userDescription}</p>
        </div>
        <button
          className='add-card-button'
          type='button'
          onClick={props.onAddPlace}
        />
      </section>
      <section className='places'>
        {cards.map(item => {
          return (
            <Card
              key={item._id}
              _id={item._id}
              name={item.name}
              link={item.link}
              likes={item.likes}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Content;
