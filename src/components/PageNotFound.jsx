import React from 'react'
import { Link } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop';

const PageNotFound = () => {
  useScrollToTop();

  return (
    <>
      <section className='m-4 text-white'>
        <h1 className='my-4'>Page Error | 404</h1>
        <div className='text-white w-fit p-2 rounded'>
          Home page
          <Link to='/'>Go Home</Link>
        </div>
      </section>
    </>
  )
}

export default PageNotFound
