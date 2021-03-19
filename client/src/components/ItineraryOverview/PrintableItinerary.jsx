import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

export default function PrintableItinerary({ children }) {
  const linkToPrint = () => {
    return <button>Print Itinerary</button>;
  };

  const componentRef = useRef();

  return (
    <div ref={componentRef} className='flex flex-col w-full pt-16 lg:ml-64'>      
        <ReactToPrint
          trigger={linkToPrint}
          content={() => componentRef.current}
        />
        {children}
      
    </div>
  );
}
