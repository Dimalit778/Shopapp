import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { Row, Col, Container } from 'react-bootstrap';
import {
  faCity,
  faEarthAmericas,
  faEnvelope,
  faPhoneVolume,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="row col-12 ">
        <div className="col-sm col-md-5 ft1 d-flex flex-column justify-content-center">
          <h2>Contact Us</h2>
          <ul className="list list-unstyled  ">
            <li>
              <FontAwesomeIcon icon={faEarthAmericas} /> Israel
            </li>
            <li>
              <FontAwesomeIcon icon={faCity} />
              Tel Aviv
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} /> Travel@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneVolume} /> Phone : +925 525555555
            </li>
          </ul>
          <div className="footer-icos d-flex">
            <p>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagramSquare} />
            </p>
            <p>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </p>

            <p>
              <FontAwesomeIcon icon={faYoutube} />
            </p>
          </div>
        </div>
        <div className="col-sm col-md-4 ft2">
          <h2>Explore</h2>
          <ul className="list list-unstyled">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="col-sm col-md-3 ft3">
          <h2>Staff</h2>
          <ul className="list list-unstyled">
            <li>Write a review</li>
            <li>Add a Place</li>
            <li>Blog</li>
            <li>Help Center</li>
          </ul>
        </div>
        {/* // !! { ------- BOTTOM FOOTER -------} */}
        <div className="footer-bottom">
          <p>
            &copy;{new Date().getFullYear()} Travel App - All Rights Reserved{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
