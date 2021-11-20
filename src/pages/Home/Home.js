import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { github, linkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
    return (
        <>
            <div className="app-header">
                <div className="app-description">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card" id="card1">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <h5 class="card-title">Colorfy</h5>
                                                <p class="card-text">
                                                    Colorfy is a simle coloring book app that you
                                                    can play around with on your mobile device
                                                </p>
                                            </div>
                                            <div class="col-sm-6 text-right">
                                                <img
                                                    class=""
                                                    src="//placehold.it/200"
                                                    alt="sans"
                                                    width="200px"
                                                ></img>
                                            </div>
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
                            <div class="col-sm-6">
                                <div class="card" id="card2">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6 text-right">
                                                <img
                                                    class=""
                                                    src="//placehold.it/200"
                                                    alt="sans"
                                                    width="200px"
                                                ></img>
                                            </div>
                                            <div class="col-sm-6">
                                                <h5 class="card-title">Feature 1</h5>
                                                <p class="card-text">Feature 1 Description</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card" id="card3">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <h5 class="card-title">Feature 2</h5>
                                                <p class="card-text">Feature 2 Description</p>
                                            </div>
                                            <div class="col-sm-6 text-right">
                                                <img
                                                    class=""
                                                    src="//placehold.it/200"
                                                    alt="sans"
                                                    width="200px"
                                                ></img>
                                            </div>
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
                            <div class="col-sm-6">
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
                </div>
                <div className="app-engineers">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className="engineer-amy">
                                    <div className="amy-profile">
                                        <div className="amy-picture-background"></div>
                                    </div>
                                    <div className="amy-intro">
                                        <h3>Amy</h3>
                                        <p></p>
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
                                            <FontAwesomeIcon icon={github} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/amberterry/">
                                            <FontAwesomeIcon icon={linkedin} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
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
