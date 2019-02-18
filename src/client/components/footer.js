import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Col, Row } from 'reactstrap';



const Footer = () => {

<Helmet>
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed" rel="stylesheet"></link>
    <link rel="src/stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"></link>
</Helmet>
    
    return (
    <footer>
        {/*<!-- Contact Banner Start -->*/}
        <div className="container-fluid cont-ban">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-6 col-12 p-0">
                        <div className="col-12 f-con-head">
                            <h2>CONTACT US</h2>
                        </div>
                        <div className="col-12 f-con-txt con-txt1">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aut sint deserunt veritatis inventore, natus, voluptas minima ad dicta quia placeat voluptates magni totam expedita facilis laboriosam! Corporis, quasi dicta!</p>
                        </div>
                        <div className="col-12 f-con-txt con-txt1">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aut sint deserunt veritatis inventore, natus, voluptas minima ad dicta quia placeat voluptates magni totam expedita facilis laboriosam! Corporis, quasi dicta!</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 wrap-form">
                        <div className="w-100">
                            <div className="offset-lg-2 col-lg-8 col-md-12 col-12 f-con-head txt-center">
                                <h5>Sign up for our Newsletter</h5>
                            </div>
                            <div className="offset-lg-2 col-lg-8 col-md-12 col-12 f-con-txt con-txt1">
                                <form action="#">
                                    <div className="s col-12 form-group">
                                        <input type="email" className="form-control1" id="email" placeholder="E-mail Address" name="email" />
                                    </div>
                                    <div className=" col-12 ">
                                        <button type="submit" className="btn1 btn-primary1 w-100">Get Updates</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container spacer-top2 ">
                <div className="offset-1 col-8 bottom-txt pt-1 pb-1">
                    <div className="row">
                        <div className="col-sm-4 col-12">
                            <a href="#">
                    <h6 className="txt-center">
                      Privacy Policy
                    </h6>
                  </a>
                        </div>
                        <div className="col-sm-4 col-12">
                            <a href="#">
                      <h6 className="txt-center">
                        Terms & Conditions
                      </h6>
                    </a>
                        </div>
                        <div className="col-sm-4 col-12">
                            <a href="#">
                      <h6 className="txt-center">
                        Warranty
                      </h6>
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- Contact Banner End -->*/}
        <div className="container-fluid cop-txt">
            <div className="container">
                <p className="txt-ceter">Copyright&nbsp;&copy;&nbsp;2018</p>
            </div>
        </div>
    </footer>
    );  
};

export default Footer;