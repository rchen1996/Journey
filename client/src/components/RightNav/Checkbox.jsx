export default function Checkbox(props) {
  const { name, category, handleCategoryChange } = props;
  const lowerCaseName = name.toLowerCase();

  return (
    <div>
      <input
        type='checkbox'
        id={lowerCaseName}
        name={lowerCaseName}
        value={lowerCaseName}
        checked={category[lowerCaseName]}
        onChange={event => handleCategoryChange(event)}
        className='mr-2 text-teal-600 border-gray-300 rounded focus:ring-teal-500 ring-offset-0'
      />
      <label htmlFor={lowerCaseName} className='text-gray-100'>
        {name}
      </label>
    </div>
  );
}
