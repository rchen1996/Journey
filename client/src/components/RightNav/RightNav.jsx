import { useLocation } from 'react-router-dom';
import ActivitiesRightNav from './ActivitiesRightNav';

export default function RightNav(props) {
  const { itinerary, isRightNavOpen } = props;

  const url = useLocation().pathname;

  return (
    <nav className={isRightNavOpen ? '' : 'hidden'}>
      {url.includes('edit') && <ActivitiesRightNav itinerary={itinerary} />}
    </nav>
  );
}
