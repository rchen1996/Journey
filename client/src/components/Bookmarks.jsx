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
    <div className='flex flex-col w-full'>
      <h1 className='pl-4 mt-8 ml-10 text-2xl font-bold border-l-8 border-teal-600'>
        My Bookmarks
      </h1>
      <section className='grid gap-4 m-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-rows'>
        {parsedBookmarks}
      </section>
    </div>
  );
}
