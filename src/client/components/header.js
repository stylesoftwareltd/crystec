import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import webConfig from './../../../webConfig';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {

    constructor(props) {
        super();
        this.state = {
            vPos : 0,
            mobileToggle: false
        }
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    listenScrollEvent(event) {
        this.setState({
            vPos: event.target.body.scrollTop
        });
    }

    toggleMobileNav(){
        this.setState({
            mobileToggle: !this.state.mobileToggle
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScrollEvent);
    }
    
    render() {

        return (
            
            <header>

                
                <section>
        {/*<!-- 1.1 Navigation Start -->*/}
        <div className="container-fluid nav-bgcolor">
            <div className="container">
                <nav className="">
                    <div className="row nav-main-row">
                        <div className=" col-lg-3 col-md-6 col-sm-6 col-6 logo-wrap offset-3m">
                            <a className="navbar-brand" href="/">
                    <img src="/assets/graphics/homePage/Asset 1.png" alt="" className="img-fluid" />
                </a>
                        </div>
                        {/*<!-- Nav bar <=991-->*/}
                        <div className=" col-lg-7 md-dnone">
                            <ul className="nav">
                                <li className="nav-item ">
                                    <a className="nav-link" href="/">Home </a>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="nav-link" href="#about_us">About</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="nav-link" href="#our_models">Products</AnchorLink>
                                </li>
                                <li className="nav-item">
                                    <AnchorLink className="nav-link" href="#what_we_offer">What We Offer</AnchorLink>
                                </li>
                                {/*<li className="nav-item">
                                    <a className="nav-link disabled" href="#">Video Gallery</a>
                                </li>*/}
                                {/*<li className="nav-item">
                                    <a className="nav-link disabled" href="#">More</a>
                                </li>*/}
                            </ul>
                        </div>
                        <div className=" col-lg-2 col-md-6 col-sm-6 col-6 logo-wrap-2 offset-3m">
                            <a className="navbar-brand2" href="#">
                    <div className="brnd2-txt">
                      <p>Designed In The EU</p>
                    </div>  
                    <div className="brnd2-img">  
                      <img src="/assets/graphics/homePage/Asset 3.png" alt="" className="img-fluid" />
                    </div>
                </a>
                        </div>
                    </div>


                    <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="expa">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    {/*<!-- Nav bar 550 => -->*/}
                    <div className="mob-nav collapse" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">What We Offer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Video Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">More</a>
                            </li>
                        </ul>
                    </div>
                    {/*<!-- Nav bar 991-550 -->*/}
                    <div className="mob-nav mob-2-nav" id="navbarNav">
                        <ul className="nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">What We Offer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Video Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">More</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
        </section>
        {/*<!-- 1.1 Navigation End -->*/}
                
            
            
            
            </header>
            
        );
    }  
};

export default Header;