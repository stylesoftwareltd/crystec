import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import { fetchProduct,clearPostData } from './../actions';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

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

        if(!this.props.postData == false){
            return(
                <div>
                    <Helmet bodyAttributes={{class: "postPage"}}>
                        <title>{`${this.props.postData.name}`}</title>
                    </Helmet>
                    <InternalTextBanner Heading={this.props.postData.name} wrapperClass="post" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="post">
                                    <div className="post_banner">
                                        <img src={`https://stg.uk.hottubinstyle.co.uk/media/images/product/${this.props.postData.file}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            ); 
        }

        if(this.props.postData == null){
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

        if(this.props.postData == false){
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
        postData: state.product
    };
};

function loadData(store, productID){
    return store.dispatch(fetchProduct(productID));
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchProduct, clearPostData })(ProductPage)
};