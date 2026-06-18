import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
        <section className='m-4'>
            <h1 className='my-4'>Page Error | 404</h1>
            <div className='bg-red-300 w-fit p-2 rounded'>
                <Link to='/'>Go Home</Link>
            </div>
        </section>
    </>
  )
}

export default PageNotFound
