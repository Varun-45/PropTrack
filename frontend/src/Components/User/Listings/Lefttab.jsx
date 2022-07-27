import React from 'react'
import { useState } from "react";

const Lefttab = () => {

  const [Type, setType] = useState('Residential')
  const [tab, settab] = useState('Buy')
  const [subtab, setsubtab] = useState('Active')

  return (
    <>
        <div className="leftbar">
            <div className="up">
              <div className="head">Show</div>
              <div>
                <div className="type" onClick={()=>setType('Residential')}>
                  <span class={Type === 'Residential' ? "icon_radio_filled" : 'icon_radio'}></span>
                  <span class={Type === 'Residential' ? "label_active" : 'label'}>Residential Properties</span>
                </div>
              </div>
              <div>
                <div className="type" onClick={()=>setType('Commercial')}>
                  <span class={Type === 'Commercial' ? "icon_radio_filled" : 'icon_radio'}></span>
                  <span class={Type === 'Commercial' ? "label_active" : 'label'}>Commercial Properties</span>
                </div>
              </div>
            </div>
            <div className="down">
              <span class="head">Sub-Category</span>
                    <div class="tab">
                      <div class={tab === 'Buy' ? "tabactive" : 'tabnonactive'} onClick={()=>tab==='Buy' ? settab('') : settab('Buy')}>
                        <span>
                          Buy
                          <span> (2)</span>
                        </span>
                        <span class="icon icon_arrow_down"></span>
                      </div>
                      <div class={`sub_filter ${tab === 'Buy' && "active"}`}>
                        <div>
                          <div class="rf_group radio_group status_id">
                            <div class={`rf_toggle radio radio_0 toggle_tag pills ${subtab==='All' && 'toggle_active'}`} onClick={()=>setsubtab('All')}>
                              <div class="toggle_label">
                                All <span class="toggle_count">(2)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_1 toggle_tag pills ${subtab==='Active' && 'toggle_active'}`} onClick={()=>setsubtab('Active')}>
                              <div class="toggle_label">
                                Active <span class="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_2 toggle_tag pills ${subtab==='Expired' && 'toggle_active'}`} onClick={()=>setsubtab('Expired')}>
                              <div class="toggle_label">
                                Expired <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_3 toggle_tag pills ${subtab==='Under Review' && 'toggle_active'}`} onClick={()=>setsubtab('Under Review')}>
                              <div class="toggle_label">
                                Under Review{" "}
                                <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_4 toggle_tag pills ${subtab==='Rejected' && 'toggle_active'}`} onClick={()=>setsubtab('Rejected')}>
                              <div class="toggle_label">
                                Rejected <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_5 toggle_tag pills ${subtab==='Deleted' && 'toggle_active'}`} onClick={()=>setsubtab('Deleted')}>
                              <div class="toggle_label">
                                Deleted <span class="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_6 toggle_tag pills ${subtab==='Expiring Soon' && 'toggle_active'}`} onClick={()=>setsubtab('Expiring Soon')}>
                              <div class="toggle_label">
                                Expiring Soon{" "}
                                <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                          </div>
                          <div class="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div class="tab">
                      <div class={tab === 'Sell' ? "tabactive" : 'tabnonactive'} onClick={()=>tab==='Sell' ? settab('') : settab('Sell')}>
                        <span>
                          Sell
                          <span> (2)</span>
                        </span>
                        <span class="icon icon_arrow_down"></span>
                      </div>
                      <div class={`sub_filter ${tab === 'Sell' && "active"}`}>
                        <div>
                          <div class="rf_group radio_group status_id">
                            <div class={`rf_toggle radio radio_0 toggle_tag pills ${subtab==='All' && 'toggle_active'}`} onClick={()=>setsubtab('All')}>
                              <div class="toggle_label">
                                All <span class="toggle_count">(2)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_1 toggle_tag pills ${subtab==='Active' && 'toggle_active'}`} onClick={()=>setsubtab('Active')}>
                              <div class="toggle_label">
                                Active <span class="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_2 toggle_tag pills ${subtab==='Expired' && 'toggle_active'}`} onClick={()=>setsubtab('Expired')}>
                              <div class="toggle_label">
                                Expired <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_3 toggle_tag pills ${subtab==='Under Review' && 'toggle_active'}`} onClick={()=>setsubtab('Under Review')}>
                              <div class="toggle_label">
                                Under Review{" "}
                                <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_4 toggle_tag pills ${subtab==='Rejected' && 'toggle_active'}`} onClick={()=>setsubtab('Rejected')}>
                              <div class="toggle_label">
                                Rejected <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_5 toggle_tag pills ${subtab==='Deleted' && 'toggle_active'}`} onClick={()=>setsubtab('Deleted')}>
                              <div class="toggle_label">
                                Deleted <span class="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_6 toggle_tag pills ${subtab==='Expiring Soon' && 'toggle_active'}`} onClick={()=>setsubtab('Expiring Soon')}>
                              <div class="toggle_label">
                                Expiring Soon{" "}
                                <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                          </div>
                          <div class="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div class="tab">
                      <div class={tab === 'PG' ? "tabactive" : 'tabnonactive'} onClick={()=>tab==='PG' ? settab('') : settab('PG')}>
                        <span>
                          PG
                          <span> (2)</span>
                        </span>
                        <span class="icon icon_arrow_down"></span>
                      </div>
                      <div class={`sub_filter ${tab === 'PG' && "active"}`}>
                        <div>
                          <div class="rf_group radio_group status_id">
                            <div class={`rf_toggle radio radio_0 toggle_tag pills ${subtab==='All' && 'toggle_active'}`} onClick={()=>setsubtab('All')}>
                              <div class="toggle_label">
                                All <span class="toggle_count">(2)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_1 toggle_tag pills ${subtab==='Active' && 'toggle_active'}`} onClick={()=>setsubtab('Active')}>
                              <div class="toggle_label">
                                Active <span class="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_2 toggle_tag pills ${subtab==='Expired' && 'toggle_active'}`} onClick={()=>setsubtab('Expired')}>
                              <div class="toggle_label">
                                Expired <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_3 toggle_tag pills ${subtab==='Under Review' && 'toggle_active'}`} onClick={()=>setsubtab('Under Review')}>
                              <div class="toggle_label">
                                Under Review{" "}
                                <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_4 toggle_tag pills ${subtab==='Rejected' && 'toggle_active'}`} onClick={()=>setsubtab('Rejected')}>
                              <div class="toggle_label">
                                Rejected <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_5 toggle_tag pills ${subtab==='Deleted' && 'toggle_active'}`} onClick={()=>setsubtab('Deleted')}>
                              <div class="toggle_label">
                                Deleted <span class="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div class={`rf_toggle radio radio_6 toggle_tag pills ${subtab==='Expiring Soon' && 'toggle_active'}`} onClick={()=>setsubtab('Expiring Soon')}>
                              <div class="toggle_label">
                                Expiring Soon{" "}
                                <span class="toggle_count">(0)</span>
                              </div>
                            </div>
                          </div>
                          <div class="errorStyle"></div>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
    </>
  )
}

export default Lefttab