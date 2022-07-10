import React, { useEffect } from 'react'
import { useState } from 'react'
import './Search.css'

const Search = () => {
  const [searchaniwidth, setsearchaniwidth] = useState('51.56')
  const [searchanileft, setsearchanileft] = useState('52.8')
  const searchanileftdefault = '52.8'

  return (
        <section className="searchform">
          <section className="searchbanner">
            <div className="searchbanner_container">
              <div className="search_container">
                <div className="search_heading">
                  Welcome back! Let's continue your search
                </div>
                <div className="search_tab">
                  <div className="search_tab_item" onMouseOver={()=>{setsearchaniwidth('51.56');setsearchanileft('52.8')}} onMouseOut={()=>{setsearchaniwidth('51.56');setsearchanileft(searchanileftdefault)}}>Buy</div>
                  <div className="search_tab_item" onMouseOver={()=>{setsearchaniwidth('57.73');setsearchanileft('104.5')}} onMouseOut={()=>{setsearchaniwidth('51.56');setsearchanileft(searchanileftdefault)}}>Rent</div>
                  <div className="search_tab_item" onMouseOver={()=>{setsearchaniwidth('44.88');setsearchanileft('162')}} onMouseOut={()=>{setsearchaniwidth('51.56');setsearchanileft(searchanileftdefault)}}>PG</div>
                  <div className="search_tab_item" onMouseOver={()=>{setsearchaniwidth('52.28');setsearchanileft('206')}} onMouseOut={()=>{setsearchaniwidth('51.56');setsearchanileft(searchanileftdefault)}}>Plot</div>
                  <div className="search_tab_item" onMouseOver={()=>{setsearchaniwidth('109.69');setsearchanileft('259')}} onMouseOut={()=>{setsearchaniwidth('51.56');setsearchanileft(searchanileftdefault)}}>Commercial</div>
                  <div className="search_tab_item" onMouseOver={()=>{setsearchaniwidth('177.55');setsearchanileft('368')}} onMouseOut={()=>{setsearchaniwidth('51.56');setsearchanileft(searchanileftdefault)}}>Post Free Property Ad</div>
                  <span
                    className="search_tab_ani"
                    style={{ width: searchaniwidth + "px", left: searchanileft + "px" }}
                  ></span>
                </div>
                <div className="search_wrap">
                  <div className="search_location">
                    <div className="search_location_wrap">
                      <input
                        id="keyword"
                        type="text"
                        className="search_location_input"
                        placeholder="Enter City, Locality, Project"
                      />
                    </div>
                  </div>
                  <div className="search_property">
                    <div className="search_property_title">
                      <span className="search_property_type">Flat</span>
                      <span className="search_property_type_count">+6</span>
                    </div>
                  </div>
                  <div className="search_budget">
                    <div className="search_budget_title">
                      <span className="search_budget_text">Budget</span>
                    </div>
                  </div>
                  <div className="search_button">
                    <span className="search_button_icon"></span>
                    Search
                  </div>
                </div>
              </div>
              <div className="search_payrent_banner"></div>
            </div>
          </section>
        </section>
  )
}

export default Search