import React from 'react'

function UserCount(props) {
  return (
    <div className='p-10 text-center'>
        <h1 className="text-4xl">Count : {props.UserCount}</h1>
    </div>
  )
}

export default UserCount