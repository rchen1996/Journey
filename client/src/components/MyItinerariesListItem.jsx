export default function MyItinerariesListItem(props) {
  const { name, description, image } = props.itinerary;
  return (
    <div>
      <img src={image} alt="itinerary cover" />
      <h4>{name}</h4>
      <p>{description}</p>
      {/* add edit and delete buttons */}
    </div>
  );
}
