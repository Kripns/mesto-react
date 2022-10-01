import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => currentUser._id === i._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then(updatedCard => {
        setCards(state =>
          state.map(c => (c._id === card._id ? updatedCard : c))
        );
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards(state => state.filter(item => item._id !== card._id));
    });
  }

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
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        />
        <div className='profile__info'>
          <div className='profile__name-card'>
            <h1 className='profile__heading'>{currentUser.name}</h1>
            <button
              className='edit-button'
              type='button'
              onClick={props.onEditProfile}
            />
          </div>
          <p className='profile__subheading'>{currentUser.about}</p>
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
              card={item}
              onCardClick={props.onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
