import React from 'react'

export default function NoResultDiv() {
  return (
    <div className='flex flex-col p-10 gap-1 justify-center align-center items-center'>
        <img src="icons/no-result.svg" alt="No Results Found" className='icon w-60 max-w-full' />
        <h3>Something Went Wrong...</h3>
        <p>We're unabble to retrieve the weather details.</p>
        <p>Ensure you've entered a valid city or try again later.</p>
    </div>
  )
}
