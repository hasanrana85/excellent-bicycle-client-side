import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Banner.css';
import slider1 from '../../../images/slider/slider1.jpg';
import slider2 from '../../../images/slider/slider2.jpg';
import slider3 from '../../../images/slider/slider3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block image w-100 slide-1"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold fs-1">The Development of Teeth</h2>
                    <p className="text-dark fw-bold fs-4">Humans have two sets of teeth: primary (or baby) teeth and permanent (adult) teeth,</p>
                    <button className="text-danger fw-bold text-uppercase rounded-3 bg-warning p-2 fs-5 border-0">Explore Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block image w-100 slide-1"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold fs-1">Types of Teeth and What They Do</h2>
                    <p className="text-dark fw-bold fs-4">A tooth is divided into two basic parts: the crown, which is the visible, white part of the tooth,</p>
                    <button className="text-danger fw-bold text-uppercase rounded-3 bg-warning p-2 fs-5 border-0">Explore Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block image w-100 slide-1"
                    src={slider3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold fs-1">The Parts of the Tooth</h2>
                    <p className="text-dark fw-bold fs-4">Teeth help you chew your food, making it easier to digest. Each type of tooth has a slightly</p>
                    <Link to="/exploreProducts">
                        <button className="text-danger fw-bold text-uppercase rounded-3 bg-warning p-2 fs-5 border-0">Explore Now</button>
                    </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;