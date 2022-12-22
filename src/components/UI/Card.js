const Card = (props) => {
  //header color
  //header bg
  //margin class  (1-5)
  let cardClass = "card";
  if (props.margin) {
    cardClass = `card mt-${props.margin}`;
  }

  let className = "card-header";
  if (props.bg) className = `${className} bg-${props.bg}`;
  if (props.color) className = `${className} text-${props.color}`;
  return (
    <div className={cardClass}>
      <div className={className}>{props.title} </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};
export default Card;
