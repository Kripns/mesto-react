import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUser(), api.getCards()])
      .then(([user, cardList]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cardList);
      })
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
            <Card key={item._id} card={item} onCardClick={props.onCardClick} />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
