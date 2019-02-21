import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProducts} from './../actions';
import webConfig from './../../../webConfig';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';
import { Container, Col, Row, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'; 


const items = [
  {
    src: 'assets/graphics/homePage/slider/head-slider-1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'assets/graphics/homePage/slider/head-slider-2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'assets/graphics/homePage/slider/head-slider-2.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];


class HomePage extends Component {

    componentDidMount(){
        this.props.fetchProducts();
    }
    componentWillUnmount(){
        this.props.clearPostData();
    }

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - crystec-spas`}</title>
        </Helmet>
      );
    }

    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }

    onExiting() {
      this.animating = true;
    }

    onExited() {
      this.animating = false;
    }

    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }

    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
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
                                                  { post.product_specs.map((data, i) => {
                                                        return (
                                                          <div key={i}  className="description-row">
                                                              <div className="spec-title column_5_12">
                                                                  <p>{data.attr_value_name}</p>
                                                              </div>
                                                              <div className="spec-desc column_6_12">
                                                                  <p>{data.product_attr_value}</p>
                                                              </div>    
                                                          </div>
                                                        );
                                                    })
                                                  }
                                                </div>
                                        </div>

                                        <div className="products-more">
                                            <div>
                                                <a href={`${webConfig.siteURL}/products/${post.info.uri_slug}`}>See More Details</a>
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

      const { activeIndex } = this.state;

      const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.caption}
          >
            <img src={item.src} alt={item.altText} />
          </CarouselItem>
        );
      });

      return (
        <section className="">
          {this.head()}


          {/*home slider start*/}
          <section>
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className="w-100" />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </section>
          {/*home slider end*/}



          {/*<!-- 2. Main Intro Start -->*/}
          <section id="about_us">
            <Container>
              {/*<!-- 2. Main Intro Start -->*/}
              <section>
                  <Container>
                      <div className="col-md-12 spacer-top spacer-bot intro-1h">
                          <img src="assets/graphics/homePage/Asset2.png" alt="" className="img-fluid" />
                      </div>
                          <div className="row spacer-bot">
                              <div className="col-lg-4  col-sm-6 col-12">
                                  <p className="text-align-j intro-1-txt">
                                      From the moment you step into a Crystec Spa, you don’t just experience the warmth of the crystal-clear water, you also get that warm feeling of satisfaction, as you settle back in to the comfortable seating and enjoy its sleek looks that have evolved from the dedication to design & technology, championed by a team of expert enthusiasts. 
The Crystec team of course are highly skilled at ensuring the Spa has such beautiful curves, along with expert design on each seat or lounger, positioning just the right number, type and size of massage jets to easily and thoroughly work away at removing those chills, aches and pains, from a long hard day.

                                  </p>
                              </div>
                              <div className="col-lg-4  col-sm-6 col-12">
                                  <p className="text-align-j intro-1-txt">
                                      Crystec Spas know the right atmosphere and moods need to be created, and along with the ultimate lighting, have added the right sound system for strong beats for your parties, or softened relaxed sounds for those tranquil moments.

A Crystec Spa appreciates your investment, so it is also good to know the high quality of manufacture, using only big brand components, to give peace of mind for the Spa long into the future.

Finally, a Crystec Spa is built to cost you less, with an insulation process carefully thought out and tested to ensure it can expect to keep your running cost to a minimum.

So, with all the above in mind, all that’s left to do, is choose the perfect Crystec Spa for you and your family.

                                  </p>
                              </div>
                              <div className=" col-lg-4   col-md-12 col-12 intro-2">
                                  <img src="assets/graphics/homePage/Intro1.png" alt="" className="img-fluid-1" />
                              </div>
                          </div>
                  </Container>
              </section>
              {/*<!-- Main Intro End -->*/}
            </Container>
          </section>
          {/*<!-- Main Intro End -->*/}



              {/*<!-- 3 Water Tech Intro Start-->*/}
              <section>
                  <div className="container-fluid water-tech">
                      <Container>
                          <div className="row">
                              <div className="col-xl-9 col-lg-9 col-md-12 w-tec-int">
                                  <div>
                                      <div className="water-tech-h">
                                          <h1>
                          Crystal Clear <br/> Water Technology
                        </h1>
                                          <p className="text-align-j">
                                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut corrupti fugiat illum, minima fuga vero cumque eos, tempora, aperiam aut cum iusto sunt perferendis nam corporis nobis. Commodi veniam soluta illo impedit quaerat nulla praesentium, reprehenderit iste fugiat magnam mollitia, non similique voluptatem hic corrupti sed minima vitae? Eum, molestiae.
                                          </p>
                                      </div>
                                      <div className="row m-top">
                                          <div className="col-md-6 sm-12">
                                              <img src="assets/graphics/homePage/PFDJJ69d.JPG" alt="" className="img-fluid" />
                        </div>
                                    <div className="col-md-6 sm-12">
                                        <p className="text-align-j">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut corrupti fugiat illum, minima fuga vero cumque eos, tempora, aperiam aut cum iusto sunt perferendis nam corporis nobis. Commodi veniam soluta illo impedit quaerat nulla praesentium, reprehenderit iste fugiat magnam mollitia, non similique voluptatem hic corrupti sed minima vitae? Eum, molestiae.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3 col-md-12 w-tech-img">
                            <div className="row">
                                <div className="col-lg-12 col-md-4 col-col-sm-4 col-4">
                                    <img src="assets/graphics/homePage/w-tech-1.JPG" alt="" className="img-fluid" />
                                          </div>
                                    <div className="col-lg-12 col-md-4 col-sm-4 col-4">
                                        <img src="assets/graphics/homePage/w-tech-1.JPG" alt="" className="img-fluid" />
                                              </div>
                                        <div className="col-lg-12 col-md-4 col-sm-4 col-4">
                                            <img src="assets/graphics/homePage/w-tech-3.JPG" alt="" className="img-fluid" />
                                                  </div>
                                        </div>
                                    </div>
                                </div>
                        </Container>
                    </div>
              </section>
              {/*<!-- Water Tech Intro End-->*/}



              {/*<!-- 4. Models Models Section Start -->*/}
    <section id="our_models">
        <div className="container spacer-top spacer-bot">
            <div className="mod-head">
                <h1>Our Models</h1>
            </div>
            <div className="products">
              {this.renderProducts()}
            </div>

        </div>
    </section>
    {/*<!-- Models Models Section End -->*/}


    {/*<!-- 5. Full Width Image Section Start -->*/}
    <section>
        <div className="container-fluid p-0">
            <img src="assets/graphics/homePage/img-banner.jpg" alt="" className="img-fluid  d-block w-100" />
        </div>
    </section>
    {/*<!-- Full Width Image Section End -->*/}


     {/*<!-- 6. Offers Section Start  -->*/}
    <section id="what_we_offer">
        <div className="container spacer-top spacer-bot">
            <h1 className="off-head">What we offer</h1>
            <div className="row -top">
                {/*<!-- Set 1 Start -->*/}
                <div className="col-md-6 col-12">
                    <div className="col-12">
                        {/*<!-- 1 start -->*/}
                        <div className="row row-f-end m-bot-off">
                            <div className="col-3 off-ico">
                                <img src="assets/graphics/homePage/Asset 5.png" alt="" className="img-fluid" />
                  </div>
                                <div className="col off-txt pl-0">
                                    <h2>Free Nordic Cover</h2>
                                </div>
                            </div>
                            {/*<!-- 1 End -->*/}
                            {/*<!-- 2 start -->*/}
                            <div className="row row-f-end m-bot-off">
                                <div className="col-3 off-ico">
                                    <img src="assets/graphics/homePage/Asset 5.png" alt="" className="img-fluid" />
                  </div>
                                    <div className="col off-txt  pl-0">
                                        <h2>Free Steps</h2>
                                    </div>
                                </div>
                                {/*<!-- 2 End -->*/}
                                {/*<!-- 3 start -->*/}
                                <div className="row row-f-end m-bot-off">
                                    <div className="col-3 off-ico">
                                        <img src="assets/graphics/homePage/Asset 5.png" alt="" className="img-fluid" />
                  </div>
                                        <div className="col off-txt  pl-0">
                                            <h2>Free Filters</h2>
                                        </div>
                                    </div>
                                    {/*<!-- 3 End -->*/}
                                </div>
                            </div>
                            {/*<!-- Set 1 End -->*/}
                            {/*<!-- Set 2 Start -->*/}
                            <div className="col-md-6 col-12">
                                <div className="col-12">
                                    {/*<!-- 1 start -->*/}
                                    <div className="row row-f-end m-bot-off">
                                        <div className="col-3 off-ico">
                                            <img src="assets/graphics/homePage/Asset 5.png" alt="" className="img-fluid" />
                    </div>
                                            <div className="col off-txt  pl-0">
                                                <h2>Free Chemical pack</h2>
                                            </div>
                                        </div>
                                        {/*<!-- 1 End -->*/}
                                        {/*<!-- 2 start -->*/}
                                        <div className="row row-f-end m-bot-off">
                                            <div className="col-3 off-ico">
                                                <img src="assets/graphics/homePage/Asset 5.png" alt="" className="img-fluid" />
                    </div>
                                                <div className="col off-txt  pl-0">
                                                    <h2>Free Delivery</h2>
                                                </div>
                                            </div>
                                            {/*<!-- 2 End -->*/}
                                            {/*<!-- 3 start -->*/}
                                            <div className="row row-f-end m-bot-off">
                                                <div className="col-3 off-ico">
                                                    <img src="assets/graphics/homePage/Asset 5.png" alt="" className="img-fluid" />
                    </div>
                                                    <div className="col off-txt  pl-0">
                                                        <h2>Free Positioning & Installation</h2>
                                                    </div>
                                                </div>
                                                {/*<!-- 3 End -->*/}
                                            </div>
                                        </div>
                                        {/*<!-- Set 2 End -->*/}
                                    </div>
                                </div>
    </section>
    {/*<!-- Offers Section End  -->*/}

        </section>
      );
    }
  }

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
    component: connect(mapStateToProps, { fetchProducts })(HomePage)
};