const Card = (props) => {
  //header color
  //header bg
  //margin class  (1-5)
  let cardClass = "card";
  if (props.margin) {
    cardClass = `card mt-${props.margin}`;
  }

  return (
    <div className={cardClass}>
      <div className="card-header">{props.title} </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};
export default Card;
