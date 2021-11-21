import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import image1 from '../../images/Coloring_App.png';
import image2 from '../../images/Page_Picker.png';
import image3 from '../../images/Color_picker.png';
import image4 from '../../images/Color_palette.png';
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
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5 class="card-title">Colorfy</h5>
                                            <p class="card-text">
                                                Colorfy is a simle coloring book app that you can
                                                play around with on your mobile device
                                            </p>
                                            <Link to="/colorbook">
                                                <Button>Try our app!</Button>
                                            </Link>
                                        </div>
                                        <div class="col-sm-6 text-right">
                                            <img src={image1} alt="sans" width="500px"></img>
                                        </div>
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
                                    <div class="row">
                                        <div class="col-sm-6 text-right">
                                            <img
                                                class=""
                                                src={image2}
                                                alt="sans"
                                                width="500px"
                                            ></img>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5 class="card-title">
                                                Feature 1: Choose a Coloring Page!
                                            </h5>
                                            <p class="card-text">
                                                From the drop-down menu, you are able to choose
                                                which coloring page you would like to work with!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="card" id="card3">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5 class="card-title">
                                                Feature 2: Use a Color Picker!
                                            </h5>
                                            <p class="card-text">
                                                Choose your color from a color picker to color your
                                                page!
                                            </p>
                                        </div>
                                        <div class="col-sm-6 text-right">
                                            <img
                                                class=""
                                                src={image3}
                                                alt="sans"
                                                width="500px"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="card" id="card2">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6 text-right">
                                            <img
                                                class=""
                                                src={image4}
                                                alt="sans"
                                                width="500px"
                                            ></img>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5 class="card-title">
                                                Feature 3: Use a Color Palette!
                                            </h5>
                                            <p class="card-text">
                                                Choose a color palette, and then pick a color to
                                                use!
                                            </p>
                                        </div>
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
                                <video controls width="250">
                                    <source src="#"></source>
                                </video>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5 class="card-title">Tutorial</h5>
                                            <p class="card-text">Watch a tutorial here!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-engineers">
                    <div class="container">
                        <h2>Meet the Engineers!</h2>
                        <div class="row">
                            <div class="col">
                                <div className="engineer-amy">
                                    <div className="amy-profile">
                                        <div className="amy-picture-background"></div>
                                    </div>
                                    <div className="amy-intro">
                                        <h3>Amy</h3>
                                        <p>
                                            Amy is a Frontend Developer with a passion for learning
                                            new technologies. Ask her about mechanical keyboards!
                                        </p>
                                    </div>
                                    <div className="amy-contact">
                                        <a href="https://github.com/kirontoo">
                                            <i class="devicon-github-original colored"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/amy-nguyen-dang/">
                                            <i class="devicon-linkedin-plain colored"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div className="engineer-amber">
                                    <div className="amber-profile">
                                        <div className="amber-picture-background"></div>
                                    </div>
                                    <div className="amber-intro">
                                        <h3>Amber</h3>
                                        <p>
                                            Amber is a recent Full Stack Developer bootcamp grad. In
                                            her freetime she enjoys camping, hiking, mountain
                                            biking, and anything that gets her outdoors!
                                        </p>
                                    </div>
                                    <div className="amber-contact">
                                        <a href="https://github.com/Ope522">
                                            <i class="devicon-github-original colored"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/amberterry/">
                                            <i class="devicon-linkedin-plain colored"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2>Meet the Designer!</h2>
                        <div class="row">
                            <div class="col"></div>
                            <div class="col">
                                <div className="engineer-zelle">
                                    <div className="zelle-profile">
                                        <div className="zelle-picture-background"></div>
                                    </div>
                                    <div className="zelle-intro">
                                        <h3>Roselle</h3>
                                        <p>
                                            Roselle is a product designer with a background in
                                            interior design, graphic design, and project management.
                                            Loves Figma, cats, and food!
                                        </p>
                                    </div>
                                    <div className="zelle-contact">
                                        <a href="#">
                                            <i class="devicon-github-original colored"></i>
                                        </a>
                                        <a href="#">
                                            <i class="devicon-linkedin-plain colored"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
