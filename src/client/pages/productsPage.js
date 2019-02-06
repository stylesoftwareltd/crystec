import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import {fetchProducts} from './../actions';
import webConfig from './../../../webConfig';

class Products extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "productsPage"}}>
            <title>{`Products - Crystec`}</title>
            </Helmet>
        );
    }

    componentDidMount(){
        console.log('im mounted');
        this.props.fetchProducts();
    }


    renderProducts(){
        if(this.props.pageData != false){
        return this.props.pageData.map((post, index) => {
            return (
                <div key={index} className="post">
                    <div className="wrap">
                    <a href={`${webConfig.siteURL}/products/${post.product_id}`} > {post.name} </a>
                        <div className="img">
                            <img src={`https://stg.uk.hottubinstyle.co.uk/media/images/product/${post.file}`} />
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
                    <InternalTextBanner Heading="Products" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="posts">
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
                    <InternalTextBanner Heading="" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_8_12">
                                <div className="posts">
                                    
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
                    <InternalTextBanner Heading="404 Not found" wrapperClass="posts" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_8_12">
                                <div className="posts">
                                    
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