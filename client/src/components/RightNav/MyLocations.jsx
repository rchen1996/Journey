import MyLocationsItem from './MyLocationsItem';

export default function MyLocations(props) {
  const { itinerary } = props;

  const myLocations = itinerary.my_locations;

  const parsedMyLocations = myLocations.map(location => {
    return <MyLocationsItem key={location.id} location={location} />;
  });

  return <div>{parsedMyLocations}</div>;
}
