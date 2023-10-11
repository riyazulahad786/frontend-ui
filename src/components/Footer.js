import React from 'react'

function Footer() {
  return (
    <div className='container py-3'>
    <div className='row'>
       <div className='col '>
       <ul className='d-flex footer '>
        <li className='mx-1'>&#169; 2023 Dribble</li>
        <li className='mx-1'>Terms</li>
        <li className='mx-1'>Privacy</li>
        <li className='mx-1'>Cookies</li>
       </ul>
       </div>
       <div className='col  d-flex justify-content-end footer-zx'>
       <ul className='d-flex  footer'>
       <li className='mx-1'>Jobs</li>
        <li className='mx-1'>Designer</li>
        <li className='mx-1'>Freelancers</li>
        <li className='mx-1'>Tags</li>
        <li className='mx-1'>Places</li>
        <li className='mx-1'>Resources</li>
       </ul>

       </div>
    </div>
 </div>
  )
}

export default Footer