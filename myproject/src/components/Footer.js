import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <div>
            

<footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div id="s1" className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" >
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                                    <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                    <p id="s2"className="mchimp-errmessage" ></p>
                                    <p id="s3" className="mchimp-sucmessage" ></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div id="s4"className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div id="s5"className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s">
                                <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div id="s6"className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                
                                    <a href="#" className="fab fa-facebook"><FontAwesomeIcon icon={faFacebookF}  style={{ color: "black" }} /></a>
                                    <a href="#" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter}  style={{ color: "black" }} /></a>
                                    <a href="#" className="fab fa-linkedin"><FontAwesomeIcon icon={faLinkedin}  style={{ color: "black" }} /></a>
                                    <a href="#" className="fab fa-pinterest"><FontAwesomeIcon icon={faPinterest}  style={{ color: "black" }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    {/* <video className="video" autoPlay loop muted>
<source src="https://i.pinimg.com/originals/a9/9a/d4/a99ad472835799c6103a4ae7d0beff52.gif"/>
                    </video> */}
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i className="icon_heart"></i> in <a href="#">CakeCounter</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer