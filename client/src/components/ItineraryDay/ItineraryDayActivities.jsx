export default function ItineraryDayActivities(props) {
  const { activity } = props;

  const tConvert = (time) => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    let timeArr = [];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours

      for (let i = 0; i < time.length; i++) {
        if (i !== 3) {
          timeArr.push(time[i]);
        }
      }
    }

    return timeArr.join(''); // return adjusted time or original string
  };

  let startTime;
  let endTime;
  let duration;

  if (activity.start_time && activity.end_time) {
    startTime = tConvert(activity.start_time);
    endTime = tConvert(activity.end_time);

    const endDateTime = new Date('1970-01-01T' + activity.end_time + 'Z');
    const startDateTime = new Date('1970-01-01T' + activity.start_time + 'Z');

    if (endDateTime < startDateTime) {
      endDateTime.setDate(endDateTime.getDate() + 1);
    }

    duration = (endDateTime - startDateTime) / 1000 / 60 / 60;
  }

  return (
    <article className='flex justify-between w-full h-auto p-4 transition duration-300 transform bg-gray-100 shadow-lg rounded-xl hover:scale-105'>
      <div className='flex justify-between w-full space-x-4'>
        <div className='flex space-x-2 w-min whitespace-nowrap'>
          <div className='flex flex-col items-center justify-between w-12 py-1.5'>
            <p className='text-xs'>{startTime}</p>
            {duration &&
              (duration < 1 ? (
                <p className='text-xs'>{duration * 60} MIN</p>
              ) : (
                <p className='text-xs font-bold'>{duration} HR</p>
              ))}
            <p className='text-xs'>{endTime}</p>
          </div>
          <hr />
          <figure className='hidden w-48 h-full xl:block aspect-w-3 aspect-w-2'>
            <img
              src={activity.image}
              alt='activity'
              className='object-cover rounded-md shadow-lg'
            />
          </figure>
        </div>
        <div className='flex flex-col space-y-1'>
          <h4 className='text-2xl font-bold'>{activity.name}</h4>
          <p className='px-2 py-1 text-sm font-bold text-gray-100 bg-teal-600 border-l-4 border-gray-700 whitespace-wrap lg:w-min rounded-r-xl lg:whitespace-nowrap'>
            {activity.address}
          </p>
          {/* <p className='text-sm'>{activity.description}</p> */}
          <p className='text-sm line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi
            hic quibusdam explicabo distinctio, inventore maxime eius quo?
            Facilis nostrum amet cum necessitatibus vel et autem est esse dolore
            sit.
          </p>
        </div>
        <div className='flex pt-2 space-x-3'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 17 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='duration-200 transform fill-current hover:text-teal-600 hover:scale-125'
          >
            <path d='M14.2398 2.0688C13.9331 1.76885 13.5172 1.60034 13.0835 1.60034C12.6499 1.60034 12.234 1.76885 11.9273 2.0688L5.72412 8.1376V10.4H8.03661L14.2398 4.3312C14.5464 4.03116 14.7186 3.62426 14.7186 3.2C14.7186 2.77574 14.5464 2.36884 14.2398 2.0688Z' />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M1.63525 4.79995C1.63525 4.3756 1.80756 3.96864 2.11426 3.66858C2.42096 3.36852 2.83694 3.19995 3.27068 3.19995H6.54153C6.7584 3.19995 6.96639 3.28424 7.11974 3.43427C7.27309 3.5843 7.35924 3.78778 7.35924 3.99995C7.35924 4.21212 7.27309 4.41561 7.11974 4.56564C6.96639 4.71567 6.7584 4.79995 6.54153 4.79995H3.27068V12.8H11.4478V9.59995C11.4478 9.38778 11.534 9.1843 11.6873 9.03427C11.8407 8.88424 12.0486 8.79995 12.2655 8.79995C12.4824 8.79995 12.6904 8.88424 12.8437 9.03427C12.9971 9.1843 13.0832 9.38778 13.0832 9.59995V12.8C13.0832 13.2243 12.9109 13.6313 12.6042 13.9313C12.2975 14.2314 11.8815 14.4 11.4478 14.4H3.27068C2.83694 14.4 2.42096 14.2314 2.11426 13.9313C1.80756 13.6313 1.63525 13.2243 1.63525 12.8V4.79995Z'
            />
          </svg>
          <svg
            width='20'
            height='20'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='duration-200 transform fill-current hover:text-red-600 hover:scale-125'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M7.1999 1.59998C7.05137 1.60005 6.9058 1.64148 6.77948 1.71962C6.65317 1.79775 6.5511 1.90951 6.4847 2.04238L5.9055 3.19998H3.1999C2.98773 3.19998 2.78425 3.28426 2.63422 3.43429C2.48419 3.58432 2.3999 3.7878 2.3999 3.99998C2.3999 4.21215 2.48419 4.41563 2.63422 4.56566C2.78425 4.71569 2.98773 4.79998 3.1999 4.79998V12.8C3.1999 13.2243 3.36847 13.6313 3.66853 13.9313C3.96859 14.2314 4.37556 14.4 4.7999 14.4H11.1999C11.6242 14.4 12.0312 14.2314 12.3313 13.9313C12.6313 13.6313 12.7999 13.2243 12.7999 12.8V4.79998C13.0121 4.79998 13.2156 4.71569 13.3656 4.56566C13.5156 4.41563 13.5999 4.21215 13.5999 3.99998C13.5999 3.7878 13.5156 3.58432 13.3656 3.43429C13.2156 3.28426 13.0121 3.19998 12.7999 3.19998H10.0943L9.5151 2.04238C9.44871 1.90951 9.34664 1.79775 9.22032 1.71962C9.09401 1.64148 8.94843 1.60005 8.7999 1.59998H7.1999ZM5.5999 6.39998C5.5999 6.1878 5.68419 5.98432 5.83422 5.83429C5.98425 5.68426 6.18773 5.59998 6.3999 5.59998C6.61208 5.59998 6.81556 5.68426 6.96559 5.83429C7.11562 5.98432 7.1999 6.1878 7.1999 6.39998V11.2C7.1999 11.4121 7.11562 11.6156 6.96559 11.7657C6.81556 11.9157 6.61208 12 6.3999 12C6.18773 12 5.98425 11.9157 5.83422 11.7657C5.68419 11.6156 5.5999 11.4121 5.5999 11.2V6.39998ZM9.5999 5.59998C9.38773 5.59998 9.18425 5.68426 9.03422 5.83429C8.88419 5.98432 8.7999 6.1878 8.7999 6.39998V11.2C8.7999 11.4121 8.88419 11.6156 9.03422 11.7657C9.18425 11.9157 9.38773 12 9.5999 12C9.81208 12 10.0156 11.9157 10.1656 11.7657C10.3156 11.6156 10.3999 11.4121 10.3999 11.2V6.39998C10.3999 6.1878 10.3156 5.98432 10.1656 5.83429C10.0156 5.68426 9.81208 5.59998 9.5999 5.59998Z'
            />
          </svg>
        </div>
      </div>
    </article>
  );
}
