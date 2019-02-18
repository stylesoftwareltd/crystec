import React, {Component} from 'react';
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

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`Home Page - crystec-spas`}</title>
          {/*<link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossorigin="anonymous"
          />*/}
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
          <section>
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
    <section>
        <div className="container spacer-top spacer-bot">
            <div className="mod-head">
                <h1>Our Models</h1>
            </div>
            {/*<!--1 set Start  -->*/}
            <div className="row m-top">
                {/*<!-- Product 1 Start -->*/}
                <div className="col-md-6 col-sm-12">
                    <div className="col-12 ">
                        <div className="row no-gutters mb-2">
                            <div className="col- prod-head">
                                <h2 className="pr-1">Si</h2>
                            </div>
                            <div className="col-7 prod-ban-h">
                                <h2 className="pl-5">2 Series</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 prod-img">
                            <span>
                          <img src="assets/graphics/homePage/prod-001.jpg" alt="" className="img-fluid" />
                        </span>
                        </div>
                        <div className="col-7 pl-0">
                            <div className="row no-gutters">
                                <div className="col-12 prod-des">
                                    <p>Lorem ipsum <b>2 Series</b> <b>SI</b> adipisicing elit. Dolores doloribus fugit laudantium facilis aperiam sint temporibus dolore dicta ad ea labore, dolorem et dolor laborum ut minima asperiores nesciunt enim. </p>
                                </div>
                            </div>
                            <div className="row no-gutters prod-spec mt-3">
                                <div className="col-12 spec-titles">
                                    <h6><b> Specification :</b> </h6>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Size</p>
                                    </div>
                                    <div className="col-lg-6  col-md-7 col-12 pl-0 pr-0 sub-descript">
                                        <p>2000 x 1350 x 900mm</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Massage Pump</p>
                                    </div>
                                    <div className="col-lg-6 col-12 col-md-7 pl-0 pr-0 sub-descript">
                                        <p>1 x 3 HP(2 speed) Pump</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-7 col-12 pl-0 sub-title">
                                        <p>Total Number of Jets</p>
                                    </div>
                                    <div className="col-lg-2  col-md-3 col-12 pl-0 sub-descript">
                                        <p>40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters more-det">
                                <div className="col"><a href="singleProd.html">  See More Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Product 1 End -->*/}
                {/*<!-- Product 2 Start -->*/}
                <div className="col-md-6 col-sm-12">
                    <div className="col-12 ">
                        <div className="row no-gutters mb-2">
                            <div className="col- prod-head">
                                <h2 className="pr-1">Rush</h2>
                            </div>
                            <div className="col-7 prod-ban-h">
                                <h2 className="pl-5">4 Series</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 prod-img">
                            <span>
                  <img src="assets/graphics/homePage/prod-002.jpg" alt="" className="img-fluid" />
                </span>
                        </div>
                        <div className="col-7 pl-0">
                            <div className="row no-gutters">
                                <div className="col-12 prod-des">
                                    <p>Lorem ipsum adipisicing elit. Dolores doloribus fugit laudantium facilis aperiam sint temporibus dolore dicta ad ea labore, dolorem et dolor laborum ut minima asperiores nesciunt enim. </p>
                                </div>
                            </div>
                            <div className="row no-gutters prod-spec mt-3">
                                <div className="col-12 spec-titles">
                                    <h6><b> Specification :</b> </h6>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Size</p>
                                    </div>
                                    <div className="col-lg-6  col-md-7 col-12 pl-0 pr-0 sub-descript">
                                        <p>2000 x 1350 x 900mm</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Massage Pump</p>
                                    </div>
                                    <div className="col-lg-6 col-12 col-md-7 pl-0 pr-0 sub-descript">
                                        <p>1 x 3 HP(2 speed) Pump</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-7 col-12 pl-0 sub-title">
                                        <p>Total Number of Jets</p>
                                    </div>
                                    <div className="col-lg-2  col-md-3 col-12 pl-0 sub-descript">
                                        <p>40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters more-det">
                                <div className="col"><a href="">  See More Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Product 2 End -->*/}
            </div>
            {/*<!--1 set End  -->*/}
            {/*<!--2 set Start  -->*/}
            <div className="row m-top">
                {/*<!-- Product 3 Start -->*/}
                <div className="col-md-6 col-sm-12">
                    <div className="col-12 ">
                        <div className="row no-gutters mb-2">
                            <div className="col- prod-head">
                                <h2 className="pr-1">Power</h2>
                            </div>
                            <div className="col-7 prod-ban-h">
                                <h2 className="pl-5">5 Series</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 prod-img">
                            <span>
                              <img src="assets/graphics/homePage/prod-001.jpg" alt="" className="img-fluid" />
                            </span>
                        </div>
                        <div className="col-7 pl-0">
                            <div className="row no-gutters">
                                <div className="col-12 prod-des">
                                    <p>Lorem ipsum <b>2 Series</b> <b>SI</b> adipisicing elit. Dolores doloribus fugit laudantium facilis aperiam sint temporibus dolore dicta ad ea labore, dolorem et dolor laborum ut minima asperiores nesciunt enim. </p>
                                </div>
                            </div>
                            <div className="row no-gutters prod-spec mt-3">
                                <div className="col-12 spec-titles">
                                    <h6><b> Specification :</b> </h6>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Size</p>
                                    </div>
                                    <div className="col-lg-6  col-md-7 col-12 pl-0 pr-0 sub-descript">
                                        <p>2000 x 1350 x 900mm</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Massage Pump</p>
                                    </div>
                                    <div className="col-lg-6 col-12 col-md-7 pl-0 pr-0 sub-descript">
                                        <p>1 x 3 HP(2 speed) Pump</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-7 col-12 pl-0 sub-title">
                                        <p>Total Number of Jets</p>
                                    </div>
                                    <div className="col-lg-2  col-md-3 col-12 pl-0 sub-descript">
                                        <p>40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters more-det">
                                <div className="col"><a href="">  See More Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Product 3 End -->*/}
                {/*<!-- Product 4 Start -->*/}
                <div className="col-md-6 col-sm-12">
                    <div className="col-12 ">
                        <div className="row no-gutters mb-2">
                            <div className="col- prod-head">
                                <h2 className="pr-1">Aspire</h2>
                            </div>
                            <div className="col-7 prod-ban-h">
                                <h2 className="pl-5">6 Series</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 prod-img">
                            <span>
                      <img src="assets/graphics/homePage/prod-002.jpg" alt="" className="img-fluid" />
                    </span>
                        </div>
                        <div className="col-7 pl-0">
                            <div className="row no-gutters">
                                <div className="col-12 prod-des">
                                    <p>Lorem ipsum adipisicing elit. Dolores doloribus fugit laudantium facilis aperiam sint temporibus dolore dicta ad ea labore, dolorem et dolor laborum ut minima asperiores nesciunt enim. </p>
                                </div>
                            </div>
                            <div className="row no-gutters prod-spec mt-3">
                                <div className="col-12 spec-titles">
                                    <h6><b> Specification :</b> </h6>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Size</p>
                                    </div>
                                    <div className="col-lg-6  col-md-7 col-12 pl-0 pr-0 sub-descript">
                                        <p>2000 x 1350 x 900mm</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-5 col-12 pl-0 sub-title">
                                        <p>Massage Pump</p>
                                    </div>
                                    <div className="col-lg-6 col-12 col-md-7 pl-0 pr-0 sub-descript">
                                        <p>1 x 3 HP(2 speed) Pump</p>
                                    </div>
                                </div>
                                <div className="row pl-3 w-100">
                                    <div className="col-lg-6 col-md-7 col-12 pl-0 sub-title">
                                        <p>Total Number of Jets</p>
                                    </div>
                                    <div className="col-lg-2  col-md-3 col-12 pl-0 sub-descript">
                                        <p>40</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters more-det">
                                <div className="col"><a href="">  See More Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Product 4 End -->*/}
            </div>
            {/*<!--2 set End  -->*/}
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
    <section>
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

export default {
  component: HomePage
};