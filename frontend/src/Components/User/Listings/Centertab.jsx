import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Centertab = () => {
  const {user} = useSelector(state=>state.User)

  const [properties, setproperties] = useState([])
  const func = async ()=>{
    const {data} = await axios.get(`/api/v1/properties/user/${user._id}`)
    setproperties(data.properties)
  }
  
  useEffect(() => {
    func()
  }, [])
  
  return (
    <>
    
    <div className="center">
      <div class="section1">
          <div class="more">More Filters</div>
          <div class="reset">RESET</div>
          <div class="main">
            <div class="dropdown-component filter-container filter-container--search">
              <div class="dropdown-header">
                <div class="head-container">
                  <div class="display-text-wrapper">
                    <div class="display-text-container locality">Locality</div>
                  </div>
                  <span class="icon icon-arrow-down"></span>
                </div>
              </div>
            </div>
            <div class="dropdown-component filter-container property_type_id">
              <div class="dropdown-header">
                <div class="head-container">
                  <div class="display-text-wrapper">
                    <div class="display-text-container">Property Type</div>
                  </div>
                  <span class="icon icon-arrow-down"></span>
                </div>
              </div>
            </div>
            <div class="dropdown-component filter-container apartment_type_id">
              <div class="dropdown-header">
                <div class="head-container">
                  <div class="display-text-wrapper">
                    <div class="display-text-container">BHK</div>
                  </div>
                  <span class="icon icon-arrow-down"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="text">
            <div class="count-wrap">Showing 2 out of 2 properties</div>
          </div>
      </div>
      <div class="prop-cont">
        {/* <div class="festive-card-listing">
          <div></div>
        </div> */}
        <div class="su-dbh-listings">
        {properties.map((property)=>{
          return (
            <>
            <div class="owner-property">
              <div class="mlp-property">
                <div class="mlpp-wrapper">
                  <div class="mlp-card-header">
                    <div class="id-container upgrade-impl">
                      <span>ID:{property._id}</span>
                    </div>
                    <div class="su-li-ctas"></div>
                    <div class="su-li-ctas"></div>
                    <div class="su-li-ctas"></div>
                  </div>
                  <div class="mlp-img mlp-img-stub"></div>
                  <div class="mlp-info padding-left">
                    <div class="mlp-price-wrapper">
                      <div class="mlp-price-value">
                        <i class="icon-rupee"></i>
                        <span>{property.Property_Details.Cost}</span>
                      </div>
                      <div class="su-li-tags">
                        <span class="su-li-status red">
                          <span class="su-li-status-icon deleted-icon"></span>
                          <span class="su-li-status-text">Deleted</span>
                        </span>
                      </div>
                    </div>
                    <div class="mlp-title-container">
                      <div class="mlp-title text-ellipsis">{property.Property_Details.BHK} Apartment</div>
                    </div>
                    <div></div>
                    <div class="mlp-sub">
                      <span class="subtitle2 upgrade-impl">{property.Property_Details.BuiltUp_Area}</span>
                      <div class="mlp-sub-separator upgrade-impl"></div>
                      <span class="icon icon-rupee"></span>
                      <span class="subtitle1 upgrade-impl">
                        <div class="ib">1 k/ sq. ft.</div>
                      </span>
                    </div>
                    <div class="mlp-addr text-ellipsis"></div>
                    <div class="mlp-posted-expired-info-container upgrade-impl">
                      <div class="mlp-posted-expired-info">
                        <div class="mlp-date-container">
                          <span class="mlp-date-title upgrade-impl">
                            Posted On
                          </span>
                          <span class="mlp-date-value">{((new Date(property.CreatedAt)).toDateString()).slice(4)}</span>
                        </div>
                        <div class="mlp-date-container">
                          <span class="mlp-date-title upgrade-impl">
                            Expiring On
                          </span>
                          <span class="mlp-date-value">{((new Date(property.ExpiringOn)).toDateString()).slice(4)}</span>
                        </div>
                          <div class="mlp-date-container">
                            <span class="mlp-date-title upgrade-impl">
                              Visibility
                            </span>
                            <span class="mlp-date-value">
                              <span class="red">Low</span> (Free Plan)
                            </span>
                          </div>
                      </div>
                      <div class="su-li-ctas">
                        <div class="a-href repost-btn">Reactivate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>)
          
        })}
            <div class="owner-property">
              <div class="mlp-property">
                <div class="mlpp-wrapper">
                  <div class="mlp-card-header">
                    <div class="id-container upgrade-impl">
                      <span>ID:9498499</span>
                    </div>
                    <div class="su-li-ctas">
                      <div class="view-leads-btn a-href">View Leads</div>
                    </div>
                    <div class="su-li-ctas">
                      <div class="share-btn a-href">Share </div>
                    </div>
                    <div class="su-li-ctas">
                      <div class="delete-btn a-href">Delete</div>
                    </div>
                    <div class="su-li-dropdown a-href edit-button">
                      Edit<i class="Select-arrow"></i>
                    </div>
                  </div>
                  <div class="mlp-img mlp-img-stub"></div>
                  <div class="mlp-info padding-left">
                    <div class="mlp-price-wrapper">
                      <div class="mlp-price-value">
                        <i class="icon-rupee"></i>
                        <span>5.0 L</span>
                      </div>
                      <div class="su-li-tags">
                        <span class="su-li-status green">
                          <span class="su-li-status-icon published-icon"></span>
                          <span class="su-li-status-text">Active</span>
                        </span>
                      </div>
                    </div>
                    <div class="mlp-title-container">
                      <div class="mlp-title text-ellipsis">1 RK Apartment</div>
                      <span
                        class="tooltip preview-icon tooltip-bottom"
                        data-to="https://housing.com/in/buy/resale/page/9498499"
                        data-title="Preview"
                        data-state="listing_preview"
                        data-cta="preview"
                        type="domainChanged"
                      >
                        <div class="icon-open-in-new"></div>
                      </span>
                    </div>
                    <div></div>
                    <div class="mlp-sub">
                      <span class="subtitle2 upgrade-impl">800 sq. ft.</span>
                      <div class="mlp-sub-separator upgrade-impl"></div>
                      <span class="icon icon-rupee"></span>
                      <span class="subtitle1 upgrade-impl">
                        <div class="ib">625/ sq. ft.</div>
                      </span>
                    </div>
                    <div class="mlp-addr text-ellipsis"></div>
                    <div class="mlp-posted-expired-info-container upgrade-impl">
                      <div class="mlp-posted-expired-info">
                        <div class="mlp-date-container">
                          <span class="mlp-date-title upgrade-impl">
                            Posted On
                          </span>
                          <span class="mlp-date-value">4 Jul 2022</span>
                        </div>
                        <div class="mlp-date-container">
                          <span class="mlp-date-title upgrade-impl">
                            Expiring On
                          </span>
                          <span class="mlp-date-value">18 Aug 2022</span>
                        </div>
                          <div class="mlp-date-container">
                            <span class="mlp-date-title upgrade-impl">
                              Visibility
                            </span>
                            <span class="mlp-date-value">
                              <span class="red">Low</span> (Free Plan)
                            </span>
                          </div>
                      </div>
                      <div class="su-li-ctas">
                        <div class="upgrade-now-container">
                          <div
                            class="a-href primary upgrade upgrade-impl no-assign-package"
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
