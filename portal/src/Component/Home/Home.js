import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-sub-wrapper">
        <div className="sub-inner-wrapper-1">
          <div className="inner-wrapper-1-header">
            <h1>Hello sam.</h1>
            <h4>welcome to MEDArt portal</h4>
          </div>
          <div className="inner-wrapper-1-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, amet debitis. Iure dolore eos consequuntur est
              doloribus veniam unde facilis omnis, laudantium natus eaque sunt
              alias ipsam enim at dignissimos?
            </p>
          </div>
        </div>
        <div className="sub-inner-wrapper-2">
          <div className="sub-inner-wrapper-button">
            <div className="service-wrapper">
            <Link to="/portal-register">
              <h1>+</h1>
            </Link>
            </div>
            <div className="service-wrapper">
              <h1>S</h1>
            </div>
            <div className="service-wrapper">
              <h1>i</h1>
            </div>
            <div className="service-wrapper">
              <h1>v</h1>
            </div>
            <div className="service-wrapper"></div>
            <div className="service-wrapper"></div>
            <div className="service-wrapper"></div>
            <div className="service-wrapper"></div>
          </div>
          <div className="sub-inner-wrapper-content">
            <div className="content-1">
                <div className="content-11">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nisi exercitationem quasi, perferendis nemo atque iure? Voluptatibus sint aut quae cupiditate deleniti reprehenderit fugiat? Aliquam perferendis veritatis a recusandae illo.</p>
                </div>
                <div className="content-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vitae quo praesentium vel sequi blanditiis iure deleniti ut porro voluptas ducimus, eius cumque maiores, assumenda quos voluptates qui exercitationem ratione?</p>
                </div>
            </div>
            <div className="content-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
