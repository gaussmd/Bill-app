import React from 'react'

const Dates = ({billNumber,billDate,dueDate}) => {
  return (
    <>
        <article className='mt-5 
      flex items-end justify-end'>
        <ul>
          <li className='p-1'><span className='font-bold'>Bill Number:</span>{billNumber}</li>
          <li className='bg-gray-100'>
            <span className='font-bold'>Bill Date:</span>{billDate}</li>
          <li className='p-1'><span className='font-bold'>Due date:</span>{dueDate}</li>
        </ul>
      </article>
    
    </>
  )
}

export default Dates