export default function ItineraryListItem(props) {
  const { name, description, image } = props.itinerary;
  return (
    <div>
      <img src={image} alt="itinerary cover" />
      <h4>{name}</h4>
      <p>{description}</p>
      {/* bookmark button */}
    </div>
  );
}
