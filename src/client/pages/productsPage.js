import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {fetchProducts} from './../actions';
import webConfig from './../../../webConfig';
import ReactHtmlParser from 'react-html-parser';
import { Container } from 'reactstrap';

class Products extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "productsPage"}}>
            <title>{`Products - Crystec`}</title>
            </Helmet>
        );
    }

    componentDidMount(){
        this.props.fetchProducts();
    }


    renderProducts(){
        if(this.props.pageData != false){
        return this.props.pageData.map((post, index) => {

            const toShow = (post.info.description.length > 0 ) ? post.info.description.substring(0,200)+"..." : '';

            return (
                    <div key={index} className="product">
                        <div className="wrap">

                            <div className="wrp-title">
                                <div className="product-cat column_1_12">
                                    <h2>{post.group_name}</h2>
                                </div>

                                <div className="product-series column_10_12">
                                   <h2>{post.name}</h2>
                                </div>
                            </div>

                            <div className="product-title"><a href= {`${webConfig.siteURL}/products/${post.info.product_id}`} > {post.info.name} </a></div>

                            <div className="products-wrapper">

                                    <div className="img column_4_12">
                                        <img  src={`https://stg.uk.hottubinstyle.co.uk/media/images/product/${post.info.file}`}  className="products-image"/>
                                    </div>
                                    
                                    <div className="products-details column_8_12">

                                        <div className="products-description">
                                            { ReactHtmlParser(toShow) }
                                        </div>
                                        
                                        <div className="products-specs">
                                                <div className="spec-head">
                                                        <h5>Specification</h5>
                                                </div>

                                                <div className="products-specification">
                                                    <div className="description-row">
                                                        <div className="spec-title column_5_12">
                                                            <p>Size</p>
                                                        </div>
                                                        <div className="spec-desc column_6_12">
                                                            <p>2000 x 1350 x 900mm</p>
                                                        </div>    
                                                    </div>
                                                    <div className="description-row">
                                                        <div className="spec-title column_5_12">
                                                            <p>Massage Pump</p>
                                                        </div>
                                                        <div className="spec-desc column_6_12">
                                                            <p>1 x 3 HP(2 speed) Pump</p>
                                                        </div>    
                                                    </div>
                                                    <div className="description-row">
                                                        <div className="spec-title column_5_12">
                                                            <p>Total Number of Jets</p>
                                                        </div>
                                                        <div className="spec-desc column_6_12">
                                                            <p>40</p>
                                                        </div>    
                                                    </div>
                                                </div>
                                        </div>

                                        <div className="products-more">
                                            <div>
                                                <a href={`${webConfig.siteURL}/products/${post.info.product_id}`}>See More Details</a>
                                            </div>
                                        </div>

                                    </div>
                            </div>
                        </div>
                    </div>
            );
        })
        }
    }

    render() {
        if(!this.props.pageData == false){
            return(
                <div>
                    {this.head()}
                    {/*<InternalTextBanner Heading="Products" wrapperClass="products" />*/}
                    <br/>
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="products">
                                    {this.renderProducts()}
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.pageData == null){
            return (
                <div>
                    {this.head()}
                    <InternalTextBanner Heading="" wrapperClass="products" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_8_12">
                                <div className="products">
                                    
                                </div>
                            </div>
                            <div className="column column_4_12">
                                
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.pageData == false){
            return (
                <div>
                    {this.head()}
                    <InternalTextBanner Heading="404 Not found" wrapperClass="products" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_8_12">
                                <div className="products">
                                    
                                </div>
                            </div>
                            <div className="column column_4_12">
                                
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    }

};


function mapStateToProps(state){
    return {
        pageData: state.products.arr
    };
};

function loadData(store){
    return store.dispatch(fetchProducts());
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchProducts })(Products)
};