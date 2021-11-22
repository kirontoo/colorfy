import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import image1 from '../../images/Coloring_App.png';
import image2 from '../../images/Page_picker.png';
import image3 from '../../images/Color_picker.png';
import image4 from '../../images/Color_palette.png';
import image5 from '../../images/Zelle_icon.png';
import './Home.css';

function Home() {
  return (
    <>
      <div className="app-header">
        <div className="app-description">
          <div class="container">
            <div class="row">
              <div class="card" id="card1">
                <div class="card-body">
                  <div class="col-sm-6 d-flex flex-column p-2 align-items-start">
                    <h3 class="card-title">Colorfy</h3>
                    <p class="card-text">
                    Colorfy is a simple coloring book app that you can play
                    around with on your mobile device
                    </p>
                    <Link to="/colorbook">
                      <Button size="lg">Get Started</Button>
                    </Link>
                  </div>
                  <div class="col-sm-6 text-right">
                    <img
                      src={image1}
                      alt="Coloring Page"
                      width="500px"
                      className="promo-image"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-features">
          <div class="container">
            <div class="row">
              <div class="card" id="card2">
                <div class="card-body">
                  <div class="col-sm-6 text-right">
                    <img
                      class=""
                      src={image2}
                      alt="Choose which page you'd like to use"
                      width="500px"
                      className="promo-image"
                    ></img>
                  </div>
                  <div class="col-sm-6 d-flex flex-column p-2 align-items-start justify-content-center">
                    <h3 class="card-title">Choose a Coloring Page</h3>
                    <p class="card-text">
                    From the drop-down menu, you are able to choose which
                    coloring page you would like to work with
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="card" id="card3">
                <div class="card-body">
                  <div class="col-sm-6 d-flex flex-column p-2 align-items-start justify-content-center">
                    <h3 class="card-title">Use a Color Picker</h3>
                    <p class="card-text">
                    Choose your color from a color picker to color your page
                    </p>
                  </div>
                  <div class="col-sm-6 text-right">
                    <img
                      class=""
                      src={image3}
                      alt="Use a color picker"
                      width="500px"
                      className="promo-image"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="card" id="card2">
                <div class="card-body">
                  <div class="col-sm-6 align-items-center justify-content-center">
                    <img
                      src={image4}
                      alt="Use a color palette"
                      width="400px"
                      className="promo-image"
                    ></img>
                  </div>
                  <div class="col-sm-6 d-flex flex-column align-items-start justify-content-center">
                    <h3 class="card-title">Use a Color Palette</h3>
                    <p class="card-text">
                    Choose a color palette, and then pick a color to use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="demo-video">
          <div class="container">
            <div class="row">
              <div class="card" id="card4">
                <div class="card-body">
                  <div class="col-sm-6 d-flex flex-column align-items-start justify-content-center">
                    <h3 class="card-title">Here's a Small Demo</h3>
                    <Link to="/colorbook">
                      <Button size="lg">Get Started</Button>
                    </Link>
                  </div>
                  <div class="col-sm-6">
                    <div class="promo-image demo"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-engineers">
          <div class="container">
            <h2>Meet the Engineers</h2>
            <div class="row">
              <div class="col">
                <div className="engineer-amy">
                  <div className="amy-profile">
                    <div className="amy-picture-background"></div>
                  </div>
                  <h3 className="profile-name">Amy</h3>
                  <p className="intro">
                  Amy is a Frontend Developer with a passion for learning new
                  technologies. Ask her about mechanical keyboards!
                  </p>
                  <div className="contact">
                    <a href="https://github.com/kirontoo">
                      <i class="devicon devicon-github-original colored"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/amy-nguyen-dang/">
                      <i class="devicon devicon-linkedin-plain colored"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="engineer-amber">
                  <div className="amber-profile">
                    <div className="amber-picture-background"></div>
                  </div>
                  <h3 className="profile-name">Amber</h3>
                  <p className="intro">
                  Amber is a recent Full Stack Developer bootcamp grad. In her
                  freetime she enjoys camping, hiking, mountain biking, and
                  anything that gets her outdoors
                  </p>
                  <div className="contact">
                    <a href="https://github.com/Ope522">
                      <i class="devicon devicon-github-original colored"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/amberterry/">
                      <i class="devicon devicon-linkedin-plain colored"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h2>Meet the Designer</h2>
            <div class="row justify-content-center">
              <div class="col-sm-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div className="zelle-profile">
                    <div className="zelle-picture-background"></div>
                  </div>
                  <h3 className="profile-name">Roselle</h3>
                  <p className="intro">
                  Roselle is a product designer with a background in interior
                  design, graphic design, and project management. Loves Figma,
                  cats, and food!
                  </p>
                  <div className="contact">
                    <a href="https://uxzelle.com/">
                      <img class="devicon icon" src={image5}></img>
                    </a>
                    <a href="https://linkedin.com/in/rosellebernardino">
                      <i class="devicon devicon-linkedin-plain colored"></i>
                    </a>
                    <a href="https://twitter.com/uxzelle">
                      <i class="devicon devicon-twitter-original"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
