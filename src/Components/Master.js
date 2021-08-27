import React from 'react'
import Header from './Header'
import Main from './main/Main'
import Side from './side/Side'

const Master = () => {
  return (
    <div className="base_container-master">
      <Header/>
      <Main/>
      <Side/>
    </div>
  )
}

export default Master
