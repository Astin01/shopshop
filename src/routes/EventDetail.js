import "../css/App.css";
export default function EventDetail({ image, title }) {
  return (
    <div>
      <img src={image} className="event"></img>
      <h4>{title}</h4>
    </div>
  );
}
