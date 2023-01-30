export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`animals/${props.type}.svg`}></img>
      <h2 className="name">{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
