import React from "react";

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p className="lead">
        Welcome to Bros' Gym, where fitness meets community. We are dedicated to
        providing a welcoming environment for everyone, whether you're a
        seasoned athlete or just starting your fitness journey. Our
        state-of-the-art facilities and diverse range of classes cater to all
        fitness levels.
      </p>
      <h4>Who We Are</h4>
      <p>
        At Bros' Gym, our team consists of experienced trainers and fitness
        enthusiasts who are passionate about helping our members achieve their
        health and fitness goals. We believe in promoting a holistic approach to
        wellness that encompasses physical fitness, mental well-being, and
        community support.
      </p>
      <h4>Our Goals</h4>
      <p>
        Our mission is to inspire and empower individuals to lead healthier
        lives. We aim to:
      </p>
      <ul>
        <li>
          Provide a variety of classes and training programs tailored to meet
          the needs of our members.
        </li>
        <li>
          Create a supportive and inclusive community that encourages growth and
          achievement.
        </li>
        <li>
          Maintain a clean, safe, and motivating environment for all fitness
          activities.
        </li>
        <li>
          Foster a culture of lifelong fitness and well-being through education
          and support.
        </li>
      </ul>
      <h4>Find Us</h4>
      <div className="my-4">
        <iframe
          title="Bros' Gym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26112.035157488946!2d147.3399960918048!3d-35.10660114901993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b18999d3a78b677%3A0x50609b4904426f0!2sWagga%20Wagga%20NSW%202650!5e0!3m2!1sen!2sau!4v1727086820599!5m2!1sen!2sau"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
