import { useState } from 'react';
import { SET_ITINERARY } from '../../reducers/application';
import AlertMessage from '../AlertMessage';

export default function AddNoteForm(props) {
  const { addTripNote, itinerary, dispatch, setAddView, DEFAULT } = props;
  const [note, setNote] = useState('');
  const [error, setError] = useState({
    staus: false,
    message: '',
    show: 'flex p-3 mb-4 bg-red-700 bg-opacity-50 rounded-xl',
    hide: 'hidden',
  });

  const [translate, setTranslate] = useState('');
  const [important, setImportance] = useState(false);

  const handleImportance = event => {
    if (important) {
      setImportance(false);
      setTranslate('');
    } else {
      setImportance(true);
      setTranslate('transform translate-x-full bg-teal-600');
    }
  };

  const addNote = event => {
    event.preventDefault();

    if (note === '') {
      setError(prev => {
        return {
          ...prev,
          status: true,
          message: 'The note can not be blank',
        };
      });
    } else {
      addTripNote(itinerary.id, note, important).then(res => {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...itinerary, ...res.data },
        });

        setNote('');
        setImportance(false);
        setAddView(DEFAULT);
        setError(prev => {
          return {
            ...prev,
            status: false,
            message: '',
          };
        });
      });
    }
  };

  return (
    <>
      <AlertMessage
        isError={error.status}
        show={error.show}
        message={error.message}
        hide={error.hide}
      ></AlertMessage>
      <form
        className='p-4 mb-4 bg-gray-100 shadow-md rounded-xl'
        onSubmit={addNote}
      >
        <div className='flex flex-col pb-3'>
          <label className='font-semibold'>
            {important ? 'Pinned' : 'Not Pinned'}
          </label>
          <label htmlFor='important' className='flex p-2 -mt-1 cursor-pointer'>
            <div className='relative'>
              <input
                type='checkbox'
                className='hidden'
                id='important'
                name='important'
                value={important}
                checked={important}
                onChange={handleImportance}
              />
              <div className='w-10 h-4 bg-gray-400 rounded-full shadow-inner toggle__line'></div>
              <div
                className={`-mt-1 -ml-1 transition-all duration-300 ease-in-out absolute w-6 h-6 bg-gray-300 rounded-full shadow inset-y-0 left-0 ${translate}`}
              ></div>
            </div>
          </label>
        </div>
        <div className='flex flex-col'>
          <label htmlFor='note' className='font-semibold'>
            Note
          </label>
          <textarea
            value={note}
            name='note'
            onChange={event => setNote(event.target.value)}
            type='text'
            placeholder='Note'
            className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
          />
        </div>
        <button
          type='submit'
          className='w-full px-4 py-3 font-semibold leading-none text-gray-200 bg-teal-600 border-2 border-transparent sm:w-48 hover:text-teal-600 rounded-xl hover:border-teal-600 hover:bg-transparent focus:ring-teal-600 focus:ring-1'
        >
          Add Note
        </button>
      </form>
    </>
  );
}
