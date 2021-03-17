import { useLocation } from 'react-router-dom';
import ActivitiesRightNav from './ActivitiesRightNav';

export default function RightNav(props) {
  const { itinerary, isRightNavOpen } = props;

  const url = useLocation().pathname;

  return (
    <nav
      className={
        isRightNavOpen
          ? 'fixed -right-0 bg-gray-600 z-40 w-full h-full px-4 py-4 pb-24 space-y-2 overflow-y-scroll mt-16 text-gray-100 divide-y divide-gray-100 lg:w-64 md:w-full no-scrollbar lg:block divide-opacity-50'
          : 'hidden'
      }
    >
      {url.includes('edit') && <ActivitiesRightNav itinerary={itinerary} />}
    </nav>
  );
}
