import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Centertab = (props) => {
  const {user} = useSelector(state=>state.User)

  const {isFilterVisible, hideFilter} = props;

  const [properties, setproperties] = useState([])
  const func = async ()=>{
    const {data} = await axios.get(`/api/v1/properties/user/${user._id}`)
    setproperties(data.properties)
    // console.log(data.properties);
  }
  
  useEffect(() => {
    func()
  }, [])

  return (
    <> 
    <div className="center">
      <div className={"section1"+(isFilterVisible ? " show" : '')}>
          <button className="close-btn" type="button" aria-label="close filters" onClick={hideFilter}></button>
          <div className="more">More Filters</div>
          <div className="reset">RESET</div>
          <div className="main">
            <div className="dropdown-component filter-container filter-container--search">
              <div className="dropdown-header">
                <div className="head-container">
                  <div className="display-text-wrapper">
                    <div className="display-text-container locality">Locality</div>
                  </div>
                  <span className="icon icon-arrow-down"></span>
                </div>
              </div>
            </div>
            <div className="dropdown-component filter-container property_type_id">
              <div className="dropdown-header">
                <div className="head-container">
                  <div className="display-text-wrapper">
                    <div className="display-text-container">Property Type</div>
                  </div>
                  <span className="icon icon-arrow-down"></span>
                </div>
              </div>
            </div>
            <div className="dropdown-component filter-container apartment_type_id">
              <div className="dropdown-header">
                <div className="head-container">
                  <div className="display-text-wrapper">
                    <div className="display-text-container">BHK</div>
                  </div>
                  <span className="icon icon-arrow-down"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="count-wrap">Showing 2 out of 2 properties</div>
          </div>
      </div>
      <div className="prop-cont">
        {/* <div className="festive-card-listing">
          <div></div>
        </div> */}
        <div className="su-dbh-listings">
        {properties.map((property)=>{
          return (
            <>
            <div className="owner-property">
              <div className="mlp-property">
                <div className="mlpp-wrapper">
                  <div className="mlp-card-header">
                    <div className="id-container upgrade-impl">
                      <span>ID:{property._id}</span>
                    </div>
                    <div className="su-li-ctas"></div>
                    <div className="su-li-ctas"></div>
                    <div className="su-li-ctas"></div>
                  </div>
                  <div className="mlp-img mlp-img-stub"></div>
                  <div className="mlp-info padding-left">
                    <div className="mlp-price-wrapper">
                      <div className="mlp-price-value">
                        <i className="icon-rupee"></i>
                        <span>{property.Property_Details.Cost}</span>
                      </div>
                      <div className="su-li-tags">
                        <span className="su-li-status red">
                          <span className="su-li-status-icon deleted-icon"></span>
                          <span className="su-li-status-text"></span>
                        </span>
                      </div>
                    </div>
                    <div className="mlp-title-container">
                      <div className="mlp-title text-ellipsis">{property.Property_Details.BHK} Apartment</div>
                    </div>
                    <div></div>
                    <div className="mlp-sub">
                      <span className="subtitle2 upgrade-impl">{property.Property_Details.BuiltUp_Area}</span>
                      <div className="mlp-sub-separator upgrade-impl"></div>
                      <span className="icon icon-rupee"></span>
                      <span className="subtitle1 upgrade-impl">
                        <div className="ib">1 k/ sq. ft.</div>
                      </span>
                    </div>
                    <div className="mlp-addr text-ellipsis"></div>
                    <div className="mlp-posted-expired-info-container upgrade-impl">
                      <div className="mlp-posted-expired-info">
                        <div className="mlp-date-container">
                          <span className="mlp-date-title upgrade-impl">
                            Posted On
                          </span>
                          <span className="mlp-date-value">{((new Date(property.CreatedAt)).toDateString()).slice(4)}</span>
                        </div>
                        <div className="mlp-date-container">
                          <span className="mlp-date-title upgrade-impl">
                            Expiring On
                          </span>
                          <span className="mlp-date-value">{((new Date(property.ExpiringOn)).toDateString()).slice(4)}</span>
                        </div>
                          <div className="mlp-date-container">
                            <span className="mlp-date-title upgrade-impl">
                              Visibility
                            </span>
                            <span className="mlp-date-value">
                              <span className="red">Low</span> (Free Plan)
                            </span>
                          </div>
                      </div>
                      <div className="su-li-ctas">
                        <div className="a-href repost-btn">Reactivate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>)
          
        })}
            <div className="owner-property">
              <div className="mlp-property">
                <div className="mlpp-wrapper">
                  <div className="mlp-card-header">
                    <div className="id-container upgrade-impl">
                      <span>ID:9498499</span>
                    </div>
                    <div className="su-li-ctas">
                      <div className="view-leads-btn a-href">View Leads</div>
                    </div>
                    <div className="su-li-ctas">
                      <div className="share-btn a-href">Share </div>
                    </div>
                    <div className="su-li-ctas">
                      <div className="delete-btn a-href">Delete</div>
                    </div>
                    <div className="su-li-dropdown a-href edit-button">
                      Edit<i className="Select-arrow"></i>
                    </div>
                  </div>
                  <div className="mlp-img mlp-img-stub"></div>
                  <div className="mlp-info padding-left">
                    <div className="mlp-price-wrapper">
                      <div className="mlp-price-value">
                        <i className="icon-rupee"></i>
                        <span>5.0 L</span>
                      </div>
                      <div className="su-li-tags">
                        <span className="su-li-status green">
                          <span className="su-li-status-icon published-icon"></span>
                          <span className="su-li-status-text">Active</span>
                        </span>
                      </div>
                    </div>
                    <div className="mlp-title-container">
                      <div className="mlp-title text-ellipsis">1 RK Apartment</div>
                      <span
                        className="tooltip preview-icon tooltip-bottom"
                        data-to="https://housing.com/in/buy/resale/page/9498499"
                        data-title="Preview"
                        data-state="listing_preview"
                        data-cta="preview"
                        type="domainChanged"
                      >
                        <div className="icon-open-in-new"></div>
                      </span>
                    </div>
                    <div></div>
                    <div className="mlp-sub">
                      <span className="subtitle2 upgrade-impl">800 sq. ft.</span>
                      <div className="mlp-sub-separator upgrade-impl"></div>
                      <span className="icon icon-rupee"></span>
                      <span className="subtitle1 upgrade-impl">
                        <div className="ib">625/ sq. ft.</div>
                      </span>
                    </div>
                    <div className="mlp-addr text-ellipsis"></div>
                    <div className="mlp-posted-expired-info-container upgrade-impl">
                      <div className="mlp-posted-expired-info">
                        <div className="mlp-date-container">
                          <span className="mlp-date-title upgrade-impl">
                            Posted On
                          </span>
                          <span className="mlp-date-value">4 Jul 2022</span>
                        </div>
                        <div className="mlp-date-container">
                          <span className="mlp-date-title upgrade-impl">
                            Expiring On
                          </span>
                          <span className="mlp-date-value">18 Aug 2022</span>
                        </div>
                          <div className="mlp-date-container">
                            <span className="mlp-date-title upgrade-impl">
                              Visibility
                            </span>
                            <span className="mlp-date-value">
                              <span className="red">Low</span> (Free Plan)
                            </span>
                          </div>
                      </div>
                      <div className="su-li-ctas">
                        <div className="upgrade-now-container">
                          <div
                            className="a-href primary upgrade upgrade-impl no-assign-package"
                            data-q="listing_card_upgrade"
                          >
                            UPGRADE
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Centertab;
