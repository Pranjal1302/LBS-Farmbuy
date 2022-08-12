import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';


function Home() {
    return (

        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"

            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="assets/sps-agriculture-hero.webp" className="imgs d-block w-100" alt="c1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Our Motive to help Farmers</h1>
                            <p>Join our League to normalise the Crop Cycle</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/carousel2.jpg" className="imgs  w-100" alt="c2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Our Motive to help Farmers</h1>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="assets/carousel3.jpg" className="imgs d-block w-100" alt="c3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Our Motive to help Farmers</h1>
                            <p>...</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
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
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Quote/testimonial aside*/}
            <div className="text-center bg-gradient-primary-to-secondary">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xl-8">
                            <div className="h2 fs-1 text-white mb-4">"An intuitive solution to a common problem that we all face, wrapped up in a single app!"</div>
                            <img src="assets/img/tnw-logo.svg" alt="..." style={{ height: "3rem" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* App features section*/}
            <section id="features" style={{ backgroundColor: "gray" }}>
                <div className="container px-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                            <div className="container-fluid px-5">
                                <div className="row gx-5">
                                    <div className="col-md-6 mb-5" >
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <img src="./assets/8.png"></img>
                                            <h3 className="font-alt">Device Mockups</h3>
                                            <p className="text mb-0">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <img src="./assets/9.png" alt="" />
                                            <h3 className="font-alt">Flexible Use</h3>
                                            <p className="text mb-0">Put an image, video, animation, or anything else in the screen!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <img src="./assets/10.png" alt="" />
                                            <h3 className="font-alt">Free to Use</h3>
                                            <p className="text mb-0">As always, this theme is free to download and use for any purpose!</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        {/* Feature item*/}
                                        <div className="text-center">
                                            <img src="./assets/11.png" alt="" />
                                            <h3 className="font-alt">Open Source</h3>
                                            <p className="text mb-0">Since this theme is MIT licensed, you can use it commercially!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-0">
                            {/* Features section device mockup*/}
                            <div className="photo features-device-mockup">
                                <img src="assets/john-deere-india-d-series-tractors.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Basic features section*/}
            <section className="bg-light">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-12 col-lg-5">
                            <h2 className="display-4 lh-1 mb-4">Enter a new age of web design</h2>
                            <p className="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.</p>
                        </div>
                        <div className="col-sm-8 col-md-6">
                            <div className="px-5 px-sm-0"><img className="img-fluid " src="assets/2.jpg" alt="..." /></div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to action section*/}
            <section className="cta">
                <div className="cta-content">
                    <div className="container px-5">
                        <h2 className="text-white display-1 lh-1 mb-4">
                            Stop waiting.
                            <br />
                            Start building.
                        </h2>
                        <a className="btn btn-outline-light py-3 px-4 rounded-pill" target="_blank">Download for free</a>
                    </div>
                </div>
            </section>
            {/* App badge section*/}
            <section className="bg-gradient-primary-to-secondary" id="download">
                <div className="container px-5">
                    <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                        <a className="me-lg-3 mb-4 mb-lg-0" ><img className="app-badge" src="assets/img/google-play-badge.svg" alt="..." /></a>
                        <a><img className="app-badge" src="assets/img/app-store-badge.svg" alt="..." /></a>
                    </div>
                </div>
            </section>


        </>


    );
}

export default Home;
