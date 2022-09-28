import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = currentUser._id === props.card.owner._id;
  const cardRemoveIconClassName = `place-card__remove-icon ${!isOwn ? 'place-card__remove-icon_hidden' : null}`;
  

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className='place-card'>
      <img
        className='place-card__image'
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className='place-card__info'>
        <h2 className='place-card__heading'>{props.card.name}</h2>
        <button className={cardRemoveIconClassName} type='button' />
        <div className='place-card__likes-wrapper'>
          <button className='place-card__like' type='button' />
          <p className='place-card__like-counter'>{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
