import React, {Component} from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import webConfig from './../../../../../webConfig';

class MeetTheTeamSlider extends Component {

    constructor(props){
        super(props);
        this.state = {
            meetTheTeam_loaded: false
        }
    }

    componentDidMount(){
        this.setState({meetTheTeam_loaded : true});
    }

    render(){
        var settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            fade: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
          };

        return(
            <div className="meetTheTeam">

                <div className={classNames({'banner_scroller': true, 'loaded': this.state.meetTheTeam_loaded })}>

                    <Slider {...settings}>
                    
                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                        <div className="item">
                            <div className="profilePic">
                                <img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`} />
                            </div>
                            <div className="details">
                                <span className="name">
                                    Jane Doe
                                </span>
                                <span className="jobRole">
                                    General manager
                                </span>
                            </div>
                        </div>

                    </Slider>
                </div>

            

            </div>
        )
    };
}

export default MeetTheTeamSlider;