import { useState } from 'react';
import { SET_ITINERARY } from '../../reducers/application';
import FormButton from '../FormButton';

export default function AddNoteForm(props) {
  const { addTripNote, itinerary, dispatch, setAddView, DEFAULT } = props;
  const [note, setNote] = useState('');

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
      // add error display for cannot have blank note
    } else {
      addTripNote(itinerary.id, note, important).then(res => {
        dispatch({
          type: SET_ITINERARY,
          itinerary: { ...itinerary, ...res.data },
        });

        setNote('');
        setImportance(false);
        setAddView(DEFAULT);
      });
    }
  };

  return (
    <form onSubmit={addNote}>
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
      <label className='font-semibold'>
        {important ? 'Pinned' : 'Not Pinned'}
      </label>
      <label htmlFor='important' className='flex p-2 ml-1 -mt-1 cursor-pointer'>
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
      <FormButton type='submit'>Add Note</FormButton>
    </form>
  );
}
