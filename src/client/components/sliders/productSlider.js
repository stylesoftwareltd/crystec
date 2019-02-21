import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Container, Col, Row } from 'reactstrap';

class productSlider extends Component {

    constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.openLightboxManual = this.openLightboxManual.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      openLightboxManual(index) {
        this.setState({
          currentImage: index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
      render() {
        return (
          <div>
            {/*<Gallery photos={this.props.photos} onClick={this.openLightbox} margin={0} columns={4} direction='column'/>*/}

            <div className="conainer-fluid nav-bgcolor pSpacer-bot">
                <div class="container gallery-sec-h pb-2">
                    <h1>Gallery</h1>
                </div>
                <container-fluid className="p-0 d-flex flex-wrap">
                    <Row className="no-gutters">
                      <Col xs="6"  className="p-0">
                          <Row className="no-gutters">
                              <Col xs="6" className="p-0">
                                  <Col xs="12" className="p-0">
                                      <img onClick={() => this.openLightboxManual(0)} src={this.props.photos[0].src} alt="" className="img-fluid" />
                                  </Col>
                                  <Col xs="12" className="p-0">
                                      <Row className="no-gutters">
                                          <Col xs="6" className="p-0"><img onClick={() => this.openLightboxManual(1)} src={this.props.photos[1].src} alt="" className="img-fluid" /></Col>
                                          <Col xs="6" className="p-0"><img onClick={() => this.openLightboxManual(2)} src={this.props.photos[2].src} alt="" className="img-fluid" /></Col>
                                      </Row>
                                  </Col>
                              </Col>
                              <Col xs="6" className="p-0">
                                  <Col className="p-0">
                                      
                                      <Col xs="12" className=" p-0"><img onClick={() => this.openLightboxManual(3)} src={this.props.photos[3].src} alt="" className="img-fluid" /></Col>
                                      <Col xs="12" className=" p-0"><img onClick={() => this.openLightboxManual(4)} src={this.props.photos[4].src} alt="" className="img-fluid" /></Col>
                                      
                                  </Col>
                              </Col>
                          </Row>
                      </Col>

                      <Col xs="6" className=" p-0">
                          <Row className="no-gutters">
                              <Col xs="8" className=" p-0"><img onClick={() => this.openLightboxManual(5)} src={this.props.photos[5].src} alt="" className="img-fluid" /></Col>
                              <Col xs="4" className=" p-0">
                                  <Row className="no-gutters">
                                      <Col xs="12" className=" p-0"><img onClick={() => this.openLightboxManual(6)} src={this.props.photos[6].src} alt="" className="img-fluid" /></Col>
                                      <Col xs="12" className=" p-0"><img onClick={() => this.openLightboxManual(7)} src={this.props.photos[7].src} alt="" className="img-fluid" /></Col>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                </container-fluid>
            </div>


            <Lightbox images={this.props.photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        )
      }

};

export default productSlider;