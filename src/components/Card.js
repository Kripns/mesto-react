function Card(props) {
  return (
    <article className='place-card'>
      <img className='place-card__image' src={props.link} alt={props.name} />
      <div className='place-card__info'>
        <h2 className='place-card__heading'>{props.name}</h2>
        <button className='place-card__remove-icon' type='button' />
        <div className='place-card__likes-wrapper'>
          <button className='place-card__like' type='button' />
          <p className='place-card__like-counter'>{props.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;