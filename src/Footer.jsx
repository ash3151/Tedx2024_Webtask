import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="logo-section">
                <div className="logofoot"></div>
                <p className="description">
                    Fostered by the vision of serving the student community with the most innovative and inspiring ideas.
                </p>
            </div>
            <div className="footreach">
                <h3>SPREAD THE LOVE</h3>
                <div class="footer_box_body">
                    <p>
                        We're on your favourite social media networks! Follow us on:
                    </p>
                    <ul class="footer_social">
                        <li>
                            <a href="https://www.facebook.com/tedxnitksurathkal2018/">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/tedxnitksurathkal/?hl=en">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="gallery-section">
                <h3>GALLERY</h3>
                <div className="gallery">
                    <img src="https://www.tedxnitksurathkal.in/assets/img/footer/1.jpg" alt="Gallery Image 1"/>
                    <img src="https://www.tedxnitksurathkal.in/assets/img/footer/2.jpg" alt="Gallery Image 2"/>
                    <img src="https://www.tedxnitksurathkal.in/assets/img/footer/3.jpg" alt="Gallery Image 3"/>
                    <img src="https://www.tedxnitksurathkal.in/assets/img/footer/4.jpg" alt="Gallery Image 4"/>
                    <img src="https://www.tedxnitksurathkal.in/assets/img/footer/5.jpg" alt="Gallery Image 5"/>
                    <img src="https://www.tedxnitksurathkal.in/assets/img/footer/6.jpg" alt="Gallery Image 6"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
