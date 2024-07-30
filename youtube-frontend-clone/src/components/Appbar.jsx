import React from 'react'
import Searchbar from './Searchbar'

function Appbar() {
  return (
    <div className='flex justify-between'>
        <div>Youtube</div>
        <Searchbar />
        <div>Sign in</div>
    </div>
  )
}

export default Appbar