import React from "react";
import './PropContainer.css'

const Propdetails = () => {
  return (
    <section className="pdb-sec">
      <div className="fw">
        <div className="pd-div1">
          <div className="pdb-img">
            <div
              className="blur-bg lazyloaded"
              data-bg="https://dynamic.realestateindia.com/prop_images/1700921/1028329_1.jpg"
              style={{
                "background-image":
                  "url(https://dynamic.realestateindia.com/prop_images/1700921/1028329_1.jpg)",
              }}
            ></div>
            <img
              className=" ls-is-cached lazyloaded"
              src="https://dynamic.realestateindia.com/prop_images/1700921/1028329_1.jpg"
              data-src="https://dynamic.realestateindia.com/prop_images/1700921/1028329_1.jpg"
              alt="3 BHK 1650 Sq.ft. Builder Floor for Sale in Sector 63 A Gurgaon"
              height="660"
              width="990"
            />{" "}
            <div className="rera">
              <i className="fa fa-check"></i> <span>RERA</span>
              <span
                className="cp vam"
                data-tooltip=""
                data-tooltip-label="Reg No. RC/REP/HARERA/GGM/390/122/2020/06&nbsp; / &nbsp; : RC/REP/HARERA/GGM/391/123/2020/07"
              >
                <i className="fa fa-info-circle"></i>
              </span>
            </div>
          </div>

          <div className="pd-si">
            <h1 className="pd-title">
              3 BHK 1650 Sq.ft. Builder Floor for Sale in Sector 63 A Gurgaon
            </h1>
            <p className="pd-location">
              <i className="fa fa-map-marker"></i> Sector 63 A, Gurgaon, Haryana
              by{" "}
              <span
                className="u ts0"
                style={{'color': 'rgb(204, 51, 51)', '--darkreader-inline-color':'#d14747'}}
                data-darkreader-inline-color=""
              >
                Acres property management
              </span>{" "}
              - <a>View Map</a>
            </p>
            <p className="pd-price">
              <span className="price">
                <i className="fa fa-inr"></i> 2.94 Cr.
              </span>
              @ <i className="fa fa-inr"></i>17,820{" "}
              <span
                className="icon-fv"
                id="prop_detail_fav"
                onClick="addFavouriteProperty('1028329','updating','loading');"
              ></span>
            </p>
            <div className="pd-btn-group">
              <a href="" className="darkbg1" title="Get Phone No.">
                {" "}
                Get Phone No.{" "}
              </a>
              <a href="" className="darkbg2" title="Enquiry Now">
                {" "}
                Enquiry Now{" "}
              </a>
            </div>
            <div className="pd-share">
              <div>
                <a href="" onClick="Requestissue('1028329','')">
                  <i className="fa fa-info-circle dib vam red mr5px"></i> Share
                  Property Feedback
                </a>
                <a
                  href=""
                  onClick="Shareproperty('1028329','/property-detail/3bkh-builder-floor-for-sale-in-sector-63a-gurgaon-in-birla-navya-1650-sq-ft-2-94-cr-1028329.htm')"
                >
                  <i className="fa fa-share-alt dib vam mr5px blue"></i> Share
                  this Property
                </a>
              </div>
              <div className="pdp-pd">
                Posted On : <span>10/03/2022</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pd-div2">
          <ul className="pdoi-list">
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img1.jpg"
                alt=""
                width="17"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Price</span> <i className="fa fa-inr"></i> 2.94 Cr.
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img2.jpg"
                alt=""
                width="26"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Location</span> Sector 63 A, Gurgaon, Haryana
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img3.jpg"
                alt=""
                width="30"
                height="30"
              />
              <div className="pdoi-lbl">
                <span> Bedrooms</span> 3 BHK
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img11.jpg"
                alt=""
                width="30"
                height="30"
              />
              <div className="pdoi-lbl">
                <span> Bathrooms</span> 3 Baths
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img4.jpg"
                alt=""
                width="30"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Built Up Area</span> 1650 Sq.ft.
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img6.jpg"
                alt=""
                width="28"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Ownership</span> Agent
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img7.jpg"
                alt=""
                width="36"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Sale Type</span> New
              </div>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img8.jpg"
                alt=""
                width="30"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Type</span> Builder Floors
              </div>
            </li>
            <li>
              <a
                href="https://www.realestateindia.com/projects/birla-navya-by-birla-estates-in-sector-63a-gurgaon/"
                title="Birla Navya"
              >
                <img
                  loading="lazy"
                  src="https://static.realestateindia.com/rei/images/pdoi-img12.jpg"
                  alt=""
                  width="30"
                  height="27"
                />
                <div className="pdoi-lbl">
                  <span>Project &amp; Society</span> Birla Navya
                </div>
              </a>
            </li>
            <li>
              <img
                loading="lazy"
                src="https://static.realestateindia.com/rei/images/pdoi-img10.jpg"
                alt=""
                width="26"
                height="30"
              />
              <div className="pdoi-lbl">
                <span>Property on Floor</span> 2nd
              </div>
            </li>
          </ul>
        </div>
        <div className="pd-div3">
          <div className="pd-div3-left">
            <div className="pd-div4">
              <div className="pd-div4-title">
                <h2>About Property</h2>
              </div>
              <div className="pd-ap">
                <p>
                  Igbc gold rated building <br />
                  300+ premium floor
                  <br />
                  biggest clubhouse 150000 sq ft
                  <br />
                  gated community with multi tier security
                  <br />
                  2 aprtment per floor
                  <br />
                  all day dining- breakfast, lunch ,dinner.
                  <br />
                  clp plan <br />
                  possession in 2025
                </p>
                <ul className="pd-ap-list">
                  <li>
                    Price :{" "}
                    <span>
                      <i className="fa fa-inr"></i> 2.94 Cr.
                    </span>
                  </li>
                  <li>
                    Project &amp; Society :{" "}
                    <span>
                      <a
                        href="https://www.realestateindia.com/projects/birla-navya-by-birla-estates-in-sector-63a-gurgaon/"
                        title="Birla Navya"
                      >
                        Birla Navya
                      </a>
                    </span>
                  </li>
                  <li>
                    Status : <span>Under Construction</span>
                  </li>
                  <li>
                    Sale Type : <span>New</span>
                  </li>
                  <li>
                    Ownership : <span>Agent</span>
                  </li>
                  <li>
                    Property on Floor : <span>2nd</span>
                  </li>
                  <li>
                    Total Floors : <span>4</span>
                  </li>
                </ul>
              </div>
              <div className="pd-lankmark">
                <h3 className="pd-lankmark-title">Land Mark :</h3>
                <ul className="pd-lankmark-list">
                  <li>
                    <div className="pd-landmark-img">
                      <img
                        loading="lazy"
                        src="https://static.realestateindia.com/rei/images/pd-landmark2.jpg"
                        alt=""
                        width="13"
                        height="13"
                      />
                    </div>
                    <div className="pd-landmark-info">
                      Airport <span>15 kms</span>
                    </div>
                  </li>
                  <li>
                    <div className="pd-landmark-img">
                      <img
                        loading="lazy"
                        src="https://static.realestateindia.com/rei/images/pd-landmark6.jpg"
                        alt=""
                        width="12"
                        height="17"
                      />
                    </div>
                    <div className="pd-landmark-info">
                      Railway Station <span>5 kms</span>
                    </div>
                  </li>
                  <li>
                    <div className="pd-landmark-img">
                      <img
                        loading="lazy"
                        src="https://static.realestateindia.com/rei/images/pd-landmark4.jpg"
                        alt=""
                        width="17"
                        height="16"
                      />
                    </div>
                    <div className="pd-landmark-info">
                      School <span>1 kms</span>
                    </div>
                  </li>
                  <li>
                    <div className="pd-landmark-img">
                      <img
                        loading="lazy"
                        src="https://static.realestateindia.com/rei/images/pd-landmark5.jpg"
                        alt=""
                        width="16"
                        height="18"
                      />
                    </div>
                    <div className="pd-landmark-info">
                      Shopping Mall <span>1 kms</span>
                    </div>
                  </li>
                  <li>
                    <div className="pd-landmark-img">
                      <img
                        loading="lazy"
                        src="https://static.realestateindia.com/rei/images/pd-landmark9.jpg"
                        alt=""
                        width="18"
                        height="18"
                      />
                    </div>
                    <div className="pd-landmark-info">
                      Metro <span>3 kms</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pd-ap-report">
                <a href="" className="btm-ca">
                  Contact Agent
                </a>
                <div className="report">
                  <span className="report-lbl">Report : </span>
                  <a className="report-val" href="">
                    Sold Out
                  </a>
                  <a className="report-val" href="">
                    Wrong Info
                  </a>
                </div>
              </div>
            </div>
            <div className="pd-div4">
              <div className="pd-div4-title">
                <h2>Ameniities</h2>
              </div>
              <ul className="pda-list">
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/reserved-parking.jpg"
                      alt="Car Parking"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Car Parking</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/power-backup.jpg"
                      alt="Power Backup"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Power Backup</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/home-security.jpg"
                      alt="24 x 7 Security"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">24 x 7 Security</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/lift.jpg"
                      alt="Lift"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Lift</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/fitness-centre.jpg"
                      alt="Fitness Centre/Gym"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Fitness Centre/Gym</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/club-house.jpg"
                      alt="Club House"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Club House</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/intercom.jpg"
                      alt="Intercom"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Intercom</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/maintenance-staff.jpg"
                      alt="Maintenance Staff"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Maintenance Staff</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/vastu.jpg"
                      alt="Vastu Compliant"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Vastu Compliant</p>
                  </div>
                </li>
                <li>
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/fire-alarm.jpg"
                      alt="Security / Fire Alarm"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Security / Fire Alarm</p>
                  </div>
                </li>
                <li className="dn ameShowMore">
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/piped-gas.jpg"
                      alt="Piped Gas"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Piped Gas</p>
                  </div>
                </li>
                <li className="dn ameShowMore">
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/wifi-connectivity.jpg"
                      alt="Wi-Fi Connectivity"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Wi-Fi Connectivity</p>
                  </div>
                </li>
                <li className="dn ameShowMore">
                  <div className="pda">
                    <img
                      className="pda-img"
                      src="https://static.realestateindia.com/rei/images/swimming-pool.jpg"
                      alt="Swimming Pool"
                      width="38"
                      height="28"
                    />
                    <p className="pda-name">Swimming Pool</p>
                  </div>
                </li>{" "}
              </ul>
              <a href="" className="btn-vma" id="viewMoreAme">
                View More Amenities
              </a>
            </div>
            <div className="pd-div4">
              <div className="pd-div4-title">
                <h2>Agent Details</h2>
              </div>

              <div className="pd-agent">
                <div className="pd-agent-logo">
                  <img
                    className=" ls-is-cached lazyloaded"
                    src="https://dynamic.realestateindia.com/comp_logo/1700921_82599-100x100.jpg"
                    data-src="https://dynamic.realestateindia.com/comp_logo/1700921_82599-100x100.jpg"
                    alt=""
                    width=""
                    height=""
                  />
                </div>
                <div className="pd-agent-name">
                  <a
                    href="https://www.realestateindia.com/profile/acres-property-management-in-block-c-sector-26-noida-1700921/"
                    target="_blank"
                  >
                    <p className="pda-name">Acres property management</p>
                  </a>
                  <p className="pda-phone">Binod prasad</p>
                </div>
              </div>
              <div className="other_detail_show dn">
                <ul className="pd-ad-list">
                  <li>
                    <span title="title">Deals in : </span>Sale of Residential
                    Property &amp; Commercial Property
                  </li>
                  <li>
                    <span className="title">Areas of Operation : </span>Sohna,
                    Sohna Road, DLF Phase I, Golf Course Road, Sector 15, Sector
                    37, Sector 70, Sector 66, Sector 91, Sector 86, Sector 95,
                    Sector 67, Sector 92, Sector 106, Sector 109, Sector ...
                  </li>

                  <li>
                    We are one of the leading property developers into the real
                    estate sectors.
                    <br />
                    We are only sale 100% legel property.{" "}
                  </li>
                </ul>
                <ul className="pd-ad-list fa-ul">
                  <li>
                    <i className="fa fa-li fa-map-marker fa-fw"></i> Unit no 259
                    2nd ,floor spaze i- tech park , sec- 49, Sector 49, Gurgaon
                  </li>
                  <li>
                    <i className="fa fa-li fa-globe fa-fw"></i>{" "}
                    <a
                      className="web-url"
                      href="http://www.acresproperty.co.in"
                      target="_blank"
                    >
                      http://www.acresproperty.co.in
                    </a>
                  </li>
                </ul>
                <div className="mt10px ac-dib ac-mr5px lc-mr0">
                  <span
                    className="white p3px5px ts0 lh11em"
                    style={{'background': 'rgb(22, 160, 133)', '--darkreader-inline-bgimage': 'initial', '--darkreader-inline-bgcolor':'#12806a'}}
                    data-darkreader-inline-bgimage=""
                    data-darkreader-inline-bgcolor=""
                  >
                    RERA STATUS
                  </span>{" "}
                  <span
                    className="cp"
                    data-tooltip=""
                    data-tooltip-label="This displayed RERA status is as posted by the User (Seller / Agent / Builder). It may or may not be RERA certified. Before approaching the User, you are requested to check it carefully and verify it independently."
                  >
                    <i className="fa fa-info-circle cp large gray dib vam"></i>
                  </span>{" "}
                  <span className="gray ts0">Reg No. UPRERAAGT19148</span>
                </div>

                <div className="mt20px">
                  <a
                    onClick="PropertyclassNameified_EnqueryPopup('send_prop_enq_contact','1700921', '1028329','https://www.realestateindia.com/property-detail/3bkh-builder-floor-for-sale-in-sector-63a-gurgaon-in-birla-navya-1650-sq-ft-2-94-cr-1028329.htm', '');"
                    className="btm-ca"
                  >
                    Contact Agent
                  </a>
                </div>
              </div>
            </div>

            <div className="pd-div4">
              <div className="pd-div4-title">
                <h2>Disclaimer</h2>
              </div>
              <div className="pd-disclaimer">
                All the information displayed is as posted by the User and
                displayed on the website for informational purposes only.
                RealEstateIndia makes no representations and warranties{" "}
                <span style={{ display: "none" }}>
                  of any kind, whether expressed or implied, for the Services
                  and in relation to the accuracy or quality of any information
                  transmitted or obtained at RealEstateIndia.com. You are hereby
                  strongly advised to verify all information including visiting
                  the relevant RERA website before taking any decision based on
                  the contents displayed on the website.
                </span>{" "}
                <a href="" className="red fw6">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="pd-div3-right">
            <div className="right_form">
              <div className="pdcs-div">
                <div className="pdcs-heading">Contact Seller</div>
                <form
                  className="ffos gray"
                  id="detailenqfrm"
                  name="detailenqfrm"
                  novalidate="novalidate"
                >
                  <div className="pdcs-body" >
                  <input
                    type="hidden"
                    name="country"
                    id="country1"
                    value="+91"
                  />
                  <input type="hidden" name="loginusr" value="new_user" />
                  <input type="hidden" name="city_id" value="951" />
                  <input type="hidden" name="catg_id" value="" />
                  <input type="hidden" name="mailto" value="1700921" />
                  <input type="hidden" name="prop_id" value="1028329" />
                  <input type="hidden" name="proj_id" value="" />
                  <input
                    type="hidden"
                    name="id"
                    id="id"
                    value="send_prop_enq_contact"
                  />
                  <input
                    type="hidden"
                    name="action_type"
                    value="send_inquiry"
                  />
                  <input
                    type="hidden"
                    name="page_type"
                    id="page_type"
                    value=""
                  />
                  <input type="hidden" name="bhk_title" value="" />
                  <input
                    type="hidden"
                    name="page_url"
                    value="https://www.realestateindia.com/property-detail/3bkh-builder-floor-for-sale-in-sector-63a-gurgaon-in-birla-navya-1650-sq-ft-2-94-cr-1028329.htm"
                  />

                  <div className="pd-agent">
                    <a id="ContactDealer"></a>
                    <div className="pd-agent-logo">
                      <img
                        className=" lazyloaded"
                        src="https://dynamic.realestateindia.com/comp_logo/1700921_82599-100x100.jpg"
                        data-src="https://dynamic.realestateindia.com/comp_logo/1700921_82599-100x100.jpg"
                        alt=""
                      />
                    </div>
                    <div className="pd-agent-name sc">
                      <p className="pda-name">Acres property management </p>
                      <p className="pda-phone">Agent&nbsp; / +91-87502xxxxx </p>
                    </div>
                  </div>

                  <ul
                    className="bdr lightbdrerror p5px dif mt20px small dn"
                    id="errorMsg2"
                  ></ul>
                  <div className="pdca-form">
                    <div className="pdca-ff">
                      <input
                        type="text"
                        className="caif-txt"
                        placeholder="Name"
                        name="fname2"
                        id="fname2"
                        value=""
                        maxlength="100"
                      />
                    </div>

                    <div className="pdca-ff">
                      <input
                        type="email"
                        className="caif-txt"
                        placeholder="Email Address"
                        name="user_name2"
                        id="user_name2"
                        value=""
                        maxlength="100"
                      />
                    </div>

                    <div className="pdca-ff">
                      <div className="pdca-phone">
                        <label className="isd-code" id="isdCode2">
                          +91
                        </label>
                        <ul
                          className="isd-list"
                          id="code-list2"
                          style={{'display': 'none'}}
                        >
                          <li data-value="+91">+91 India</li>
                          <li data-value="+93">+93 Afghanistan</li>
                          <li data-value="+335">+335 Albania</li>
                          <li data-value="+213">+213 Algeria</li>
                          <li data-value="+684">+684 American Samoa</li>
                          <li data-value="+376">+376 Andorra</li>
                          <li data-value="+244">+244 Angola</li>
                          <li data-value="+264">+264 Anguilla</li>
                          <li data-value="+672">+672 Antarctica</li>
                          <li data-value="+268">+268 Antigua and Barbuda</li>
                          <li data-value="+54">+54 Argentina</li>
                          <li data-value="+374">+374 Armenia</li>
                          <li data-value="+297">+297 Aruba</li>
                          <li data-value="+61">+61 Australia</li>
                          <li data-value="+43">+43 Austria</li>
                          <li data-value="+994">+994 Azerbaijan</li>
                          <li data-value="+242">+242 Bahamas</li>
                          <li data-value="+973">+973 Bahrain</li>
                          <li data-value="+880">+880 Bangladesh</li>
                          <li data-value="+246">+246 Barbados</li>
                          <li data-value="+375">+375 Belarus</li>
                          <li data-value="+32">+32 Belgium</li>
                          <li data-value="+501">+501 Belize</li>
                          <li data-value="+229">+229 Benin</li>
                          <li data-value="+441">+441 Bermuda</li>
                          <li data-value="+975">+975 Bhutan</li>
                          <li data-value="+591">+591 Bolivia</li>
                          <li data-value="+387">+387 Bosnia and Herzegowina</li>
                          <li data-value="+267">+267 Botswana</li>
                          <li data-value="+47">+47 Bouvet Island</li>
                          <li data-value="+55">+55 Brazil</li>
                          <li data-value="+246">
                            +246 British Indian Ocean Territory
                          </li>
                          <li data-value="+673">+673 Brunei Darussalam</li>
                          <li data-value="+359">+359 Bulgaria</li>
                          <li data-value="+226">+226 Burkina Faso</li>
                          <li data-value="+257">+257 Burundi</li>
                          <li data-value="+855">+855 Cambodia</li>
                          <li data-value="+237">+237 Cameroon</li>
                          <li data-value="+1">+1 Canada</li>
                          <li data-value="+238">+238 Cape Verde</li>
                          <li data-value="+345">+345 Cayman Islands</li>
                          <li data-value="+236">
                            +236 Central African Republic
                          </li>
                          <li data-value="+235">+235 Chad</li>
                          <li data-value="+56">+56 Chile</li>
                          <li data-value="+86">+86 China</li>
                          <li data-value="+61">+61 Christmas Island</li>
                          <li data-value="+61">+61 Cocos (Keeling) Islands</li>
                          <li data-value="+57">+57 Colombia</li>
                          <li data-value="+269">+269 Comoros</li>
                          <li data-value="+242">+242 Congo</li>
                          <li data-value="+243">
                            +243 Congo, The Democratic Republic Of The
                          </li>
                          <li data-value="+682">+682 Cook Islands</li>
                          <li data-value="+506">+506 Costa Rica</li>
                          <li data-value="+225">+225 Cote</li>
                          <li data-value="+385">
                            +385 Croatia (local name: Hrvatska)
                          </li>
                          <li data-value="+357">+357 Cyprus</li>
                          <li data-value="+420">+420 Czech Republic</li>
                          <li data-value="+45">+45 Denmark</li>
                          <li data-value="+253">+253 Djibouti</li>
                          <li data-value="+767">+767 Dominica</li>
                          <li data-value="+809">+809 Dominican Republic</li>
                          <li data-value="+670">+670 East Timor</li>
                          <li data-value="+593">+593 Ecuador</li>
                          <li data-value="+20">+20 Egypt</li>
                          <li data-value="+503">+503 El Salvador</li>
                          <li data-value="+240">+240 Equatorial Guinea</li>
                          <li data-value="+291">+291 Eritrea</li>
                          <li data-value="+372">+372 Estonia</li>
                          <li data-value="+251">+251 Ethiopia</li>
                          <li data-value="+500">
                            +500 Falkland Islands (Malvinas)
                          </li>
                          <li data-value="+298">+298 Faroe Islands</li>
                          <li data-value="+679">+679 Fiji</li>
                          <li data-value="+358">+358 Finland</li>
                          <li data-value="+33">+33 France</li>
                          <li data-value="+590">+590 France Metropolitan</li>
                          <li data-value="+594">+594 French Guiana</li>
                          <li data-value="+689">+689 French Polynesia</li>
                          <li data-value="+590">
                            +590 French Southern Territories
                          </li>
                          <li data-value="+241">+241 Gabon</li>
                          <li data-value="+220">+220 Gambia</li>
                          <li data-value="+995">+995 Georgia</li>
                          <li data-value="+49">+49 Germany</li>
                          <li data-value="+233">+233 Ghana</li>
                          <li data-value="+350">+350 Gibraltar</li>
                          <li data-value="+30">+30 Greece</li>
                          <li data-value="+299">+299 Greenland</li>
                          <li data-value="+809">+809 Grenada</li>
                          <li data-value="+590">+590 Guadeloupe</li>
                          <li data-value="+1">+1 Guam</li>
                          <li data-value="+502">+502 Guatemala</li>
                          <li data-value="+224">+224 Guinea</li>
                          <li data-value="+245">+245 Guinea-Bissau</li>
                          <li data-value="+592">+592 Guyana</li>
                          <li data-value="+509">+509 Haiti</li>
                          <li data-value="+61">
                            +61 Heard and Mc Donald Islands
                          </li>
                          <li data-value="+504">+504 Honduras</li>
                          <li data-value="+852">+852 Hong Kong</li>
                          <li data-value="+36">+36 Hungary</li>
                          <li data-value="+354">+354 Iceland</li>
                          <li data-value="+62">+62 Indonesia</li>
                          <li data-value="+964">+964 Iraq</li>
                          <li data-value="+353">+353 Ireland</li>
                          <li data-value="+972">+972 Israel</li>
                          <li data-value="+39">+39 Italy</li>
                          <li data-value="+876">+876 Jamaica</li>
                          <li data-value="+81">+81 Japan</li>
                          <li data-value="+962">+962 Jordan</li>
                          <li data-value="+7">+7 Kazakhstan</li>
                          <li data-value="+254">+254 Kenya</li>
                          <li data-value="+686">+686 Kiribati</li>
                          <li data-value="+965">+965 Kuwait</li>
                          <li data-value="+7">+7 Kyrgyzstan</li>
                          <li data-value="+856">+856 Lao</li>
                          <li data-value="+371">+371 Latvia</li>
                          <li data-value="+961">+961 Lebanon</li>
                          <li data-value="+266">+266 Lesotho</li>
                          <li data-value="+231">+231 Liberia</li>
                          <li data-value="+218">+218 Libyan Arab Jamahiriya</li>
                          <li data-value="+423">+423 Liechtenstein</li>
                          <li data-value="+370">+370 Lithuania</li>
                          <li data-value="+352">+352 Luxembourg</li>
                          <li data-value="+853">+853 Macao</li>
                          <li data-value="+389">+389 Macedonia</li>
                          <li data-value="+261">+261 Madagascar</li>
                          <li data-value="+265">+265 Malawi</li>
                          <li data-value="+60">+60 Malaysia</li>
                          <li data-value="+960">+960 Maldives</li>
                          <li data-value="+223">+223 Mali</li>
                          <li data-value="+356">+356 Malta</li>
                          <li data-value="+692">+692 Marshall Islands</li>
                          <li data-value="+596">+596 Martinique</li>
                          <li data-value="+222">+222 Mauritania</li>
                          <li data-value="+230">+230 Mauritius</li>
                          <li data-value="+269">+269 Mayotte</li>
                          <li data-value="+52">+52 Mexico</li>
                          <li data-value="+691">+691 Micronesia</li>
                          <li data-value="+373">+373 Moldova</li>
                          <li data-value="+377">+377 Monaco</li>
                          <li data-value="+976">+976 Mongolia</li>
                          <li data-value="+382">+382 Montenegro</li>
                          <li data-value="+664">+664 Montserrat</li>
                          <li data-value="+212">+212 Morocco</li>
                          <li data-value="+258">+258 Mozambique</li>
                          <li data-value="+95">+95 Myanmar</li>
                          <li data-value="+264">+264 Namibia</li>
                          <li data-value="+674">+674 Nauru</li>
                          <li data-value="+977">+977 Nepal</li>
                          <li data-value="+31">+31 Netherlands</li>
                          <li data-value="+599">+599 Netherlands Antilles</li>
                          <li data-value="+687">+687 New Caledonia</li>
                          <li data-value="+64">+64 New Zealand</li>
                          <li data-value="+505">+505 Nicaragua</li>
                          <li data-value="+227">+227 Niger</li>
                          <li data-value="+234">+234 Nigeria</li>
                          <li data-value="+683">+683 Niue</li>
                          <li data-value="+672">+672 Norfolk Island</li>
                          <li data-value="+670">
                            +670 Northern Mariana Islands
                          </li>
                          <li data-value="+47">+47 Norway</li>
                          <li data-value="+968">+968 Oman</li>
                          <li data-value="+92">+92 Pakistan</li>
                          <li data-value="+680">+680 Palau</li>
                          <li data-value="+507">+507 Panama</li>
                          <li data-value="+675">+675 Papua New Guinea</li>
                          <li data-value="+595">+595 Paraguay</li>
                          <li data-value="+51">+51 Peru</li>
                          <li data-value="+63">+63 Philippines</li>
                          <li data-value="+872">+872 Pitcairn</li>
                          <li data-value="+48">+48 Poland</li>
                          <li data-value="+351">+351 Portugal</li>
                          <li data-value="+787">+787 Puerto Rico</li>
                          <li data-value="+974">+974 Qatar</li>
                          <li data-value="+262">+262 Reunion</li>
                          <li data-value="+40">+40 Romania</li>
                          <li data-value="+7">+7 Russian Federation</li>
                          <li data-value="+250">+250 Rwanda</li>
                          <li data-value="+869">+869 Saint Kitts and Nevis</li>
                          <li data-value="+758">+758 Saint Lucia</li>
                          <li data-value="+784">
                            +784 Saint Vincent and the Grenadines
                          </li>
                          <li data-value="+685">+685 Samoa</li>
                          <li data-value="+378">+378 San Marino</li>
                          <li data-value="+239">+239 Sao Tome and Principe</li>
                          <li data-value="+966">+966 Saudi Arabia</li>
                          <li data-value="+221">+221 Senegal</li>
                          <li data-value="+381">+381 Serbia</li>
                          <li data-value="+248">+248 Seychelles</li>
                          <li data-value="+232">+232 Sierra Leone</li>
                          <li data-value="+65">+65 Singapore</li>
                          <li data-value="+421">
                            +421 Slovakia (Slovak Republic)
                          </li>
                          <li data-value="+386">+386 Slovenia</li>
                          <li data-value="+677">+677 Solomon Islands</li>
                          <li data-value="+252">+252 Somalia</li>
                          <li data-value="+27">+27 South Africa</li>
                          <li data-value="+44">
                            +44 South Georgia and the South Sandwich Islands
                          </li>
                          <li data-value="+82">+82 South Korea</li>
                          <li data-value="+211">+211 South Sudan</li>
                          <li data-value="+34">+34 Spain</li>
                          <li data-value="+94">+94 Sri Lanka</li>
                          <li data-value="+290">+290 St. Helena</li>
                          <li data-value="+508">
                            +508 St. Pierre and Miquelon
                          </li>
                          <li data-value="+249">+249 Sudan</li>
                          <li data-value="+597">+597 Suriname</li>
                          <li data-value="+47">
                            +47 Svalbard and Jan Mayen Islands
                          </li>
                          <li data-value="+268">+268 Swaziland</li>
                          <li data-value="+46">+46 Sweden</li>
                          <li data-value="+41">+41 Switzerland</li>
                          <li data-value="+886">+886 Taiwan</li>
                          <li data-value="+7">+7 Tajikistan</li>
                          <li data-value="+255">+255 Tanzania</li>
                          <li data-value="+66">+66 Thailand</li>
                          <li data-value="+228">+228 Togo</li>
                          <li data-value="+64">+64 Tokelau</li>
                          <li data-value="+676">+676 Tonga</li>
                          <li data-value="+868">+868 Trinidad and Tobago</li>
                          <li data-value="+216">+216 Tunisia</li>
                          <li data-value="+90">+90 Turkey</li>
                          <li data-value="+993">+993 Turkmenistan</li>
                          <li data-value="+649">
                            +649 Turks and Caicos Islands
                          </li>
                          <li data-value="+688">+688 Tuvalu</li>
                          <li data-value="+256">+256 Uganda</li>
                          <li data-value="+380">+380 Ukraine</li>
                          <li data-value="+971">+971 United Arab Emirates</li>
                          <li data-value="+44">+44 United Kingdom</li>
                          <li data-value="+1">+1 United States</li>
                          <li data-value="+1">
                            +1 United States Minor Outlying Islands
                          </li>
                          <li data-value="+598">+598 Uruguay</li>
                          <li data-value="+998">+998 Uzbekistan</li>
                          <li data-value="+678">+678 Vanuatu</li>
                          <li data-value="+39">
                            +39 Vatican City State (Holy See)
                          </li>
                          <li data-value="+58">+58 Venezuela</li>
                          <li data-value="+84">+84 Vietnam</li>
                          <li data-value="+1">+1 Virgin Islands (British)</li>
                          <li data-value="+1">+1 Virgin Islands (U.S.)</li>
                          <li data-value="+681">
                            +681 Wallis And Futuna Islands
                          </li>
                          <li data-value="+212">+212 Western Sahara</li>
                          <li data-value="+967">+967 Yemen</li>
                          <li data-value="+381">+381 Yugoslavia</li>
                          <li data-value="+260">+260 Zambia</li>
                          <li data-value="+263">+263 Zimbabwe</li>
                        </ul>
                        <input
                          type="tel"
                          className="caif-txt"
                          placeholder="Mobile Number"
                          name="mobile2"
                          id="mobile2"
                          value=""
                          maxlength="20"
                          onkeypress="return isNumberKey(event);"
                        />
                      </div>
                      <label
                        id="mobile2-error"
                        className="error"
                        for="mobile2"
                      ></label>
                    </div>

                    <div className="pdca-ff pr">
                      <textarea
                        className="caif-txt"
                        name="message"
                        id="message"
                        maxlength="1000"
                        data-plugin="textarea"
                        placeholder="I am interested in this property."
                      ></textarea>
                      <label
                        for="message"
                        generated="true"
                        className="error small"
                      ></label>
                    </div>

                    <div className="pdca-ff">
                      <div className="caf-rua ffrr">
                        Are you a real estate agent?
                        <div className="radio">
                          <input
                            type="radio"
                            name="member_type"
                            id="Agent1"
                            value="3"
                          />
                          <label for="Agent1">Yes</label>
                        </div>
                        <div className="radio">
                          <input
                            type="radio"
                            name="member_type"
                            id="Individual1"
                            value="1"
                          />
                          <label for="Individual1">No</label>
                        </div>
                      </div>
                      <label
                        for="member_type"
                        id="membertypess"
                        generated="true"
                        className="error small"
                      ></label>
                    </div>

                    <div className="pdca-ff">
                      <div className="pdcs-ff-iisp lh12em xsmall">
                        <input
                          className="vam"
                          type="checkbox"
                          name="forward_status"
                          id="forward_status"
                          value="Y"
                          checked=""
                        />
                        <label className="vam ml2px gray" for="forward_status">
                          I agree to be contacted thru call, WhatsApp, sms &amp;
                          e-mail by RealEstateIndia and other advertisers for
                          similar properties.
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="btn-gcd" onClick="">
                      Get Contact Details
                    </button>

                    <p className="bp-tac">
                      By Proceeding you are agree to out{" "}
                      <a
                        href="https://www.realestateindia.com/terms-conditions.htm"
                        target="_blank"
                      >
                        Terms &amp; Condtions
                      </a>{" "}
                    </p>
                  </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="btnGcd"></div>
        </div>
      </div>
    </section>
  );
};

export default Propdetails;
