import React from "react";

function About() {
  return (
    <div>
      {/* <div className="container text-center">
      <div className="icons">
           <div className="box">a</div>
           <div className="box">a</div>
           <div className="box">a</div>
           <div className="box">a</div>
       </div>
        <div className="d-flex justify-content-center">
          <video
            autoPlay
            muted
            loop
            className="video"
            src="/assets/animated_medium20211013-7919-1f40zxk.mp4"
            type="video/mp4"
          />
        </div>
       
        <div className="d-flex justify-content-center mt-4">
          <hr className="flex-fill hr-ns" />
          <img
            className="about-logo"
            src="https://cdn.dribbble.com/users/5031392/avatars/normal/944b08efb66577ba400d5838490ea5b9.png?1597658879"
            alt="Image"
          />
          <hr className="flex-fill hr-ns" />
        </div>
        <div className="d-flex justify-content-center">
          <h1>Purrweb UI/UX Agency</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h6>We Design Mindful Interfaces for Web & Mobile</h6>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button className="work-btn">
            {" "}
            <i class="fa fa-envelope-o mx-2" aria-hidden="true"></i>
            Work with us
          </button>
        </div>
      </div> */}

      <div class="container icons-wd text-center">
        {/* <div class="video-wrapper ">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active mx-auto">
                <video
                  className="d-block w-100 video"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src="/assets/animated_medium20211013-7919-1f40zxk.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="carousel-item">
                <img src="assets/mob.png" alt="Image 1" className="img-fluid" />
              </div>
              <div className="carousel-item">
                <img src="/assets/mobile.png" alt="Image 2" className="img-fluid"/>
              </div>
              <div className="carousel-item">
                <img src="/assets/mens.png" alt="Image 3" className="img-fluid"/>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>

          <div className="text-center mt-3">
            <div
              className="btn "
              data-target="#myCarousel"
              data-slide-to="0"
            >
              <img className="car-btn" src="/assets/mob.png"/>
            </div>
            <div
              className="btn  "
              data-target="#myCarousel"
              data-slide-to="1"
            >
              <img className="car-btn" src="/assets/mobile.png"/>
            </div>
            <button
              className="btn  "
              data-target="#myCarousel"
              data-slide-to="2"
            >
              <img  className="car-btn" src="/assets/mob.png"/>
            </button>
            <button
              className="btn  "
              data-target="#myCarousel"
              data-slide-to="3"
            >
              <img  className="car-btn" src="/assets/mens.png"/>
            </button>
          </div>
        </div> */}
        <div class="video-carousel">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <video class="d-block w-100" controls autoPlay loop muted>
          <source src="/assets/animated_medium20211013-7919-1f40zxk.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="carousel-item">
        <img src="assets/mob.png" alt="Image 1" class="d-block mx-auto" className="img-fluid"/>
      </div>
      <div class="carousel-item">
        <img src="/assets/mobile.png" alt="Image 2" class="d-block mx-auto" className="img-fluid" />
      </div>
      <div class="carousel-item">
        <img src="/assets/mens.png" alt="Image 3" class="d-block mx-auto" className="img-fluid"/>
      </div>
    </div>

    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <div class="text-center mt-3">
    <div class="btn" data-target="#myCarousel" data-slide-to="0">
      <img class="car-btn" src="/assets/mob.png" />
    </div>
    <div class="btn" data-target="#myCarousel" data-slide-to="1">
      <img class="car-btn" src="/assets/mobile.png" />
    </div>
    <div class="btn" data-target="#myCarousel" data-slide-to="2">
      <img class="car-btn" src="/assets/mob.png" />
    </div>
    <div class="btn" data-target="#myCarousel" data-slide-to="3">
      <img class="car-btn" src="/assets/mens.png" />
    </div>
  </div>
</div>

        <div class="icons-wrapper">
          <div
            class=""
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Dribble"
          >
            <img className="icon-as" src="/assets/icondri.png" />
          </div>
          <div
            class="box"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Likes"
          >
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </div>
          <div
            class="box "
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Save"
          >
            <i class="fa fa-bookmark-o" aria-hidden="true"></i>
          </div>
          <div
            class="box"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Feedback"
          >
            <i class="fa fa-comment-o" aria-hidden="true"></i>
          </div>
          <div
            class="box"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Share"
          >
            <i class="fa fa-upload" aria-hidden="true"></i>
          </div>
          <div
            className="box"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title="Shot details"
          >
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <hr class="flex-fill hr-ns" />
          <img
            class="about-logo"
            src="https://cdn.dribbble.com/users/5031392/avatars/normal/944b08efb66577ba400d5838490ea5b9.png?1597658879"
            alt="Image"
          />
          <hr class="flex-fill hr-ns" />
        </div>
        <div class="d-flex justify-content-center mt-3">
          <h1 class="agency-name">Purrweb UI/UX Agency</h1>
        </div>
        <div class="d-flex justify-content-center">
          <h6 class="agency-description">
            We Design Mindful Interfaces for Web & Mobile
          </h6>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <button class="work-btn">
            <i class="fa fa-envelope-o mx-2" aria-hidden="true"></i>
            Work with us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
