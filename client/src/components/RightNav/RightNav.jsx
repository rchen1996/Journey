import { useLocation } from 'react-router-dom';
import ActivitiesRightNav from './ActivitiesRightNav';

export default function RightNav(props) {
  const url = useLocation().pathname;

  return <div>{url.includes('edit') && <ActivitiesRightNav />}</div>;
}
