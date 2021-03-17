export default function MyLocationsItem(props) {
  const { location } = props;

  return (
    <div>
      <img src={location.image} alt='attraction' />
      <h4 className='text-white'>{location.name}</h4>
      <p className='text-white'>{location.description}</p>
    </div>
  );
}
