export default function Checkbox(props) {
  const { name, category, handleCategoryChange } = props;
  return (
    <div>
      <input
        type='checkbox'
        id={name}
        name={name}
        value={name}
        checked={category[name]}
        onChange={event => handleCategoryChange(event)}
        className='mr-2 text-teal-600 border-gray-300 rounded focus:ring-teal-500 ring-offset-0'
      />
      <label htmlFor={name} className='text-gray-100'>
        {name}
      </label>
    </div>
  );
}
