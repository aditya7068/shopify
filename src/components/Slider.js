import React from "react";

// import img1 from "../assets/img1.jpg";
// import img6 from "../assets/img6.jpg";
// import img4 from "../assets/img4.png";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className=" slider1">
            <div className="sliderImage"></div>
            <div className="content">
              <h1>Summer Sale</h1>
              <p>It's that time of the year again for extra hot sales!</p>
              <button>shop now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" slider2">
            <div className="sliderImage"></div>
            <div className="content">
              <h1>Summer Sale</h1>
              <p>It's that time of the year again for extra hot sales!</p>
              <button>shop now</button>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" slider3">
            <div className="sliderImage"></div>
            <div className="content">
              <h1>Summer Sale</h1>
              <p>It's that time of the year again for extra hot sales!</p>
              <button>shop now</button>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
