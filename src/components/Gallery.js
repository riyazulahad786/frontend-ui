import React from "react";

function Gallery() {
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between mt-3">
          <span className="fw-bold purrweb">More by Purrweb UI/UX Agency</span>
          <span>View profile</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="row">
            <div className="col-12 col-md-3">
              <img
                className="image-gallery mx-auto d-block"
                src="/assets/gal1.png"
              />
            </div>
            <div className="col-12 col-md-3">
              <img
                className="image-gallery mx-auto d-block"
                src="/assets/gal2.png"
              />
            </div>
            <div className="col-12 col-md-3">
              <img
                className="image-gallery mx-auto d-block"
                src="/assets/gal3.png"
              />
            </div>
            <div className="col-12 col-md-3">
              <img
                className="image-gallery mx-auto d-block"
                src="/assets/gal4.png"
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
