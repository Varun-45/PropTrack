import React, { useEffect } from 'react'
import { useState } from 'react'
import './Search.css'

const Search = () => {
  const [searchaniwidth, setsearchaniwidth] = useState('')
  const [searchanileft, setsearchanileft] = useState('')

  const setWidthAndLeft = (e) => {
    setsearchaniwidth(e.target.scrollWidth);
    setsearchanileft(e.target.offsetLeft);
  },
    setToDefault = () => {
      const firstTab = document.getElementsByClassName("search_tab_item")[0];
      setsearchaniwidth(firstTab.scrollWidth);
      setsearchanileft(firstTab.offsetLeft);
    };

  useEffect(() => {setTimeout(setToDefault, 1000)}, []);

  return (
        <section className="searchform">
          <section className="searchbanner">
            <div className="searchbanner_container">
              <div className="search_container">
                <div className="search_heading">
                  Welcome back! Let's continue your search
                </div>
                <div className="search_tab">
                  {["Buy", "Rent", "PG", "Plot", "Commercial", "Post Free Property Ad"]
                    .map((tab, i) => <div className='search_tab_item' key={tab+i} onMouseOver={setWidthAndLeft} onMouseOut={setToDefault}>{tab}</div>)
                  }
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
                    <span className="search_button_text">Search</span>
                  </div>
                </div>
              </div>
              {/* <div className="search_payrent_banner"></div> */}
            </div>
          </section>
        </section>
  )
}

export default Search