import React from "react";

function test() {
  return (
    <section
      class="ftco-section-counter img"
      style="background-image: url(images/bg_3.jpg);"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 heading-section heading-section-white mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span class="subheading">Great Reviews for our services</span>
            <h2 class="mb-0">Technical Statistics</h2>
          </div>
        </div>
        <div class="row section-counter">
          <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div
              class="counter-wrap-2"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div class="icon">
                <span class="flaticon-heart"></span>
              </div>
              <h2 class="number">
                <small>$</small>
                <span class="countup">60</span>
                <small>M</small>
              </h2>
              <span class="caption">Fund Raised</span>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div
              class="counter-wrap-2"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div class="icon">
                <span class="flaticon-ecosystem"></span>
              </div>
              <h2 class="number">
                <span class="countup">9200</span>
              </h2>
              <span class="caption">Completed Projects </span>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div
              class="counter-wrap-2"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="icon">
                <span class="flaticon-donation"></span>
              </div>
              <h2 class="number">
                <span class="countup">5800</span>
              </h2>
              <span class="caption">Donation</span>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div
              class="counter-wrap-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div class="icon">
                <span class="flaticon-charity"></span>
              </div>
              <h2 class="number">
                <span class="countup">2750</span>
              </h2>
              <span class="caption">Volunteer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default test;
