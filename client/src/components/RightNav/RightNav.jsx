import { useLocation } from 'react-router-dom';
import ActivitiesRightNav from './ActivitiesRightNav';

export default function RightNav(props) {
  const { itinerary } = props;

  const url = useLocation().pathname;

  return (
    <nav className=''>
      {url.includes('edit') && <ActivitiesRightNav itinerary={itinerary} />}
    </nav>
  );
}
