import React from 'react'

function Slider() {
  return (
//     <div className="container mt-5">
//     <div id="myCarousel" className="carousel slide" data-ride="carousel">
  
//         <ul className="carousel-indicators">
//             <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             <li data-target="#myCarousel" data-slide-to="2"></li>
//         </ul>

   
//         <div className="carousel-inner">
//             <div className="carousel-item active">
//                 <video className="d-block w-100" controls>
//                     <source src="/assets/animated_medium20211013-7919-1f40zxk.mp4"
//                      type="video/mp4"
//                      autoPlay
//                      muted
//                      loop
//                      className="video"
//                      />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
            
//             <div className="carousel-item">
//                 <img src="/assets/card1.webp" alt="Image 1"/>
//             </div>
//             <div className="carousel-item">
//                 <img src="image2.jpg" alt="Image 2"/>
//             </div>
//         </div>

//         <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//         </a>
//     </div>

//     <div className="text-center mt-3">
//         <button className="btn btn-primary" data-target="#myCarousel" data-slide-to="0">Video</button>
//         <button className="btn btn-primary" data-target="#myCarousel" data-slide-to="1">Image 1</button>
//         <button className="btn btn-primary" data-target="#myCarousel" data-slide-to="2">Image 2</button>
//     </div>
// </div>
<div className="container mt-5">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
  
        <ul className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ul>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <video className="d-block w-100 video" controls autoPlay loop muted >
                    <source src="/assets/animated_medium20211013-7919-1f40zxk.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div className="carousel-item">
                <img src="/assets/card1.webp" alt="Image 1"/>
            </div>
            <div className="carousel-item">
                <img src="image2.jpg" alt="Image 2"/>
            </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

    <div className="text-center mt-3">
        <button className="btn btn-primary" data-target="#myCarousel" data-slide-to="0">Video</button>
        <button className="btn btn-primary" data-target="#myCarousel" data-slide-to="1">Image 1</button>
        <button className="btn btn-primary" data-target="#myCarousel" data-slide-to="2">Image 2</button>
    </div>
</div>


  )
}

export default Slider