import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import pic1 from "../assets/crossfit-534615_1920.jpg";

const Home = () => {
  return (
    <div className="text-center">
      <div className="home-container d-flex justify-content-center align-items-center">
        <h1>
          <Typewriter
            options={{
              strings: [
                "Welcome to Bro's Gym!",
                "Get Fit, Stay Healthy!",
                "Join Us Today!",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </div>
      <div>
        <h2 className="py-3 fs-1">Our Facilities</h2>
        <p className="w-50 mx-auto">
          Our gym is fitted out with only the best equipment available to create
          the perfect training experience. With large and open training areas,
          we ensure there is ample room to train safely regardless of class
          size. We also have designated areas for both strength and mobility
          training.
        </p>
      </div>
      <div
        className="carousel-container mx-auto my-5"
        style={{ maxWidth: "900px" }}
      >
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic1} className="d-block w-100" alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic1} className="d-block w-100" alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
