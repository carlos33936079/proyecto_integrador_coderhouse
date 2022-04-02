import React from 'react'
import Browser from './Browser'
import Category from './Category'

function BrowserCartegoryContainer() {

  return (
    <div className='browserCategory_container'>
        <div className='browserCategory_browser'>
            <Browser/>
        </div>
        <div className='browserCategory_category'>
           <Category/>  
        </div>
    </div>
  )
}

export default BrowserCartegoryContainer