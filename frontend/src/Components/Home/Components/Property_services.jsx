import React from "react";

const Property_services = () => {
  return (
    <div className="home_container_fluid" id="property_services">
      <div className="home_container">
        <section className="home_section has_slider">
          <div className="home_section_title">
            <h5 className="home_section_title_text1 strip_orange">
              Property Services
            </h5>
          </div>
          <div className="home_prop_service">
            <div className="home_prop_service_slider">
              <div className="home_swiper" id="swiper_property_services">
                <div
                  className="swiper_button_next swiper_button_disabled"
                  tabIndex="-1"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper_wrapper_c5a94b6c83c4aa42"
                  aria-disabled="true"
                >
                  <a href=""></a>
                </div>
                <div
                  className="swiper_button_prev swiper_button_disabled"
                  tabIndex="-1"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper_wrapper_c5a94b6c83c4aa42"
                  aria-disabled="true"
                >
                  <a href=""></a>
                </div>
                <div className="swiper_container swiper_container_initialized swiper_container_horizontal">
                  <div
                    className="swiper_wrapper"
                    id="swiper_wrapper_c5a94b6c83c4aa42"
                    aria-live="polite"
                  >
                    <div
                      className="swiper_slide swiper_slide_active"
                      role="group"
                      aria-label="1 / 4"
                    >
                      <div className="home_prop_service_card card_shadow">
                        <a href="">
                          <div className="home_prop_service_card_graphic">
                            <img
                              className="custom_lazy"
                              src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-loans.jpg    "
                              width="294"
                              height="112"
                              alt=""
                            />
                          </div>
                          <div className="home_prop_service_card_content">
                            <div className="home_prop_service_card_title">
                              Home Loans
                            </div>
                            <div className="home_prop_service_card_text">
                              View &amp; compare your best offers and apply
                              online
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      className="swiper_slide swiper_slide_next"
                      role="group"
                      aria-label="2 / 4"
                    >
                      <div className="home_prop_service_card card_shadow">
                        <a href="" target="_blank">
                          <div className="home_prop_service_card_graphic">
                            <img
                              className="custom_lazy"
                              src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-pay-rent.jpg"
                              width="294"
                              height="112"
                              alt=""
                            />
                          </div>
                          <div className="home_prop_service_card_content">
                            <div className="home_prop_service_card_title">
                              Pay Rent
                            </div>
                            <div className="home_prop_service_card_text">
                              Pay your rent using Credit Card &amp; earn rewards
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      className="swiper_slide"
                      role="group"
                      aria-label="3 / 4"
                    >
                      <div className="home_prop_service_card card_shadow">
                        <a href="">
                          <div className="home_prop_service_card_graphic">
                            <img
                              className="custom-lazy"
                              src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-legal-services.jpg"
                              width="294"
                              height="112"
                              alt=""
                            />
                          </div>
                          <div className="home_prop_service_card_content">
                            <div className="home_prop_service_card_title">
                              Legal Services
                            </div>
                            <div className="home_prop_service_card_text">
                              Get expert legal help for all -related
                              matters
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div
                      className="swiper_slide"
                      role="group"
                      aria-label="4 / 4"
                    >
                      <div className="home_prop_service_card card_shadow">
                        <a href="">
                          <div className="home_prop_service_card_graphic">
                            <img
                              className="custom-lazy"
                              src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-vastu.jpg"
                              width="294"
                              height="112"
                              alt=""
                            />
                          </div>
                          <div className="home_prop_service_card_content">
                            <div className="home_prop_service_card_title">
                              Vastu
                            </div>
                            <div className="home_prop_service_card_text">
                              Consult the best Vastu Experts for your home or
                              office
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <span
                    className="swiper_notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Property_services;
