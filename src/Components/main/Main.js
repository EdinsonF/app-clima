import React from 'react'


import SectionCenter from './SectionCenter';
import SectionLeft from './SectionLeft';
import SectionRight from './SectionRight';


function Main() {
  return (
    <div className="main_container">
        
        <SectionLeft/>
        
        <SectionCenter/>

        <SectionRight/>
    </div>
  )
}

export default Main
