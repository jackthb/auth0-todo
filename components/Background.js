import React, { useRef } from 'react';

export default function App({ children }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const gridBackground = useRef(null);
  if (gridBackground.current) {
    gridBackground.current.childNodes.forEach((item) => {
      const delay = getRandomInt(0, 5);
      const duration = getRandomInt(3, 6);
      item.style.animationDelay = `${delay}s`;
      item.style.animationDuration = `${duration}s`;
    });
  }
  return (
    <div className='relative min-h-screen bg-gray-200'>
      <div
        ref={gridBackground}
        className='grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-2'
      >
        {/* ROW1 */}
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-5 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-1 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-4 rounded animate-pulse'></div>
        {/* ROW2 */}
        <div className='bg-gray-100 col-span-5 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-3 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        {/* ROW3 */}
        <div className='bg-gray-100 col-span-4 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-7 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-1 rounded animate-pulse'></div>
        {/* ROW4 */}
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-4 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-6 rounded animate-pulse'></div>
        {/* ROW5 */}
        <div className='bg-gray-100 col-span-5 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-5 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        {/* ROW6 */}
        <div className='bg-gray-100 col-span-4 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-7 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-1 rounded animate-pulse'></div>
        {/* ROW2 */}
        <div className='bg-gray-100 col-span-5 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-3 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-2 rounded animate-pulse'></div>
        {/* ROW3 */}
        <div className='bg-gray-100 col-span-4 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-7 rounded animate-pulse'></div>
        <div className='bg-gray-100 col-span-1 rounded animate-pulse'></div>
      </div>
      <div className='relative'>{children}</div>
    </div>
  );
}
