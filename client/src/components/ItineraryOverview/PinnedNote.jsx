import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SET_ITINERARY } from '../../reducers/application';
import EditNoteForm from './EditNoteForm';

export default function PinnedNote(props) {
  const { note, deleteTripNote, itinerary, dispatch, editTripNote } = props;

  const url = useLocation().pathname;

  const DELETE = 'DELETE';
  const NOTE = 'NOTE';
  const EDIT = 'EDIT';
  const [view, setView] = useState(NOTE);

  const deleteNote = () => {
    deleteTripNote(itinerary.id, note.id).then(res => {
      dispatch({
        type: SET_ITINERARY,
        itinerary: { ...itinerary, ...res.data },
      });
    });
  };

  return (
    <div>
      {view === NOTE && (
        <div className='flex items-center py-2 '>
          <div
            key={note.id}
            className='flex items-center justify-between w-full space-x-2'
          >
            <div className='flex items-center space-x-3'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='thumbtack'
                className='self-start flex-shrink-0 w-5 h-5 mt-1'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
              >
                <path
                  fill='currentColor'
                  d='M298.028 214.267L285.793 96H328c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v48c0 13.255 10.745 24 24 24h42.207L85.972 214.267C37.465 236.82 0 277.261 0 328c0 13.255 10.745 24 24 24h136v104.007c0 1.242.289 2.467.845 3.578l24 48c2.941 5.882 11.364 5.893 14.311 0l24-48a8.008 8.008 0 0 0 .845-3.578V352h136c13.255 0 24-10.745 24-24-.001-51.183-37.983-91.42-85.973-113.733z'
                ></path>
              </svg>
              <p>{note.note}</p>
            </div>
            {url.includes('edit') && (
              <div className='flex items-center pr-2 space-x-3'>
                <button type='button' onClick={() => setView(EDIT)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5 duration-200 transform fill-current hover:text-teal-600 hover:scale-125'
                  >
                    <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                    <path
                      fillRule='evenodd'
                      d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
                <button type='button' onClick={() => setView(DELETE)}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='flex-shrink-0 w-5 h-5 duration-200 transform fill-current hover:text-red-600 hover:scale-125'
                  >
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {view === DELETE && (
        <div>
          <p>Are you sure you want to delete this note?</p>
          <button type='button' onClick={() => setView(NOTE)}>
            Cancel
          </button>
          <button type='button' onClick={deleteNote}>
            Delete
          </button>
        </div>
      )}
      {view === EDIT && (
        <EditNoteForm
          editTripNote={editTripNote}
          itinerary={itinerary}
          dispatch={dispatch}
          note={note}
          setView={setView}
          NOTE={NOTE}
        />
      )}
    </div>
  );
}
