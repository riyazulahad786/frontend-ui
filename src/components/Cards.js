import React from 'react'

function Cards() {
  return (
    // <div className='container'>
    //      <div className='row'>
    //         <div className='col'>
    //            <img src='/assets/card7.webp'/>
    //         </div>
    //         <div className='col'>
    //            <img src='/assets/img1.png'/>
    //         </div>
    //         <div className='col'>
    //            <img src='/assets/dribble.png'/>
    //         </div>
            
    //      </div>
    //      <div className='row'>
    //         <div className='col'>
    //            <img src='/assets/img1.png'/>
    //         </div>
    //         <div className='col'>
    //            <img src='/assets/img1.png'/>
    //         </div>
    //         <div className='col'>
    //            <img src='/assets/img1.png'/>
    //         </div>
            
    //      </div>
    // </div>

    // <div className="container">
    //     <div className="row card-margin">
    //         <div className="col-md-4">
    //             <img className='card-border' src="/assets/img1.png" className="img-fluid" alt="Image 1"/>
    //         </div>
    //         <div className="col-md-4">
    //             <img  className='card-border' src="/assets/img1.png" className="img-fluid" alt="Image 2"/>
    //         </div>
    //         <div className="col-md-4">
    //             <img  className='card-border' src="/assets/img1.png" className="img-fluid" alt="Image 3"/>
    //         </div>
    //     </div>
    //     <div className="row card-margin">
    //         <div className="col-md-4">
    //             <img className='card-border' src="/assets/img1.png" className="img-fluid" alt="Image 4"/>
    //         </div>
    //         <div className="col-md-4">
    //             <img className='card-border' src="/assets/img1.png" className="img-fluid" alt="Image 5"/>
    //         </div>
    //         <div className="col-md-4">
    //             <img className='card-border' src="/assets/img1.png" className="img-fluid" alt="Image 6"/>
    //         </div>
    //     </div>
    // </div>
    <div className="container">
    <hr/>
    <div className='d-flex justify-content-start'><span className='fw-bold mx-3'>You might also like</span></div>
    <div className="row card-margin">
        <div className="col-md-4">
            <img className='card-border img-fluid' src="/assets/img1.png" alt="Image 1"/>
        </div>
        <div className="col-md-4">
            <img className='card-border img-fluid' src="/assets/img1.png" alt="Image 2"/>
        </div>
        <div className="col-md-4">
            <img className='card-border img-fluid' src="/assets/img1.png" alt="Image 3"/>
        </div>
    </div>
    <div className="row card-margin">
        <div className="col-md-4">
            <img className='card-border img-fluid' src="/assets/img1.png" alt="Image 4"/>
        </div>
        <div className="col-md-4">
            <img className='card-border img-fluid' src="/assets/img1.png" alt="Image 5"/>
        </div>
        <div className="col-md-4">
            <img className='card-border img-fluid' src="/assets/img1.png" alt="Image 6"/>
        </div>
    </div>
</div>
  )
}

export default Cards