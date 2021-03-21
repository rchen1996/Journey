import { useState } from 'react';
import { SET_ITINERARY } from '../../reducers/application';

export default function EditNoteForm(props) {
  const { itinerary, dispatch, editTripNote, note, setView, NOTE } = props;
  const [noteText, setNoteText] = useState(note.note);

  const [translate, setTranslate] = useState(
    note.important ? 'transform translate-x-full bg-teal-600' : ''
  );
  const [important, setImportance] = useState(note.important);

  const handleImportance = event => {
    if (important) {
      setImportance(false);
      setTranslate('');
    } else {
      setImportance(true);
      setTranslate('transform translate-x-full bg-teal-600');
    }
  };

  const editNote = event => {
    event.preventDefault();

    if (note === '') {
      // error message that note cannot be blank
    } else {
      editTripNote(itinerary.id, note.id, noteText, important).then(res => {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...itinerary, ...res.data },
        });

        setView(NOTE);
      });
    }
  };

  const cancel = () => {
    setView(NOTE);
  };

  return (
    <form className='p-4 mb-2 bg-gray-100 rounded-xl' onSubmit={editNote}>
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
          value={noteText}
          name='note'
          onChange={event => setNoteText(event.target.value)}
          type='text'
          placeholder='Note'
          className='mb-4 border-gray-300 rounded-md appearance-none focus:ring-teal-600 focus:ring-1 focus:border-teal-600'
        />
      </div>
      <div className='space-x-2'>
        <button
          type='button'
          onClick={cancel}
          className='hover:underline hover:text-teal-600 focus:outline-none'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='w-24 px-1 py-2 font-semibold leading-none text-gray-200 bg-teal-600 border-2 border-transparent hover:text-teal-600 rounded-xl hover:border-teal-600 hover:bg-transparent focus:ring-teal-600 focus:ring-1'
        >
          Save
        </button>
      </div>
    </form>
  );
}
