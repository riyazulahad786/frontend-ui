import React from 'react'

function SubFooter() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between'>
            <div><h4>Dribble</h4></div>
            <div>
                <ul className='d-flex subfooter'>
                    <li className='mx-2'>For Designer</li>
                    <li  className='mx-2'>Hire talent</li>
                    <li  className='mx-2'>Inspiration</li>
                    <li  className='mx-2'>Advertising</li>
                    <li  className='mx-2'>Blog</li>
                    <li  className='mx-2'>About</li>
                    <li  className='mx-2'>Careers</li>
                    <li  className='mx-2'>Support</li>
                </ul>
            </div>
            <div className=' d-flex'>
            <i className="fa fa-twitter mx-1" aria-hidden="true"></i>
            <i className="fa fa-facebook-official mx-1" aria-hidden="true"></i>
            <i className="fa fa-instagram mx-1" aria-hidden="true"></i>
            <i className="fa fa-pinterest-p mx-1" aria-hidden="true"></i>

            </div>
        </div>
    </div>
  )
}

export default SubFooter