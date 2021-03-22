import BookmarksItem from './BookmarksItem';
import { Link } from 'react-router-dom';

export default function Bookmarks(props) {
  const parsedBookmarks = props.bookmarks.map(bookmark => (
    <BookmarksItem
      key={bookmark.id}
      bookmark={bookmark}
      user={props.user}
      deleteBookmark={props.deleteBookmark}
      dispatch={props.dispatch}
    />
  ));
  return (
    <div className='flex flex-col w-full pt-16'>
      <div className='pl-3 mt-8 border-l-8 border-teal-600 ml-9'>
        <h1 className='text-3xl font-bold'>Bookmarks</h1>
        <h2 className='text-lg text-gray-500'>
          Your travel insiprations and dream trips you have saved.
        </h2>
      </div>
      {parsedBookmarks.length === 0 && (
        <div className='flex items-center p-4 mx-12 mt-8 text-gray-100 bg-gray-600 rounded-xl bg-opacity-80 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='self-start flex-shrink-0 w-5 h-5 mt-0.5 mr-2'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
              clipRule='evenodd'
            />
          </svg>
          <h3>
            You have no bookmarked itineraries. Check out the{' '}
            <Link to='/itineraries' className='underline hover:text-gray-200'>
              explore
            </Link>{' '}
            page to find a trip!
          </h3>
        </div>
      )}
      <section className='grid gap-4 m-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-rows'>
        {parsedBookmarks}
      </section>
    </div>
  );
}
