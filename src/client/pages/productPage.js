
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import { fetchProduct,clearPostData } from './../actions';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { Container, Col, Row } from 'reactstrap';
import ProductSlider from './../components/sliders/productSlider';
import ReactHtmlParser from 'react-html-parser';

const photos = [
  { src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];

class ProductPage extends Component {

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.clearPostData();
    }

    head(){
        return (
            <Helmet bodyAttributes={{class: "aboutPage"}}>
              <title>{`Product page`}</title>
            </Helmet>
        );
    }

    render() {

        if(!this.props.productData.base_data == false){
            return(
                <div>
                    <Helmet bodyAttributes={{class: "produtPage"}}>
                        <title>{`${this.props.productData.base_data.name}`}</title>
                        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed" rel="stylesheet"></link>
                    </Helmet>
                    

                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>

                        <div className="main anim-appear">

                            {/* Product Intro */}

                            <Container>
                                    <div className="spacer-prod"></div>
                            <div className="grid">
                                <Col xs="12" sm="12" md="12">
                                    <div className="sin-product">
                                        <Row className="wrp-title">
                                            <Col xs={{ size:12 }} sm={{ size:'auto' }} className="product-cat">
                                                <h2>{ this.props.productData.base_data.g_name }</h2>
                                            </Col>

                                            <Col xs={{ size:12 }} sm={{ size:10 }} className="product-series">
                                                <h2> { this.props.productData.base_data.child_cat } </h2>
                                            </Col>
                                        </Row>
                    
                                        <Row className="product-intro ">

                                            <Col xs="12" sm="12" md={{ size:5 }} className="product-img ">
                                                <img  src={`https://stg.uk.hottubinstyle.co.uk/media/images/product/${this.props.productData.base_data.file}`}  className="img-fluid"/>
                                            </Col>

                                            <Col xs="12" sm="12" md={{ size:6, offset:1}} className="product-desc">
                                            {/* <p>
                                                { ReactHtmlParser(this.props.productData.base_data.description)}                                            
                                            </p> */}
                                                    <div className="prod-wrap1">
                                                        <p>The Crystec <b>2 Series</b> <b>SI</b> is perfect 13Amp Plug &amp; Play.</p>
                                                    </div>

                                                    <div className="prod-wrap2">
                                                        <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repudiandae repellendus ut eum debitis assumenda, placeat doloribus ea id qui fugiat officiis ipsa velit porro, illo quidem hic blanditiis nemo provident ex, ratione obcaecati aspernatur accusantium laborum! Debitis at id veritatis officiis pariatur. Laborum quidem ipsa iusto blanditiis, beatae excepturi!
                                                        </p>
                                                    </div>

                                                    <div className="prod-wrap3">
                                                        <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repudiandae repellendus ut eum debitis assumenda, placeat doloribus ea id qui fugiat officiis ipsa velit porro, illo quidem hic blanditiis nemo provident ex, ratione obcaecati aspernatur accusantium laborum! Debitis at id veritatis officiis pariatur. Laborum quidem ipsa iusto blanditiis, beatae excepturi!
                                                        </p>
                                                    </div>

                                            </Col>

                                        </Row>

                                        
                                        
                                    </div>


                                </Col>

                               
                                
                            </div>
                            <div className="spacer-prod"></div>

                            </Container>

                            
                            {/* Product Intro */}

                            <div className="">
                                    <div className="spec-section">
                                    <Container>
                                        <div className="grid">
                                            <div className="spec-title-main">
                                                <h1>Specification</h1>
                                            </div>

                                            <div className="spec-row">

                                                {/* Set 1 */}
                                                <div className="col-md-12 spec-row">

                                                    { 
                                                        this.props.productData.attributes.map((item, i) => { return (

                                                        <div key={i} className="spec-wrp col-md-6">
                                                            <div className="col-md-12 pl-0 spec-1-tt">
                                                                <h6><strong>{item.attr_name}</strong></h6>
                                                            </div>

                                                        { item.attr_values.map((item2, i) => { 
                                                            return (
                                                                <div className="spec-row" key={i}>
                                                                    <div className="col-md-4 spec-1-hd"><strong>{item2.attr_value_name}</strong></div>
                                                                    <div className="col-md-8 spec-1-cont">{item2.product_attr_value}</div>
                                                                </div>
                                                            )
                                                            }  ) }

                                                        </div>

                                                        ) }  ) 
                                                    }		

                                                </div>
                                                    

                                            </div>

                                            




                                   
                                        </div>

                                        </Container>   
                                    </div>
                            </div>
                                                 
                            {/* className="p-0 d-flex flex-wrap" */}
                           
                            <Container>
                            
                                <div className="main column gallery-cont">

                                        <Col xs={{ size: 12, offset: 0 }} className="p-0 heading-cont">
                                            <Container className="p-0">

                                                <div className="heading">
                                                    <h1 className="m-0">Gallery</h1>
                                                </div>
                                            </Container>
                                        </Col>

                                        <div className="gallery-section">      
                                            <ProductSlider photos={this.props.productData.image_names} />   
                                        </div>
                                </div>
                            </Container>

                            

                            
                                <div className="main column feature-cont">

                                        <Col xs={{ size: 12, offset: 0 }} className="p-0 heading-cont">
                                            <Container className="p-0">

                                                <div className="heading">
                                                    <h1 className="m-0">Features</h1>
                                                </div>
                                            </Container>
                                        </Col>

                                        <Container>

                                            { 
                                                this.props.productData.product_features.map((item, i) => { return (

                                                <Row className="mb-3" key={i}>
                                                    <Col xs={{ size: 12, offset: 0 }} md={{ size: 4, offset: 0 }} className="feat-img-wrp">

                                                        <img src={`https://stg.uk.hottubinstyle.co.uk/media/images/product/${item.feature_image}`} className="img-fluid"/>
                                                        
                                                    </Col>
                                                    <Col xs={{ size: 12, offset: 0 }} md={{ size: 8, offset: 0 }}>
                                                        <h2 className="feat-sub-hd">{item.feature_title}</h2>
                                                        <p className="feat-sub-cont">
                                                            { ReactHtmlParser(item.feature_description) }
                                                        </p>
                                                    </Col>
                                                </Row>

                                                ) }  ) 
                                            }

                                        </Container>

                                        
                                </div>



                           

                        </div>  

                       
                      
                        </ReactCSSTransitionGroup>
                </div>
            ); 
        }

        if(this.props.productData == null){
            return (
                <div>
                    <Helmet bodyAttributes={{class: "postPage"}}>
                        <title>{`React Starter Kit`}</title>
                    </Helmet>
                    <InternalTextBanner Heading="" wrapperClass="post" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="post">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.productData == false){
            return (
                <div>
                    <Helmet bodyAttributes={{class: "postPage"}}>
                        <title>{`404 not found - React Starter Kit`}</title>
                    </Helmet>
                    <InternalTextBanner Heading="404 not found" wrapperClass="post" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="post">
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

    }

};

// export default {
//   component: ProductPage
// };

function mapStateToProps(state){
    return {
        productData: state.product
    };
};

function loadData(store, productID){
    return store.dispatch(fetchProduct(productID));
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchProduct, clearPostData })(ProductPage)
};