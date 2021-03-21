import BookmarksItem from './BookmarksItem';

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
      <section className='grid gap-4 m-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-rows'>
        {parsedBookmarks}
      </section>
    </div>
  );
}
