import React from "react";
import "./style/landingPage.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import collaborate from "../img/collaborate.png";
import track from "../img/track.png";

const LandingPage = () => {
  return (
    <div>
      <hr></hr>
      <div className="container">
        <div className="leftSide">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <h2>The ultimate team collaboration tool</h2>

            <p>
              collab.com, ranked #1 for productivity, helps teams manage and
              execute projects that deliver results on time.
            </p>

            <a href="get-started" className="getStarted">
              Get Started
            </a>
          </ScrollAnimation>
        </div>

        <div className="rightSide">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutRight"
          >
            <video
              src="https://dapulse-res.cloudinary.com/video/upload/f_auto/remote_mondaycom_static/video/main/three-board-views-with-shadow/three-board-views-with-shadow.mp4"
              style={{ width: "60%", height: "60%" }}
              preload="auto"
              muted
              loop="1"
              poster="https://dapulse-res.cloudinary.com/image/upload/f_auto/remote_mondaycom_static/video/main/three-board-views-with-shadow/three-board-views-with-shadow.jpg"
              playsInline=""
              webkit-playsinline=""
              autoPlay
              className="taskPhoto"
            ></video>
          </ScrollAnimation>
        </div>
      </div>
      <div className="container second">
        <div className="leftSide">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <video
              src="https://dapulse-res.cloudinary.com/video/upload/f_auto/remote_mondaycom_static/video/main/invite-users/invite-users.mp4"
              style={{ width: "70%", height: "70%" }}
              preload="auto"
              muted
              loop
              poster="https://dapulse-res.cloudinary.com/image/upload/f_auto/remote_mondaycom_static/video/main/invite-users/invite-users.png"
              playsInline
              webkit-playsinline=""
              autoPlay
            ></video>
          </ScrollAnimation>
        </div>
        <div className="rightSide">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutRight"
          >
            <span>Plan</span>
            <h2>Visually map out everything</h2>
            <p>
              Planning projects is easier when you can organize your team's
              tasks in a visual way. Create customizable workflows, see who’s
              working on what, assign teammates to new tasks, set due dates, and
              prioritize with color-coded labels.
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="container">
        <div className="leftSide">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <h2>Work together more efficiently</h2>
            <span>
              <p>Collaborate</p>
            </span>
            <p>
              Collaborate directly in the context of any project with a
              designated space for real-time communication. Share files,
              comments and feedback in one central place, mentioning all
              relevant teammates with automatic notifications on every update.
            </p>
          </ScrollAnimation>
        </div>
        <div className="rightSide">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutRight"
          >
            <img src={collaborate} alt="taskPhotos" className="taskPhoto" />
          </ScrollAnimation>
        </div>
      </div>
      <div className="container second">
        <div className="leftSide">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <img
              src={track}
              alt="plan"
              style={{ width: "50%", height: "50%" }}
            />
          </ScrollAnimation>
        </div>
        <div className="rightSide">
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutRight"
          >
            <span>Track</span>
            <h2>Keep an eye on progress, your way</h2>
            <p>
              Zoom in on the nitty-gritty details or zoom out and see the big
              picture. You decide on the way you want to track your team's
              progress. Enjoy high-level dashboards and multiple view options,
              from Calendar and Timeline to Gantt and Pie charts
            </p>
          </ScrollAnimation>
        </div>
      </div>
      <footer className="contain">
        <div className="allrights">
          <p>All Rights Reserved</p>
          <p>&copy;collab.com 2019</p>
        </div>
        <div className="products">
          <h4>Our Products</h4>
          <a href="products">Product</a>
          <a href="stories">Stories</a>
          <a href="pricing">Pricing</a>
          <a href="enterprise">Enterprise</a>
          <a href="affiliates">Partners/Affiliates</a>
          <a href="find">Find a Partner</a>
          <a href="templates">Templates</a>
          <a href="integrations">Integrations</a>
          <a href="developers">Developers</a>
          <a href="students">Students</a>
        </div>
        <div className="team">
          <h4>Our team</h4>
          <a href="about">About Us</a>
          <a href="contact">Contact Us</a>
          <a href="career">Careers</a>
          <a href="news">In The News</a>
          <a href="press">Press Kit</a>
          <a href="blog">Blog</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
