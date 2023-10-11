import React from 'react'

function SubFooter() {
  return (
    // <div className='container'>
    //     <div className='d-flex justify-content-between'>
    //         <div><h4>Dribble</h4></div>
    //         <div>
    //             <ul className='d-flex subfooter'>
    //                 <li className='mx-2'>For Designer</li>
    //                 <li  className='mx-2'>Hire talent</li>
    //                 <li  className='mx-2'>Inspiration</li>
    //                 <li  className='mx-2'>Advertising</li>
    //                 <li  className='mx-2'>Blog</li>
    //                 <li  className='mx-2'>About</li>
    //                 <li  className='mx-2'>Careers</li>
    //                 <li  className='mx-2'>Support</li>
    //             </ul>
    //         </div>
    //         <div className=' d-flex'>
    //         <i className="fa fa-twitter mx-1" aria-hidden="true"></i>
    //         <i className="fa fa-facebook-official mx-1" aria-hidden="true"></i>
    //         <i className="fa fa-instagram mx-1" aria-hidden="true"></i>
    //         <i className="fa fa-pinterest-p mx-1" aria-hidden="true"></i>

    //         </div>
    //     </div>
    // </div>
    <div class="container">
        <div class="d-flex justify-content-between">
            <div><h4>Dribble</h4></div>
            <div className='hidden'>
                <ul class="d-flex subfooter">
                    <li class="mx-2">For Designer</li>
                    <li class="mx-2">Hire talent</li>
                    <li class="mx-2">Inspiration</li>
                    <li class="mx-2">Advertising</li>
                    <li class="mx-2">Blog</li>
                    <li class="mx-2">About</li>
                    <li class="mx-2">Careers</li>
                    <li class="mx-2">Support</li>
                </ul>
            </div>
            <div class="d-flex">
                <i class="fa fa-twitter mx-1" aria-hidden="true"></i>
                <i class="fa fa-facebook-official mx-1" aria-hidden="true"></i>
                <i class="fa fa-instagram mx-1" aria-hidden="true"></i>
                <i class="fa fa-pinterest-p mx-1" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  )
}

export default SubFooter