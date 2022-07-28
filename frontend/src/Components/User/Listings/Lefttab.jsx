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
                <div className={"type" + (Type === 'Residential' ? " active" : '')} onClick={()=>setType('Residential')}>
                  <span className="icon_radio"></span>
                  <span className="label">Residential Properties</span>
                </div>
                <div className={"type" + (Type === 'Commercial' ? " active" : '')} onClick={()=>setType('Commercial')}>
                  <span className="icon_radio"></span>
                  <span className="label">Commercial Properties</span>
                </div>
            </div>
            <div className={"down" + (tab.length !== 0 ? " active" : '')}>
              <div className="head">Sub-Category</div>
                    <div className={"tab" + (tab === 'Buy' ? " active" : '')}>
                      <div className="label" onClick={()=>tab==='Buy' ? settab('') : settab('Buy')}>
                        <span>
                          Buy
                          <span> (2)</span>
                        </span>
                        <span className="icon icon_arrow_down"></span>
                      </div>
                      <div className="sub_filter">
                          <div className="rf_group radio_group status_id">
                            <div className={`rf_toggle radio radio_0 toggle_tag pills ${subtab==='All' && 'toggle_active'}`} onClick={()=>setsubtab('All')}>
                              <div className="toggle_label">
                                All <span className="toggle_count">(2)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_1 toggle_tag pills ${subtab==='Active' && 'toggle_active'}`} onClick={()=>setsubtab('Active')}>
                              <div className="toggle_label">
                                Active <span className="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_2 toggle_tag pills ${subtab==='Expired' && 'toggle_active'}`} onClick={()=>setsubtab('Expired')}>
                              <div className="toggle_label">
                                Expired <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_3 toggle_tag pills ${subtab==='Under Review' && 'toggle_active'}`} onClick={()=>setsubtab('Under Review')}>
                              <div className="toggle_label">
                                Under Review{" "}
                                <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_4 toggle_tag pills ${subtab==='Rejected' && 'toggle_active'}`} onClick={()=>setsubtab('Rejected')}>
                              <div className="toggle_label">
                                Rejected <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_5 toggle_tag pills ${subtab==='Deleted' && 'toggle_active'}`} onClick={()=>setsubtab('Deleted')}>
                              <div className="toggle_label">
                                Deleted <span className="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_6 toggle_tag pills ${subtab==='Expiring Soon' && 'toggle_active'}`} onClick={()=>setsubtab('Expiring Soon')}>
                              <div className="toggle_label">
                                Expiring Soon{" "}
                                <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                      </div>
                    </div>
                    <div className={"tab" + (tab === 'Sell' ? " active" : '')}>
                      <div className="label" onClick={()=>tab==='Sell' ? settab('') : settab('Sell')}>
                        <span>
                          Sell
                          <span> (2)</span>
                        </span>
                        <span className="icon icon_arrow_down"></span>
                      </div>
                      <div className="sub_filter">
                          <div className="rf_group radio_group status_id">
                            <div className={`rf_toggle radio radio_0 toggle_tag pills ${subtab==='All' && 'toggle_active'}`} onClick={()=>setsubtab('All')}>
                              <div className="toggle_label">
                                All <span className="toggle_count">(2)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_1 toggle_tag pills ${subtab==='Active' && 'toggle_active'}`} onClick={()=>setsubtab('Active')}>
                              <div className="toggle_label">
                                Active <span className="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_2 toggle_tag pills ${subtab==='Expired' && 'toggle_active'}`} onClick={()=>setsubtab('Expired')}>
                              <div className="toggle_label">
                                Expired <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_3 toggle_tag pills ${subtab==='Under Review' && 'toggle_active'}`} onClick={()=>setsubtab('Under Review')}>
                              <div className="toggle_label">
                                Under Review{" "}
                                <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_4 toggle_tag pills ${subtab==='Rejected' && 'toggle_active'}`} onClick={()=>setsubtab('Rejected')}>
                              <div className="toggle_label">
                                Rejected <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_5 toggle_tag pills ${subtab==='Deleted' && 'toggle_active'}`} onClick={()=>setsubtab('Deleted')}>
                              <div className="toggle_label">
                                Deleted <span className="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_6 toggle_tag pills ${subtab==='Expiring Soon' && 'toggle_active'}`} onClick={()=>setsubtab('Expiring Soon')}>
                              <div className="toggle_label">
                                Expiring Soon{" "}
                                <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                      </div>
                    </div>
                    <div className={"tab" + (tab === 'PG' ? " active" : '')}>
                      <div className="label" onClick={()=>tab==='PG' ? settab('') : settab('PG')}>
                        <span>
                          PG
                          <span> (2)</span>
                        </span>
                        <span className="icon icon_arrow_down"></span>
                      </div>
                      <div className="sub_filter">
                          <div className="rf_group radio_group status_id">
                            <div className={`rf_toggle radio radio_0 toggle_tag pills ${subtab==='All' && 'toggle_active'}`} onClick={()=>setsubtab('All')}>
                              <div className="toggle_label">
                                All <span className="toggle_count">(2)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_1 toggle_tag pills ${subtab==='Active' && 'toggle_active'}`} onClick={()=>setsubtab('Active')}>
                              <div className="toggle_label">
                                Active <span className="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_2 toggle_tag pills ${subtab==='Expired' && 'toggle_active'}`} onClick={()=>setsubtab('Expired')}>
                              <div className="toggle_label">
                                Expired <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_3 toggle_tag pills ${subtab==='Under Review' && 'toggle_active'}`} onClick={()=>setsubtab('Under Review')}>
                              <div className="toggle_label">
                                Under Review{" "}
                                <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_4 toggle_tag pills ${subtab==='Rejected' && 'toggle_active'}`} onClick={()=>setsubtab('Rejected')}>
                              <div className="toggle_label">
                                Rejected <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_5 toggle_tag pills ${subtab==='Deleted' && 'toggle_active'}`} onClick={()=>setsubtab('Deleted')}>
                              <div className="toggle_label">
                                Deleted <span className="toggle_count">(1)</span>
                              </div>
                            </div>
                            <div className={`rf_toggle radio radio_6 toggle_tag pills ${subtab==='Expiring Soon' && 'toggle_active'}`} onClick={()=>setsubtab('Expiring Soon')}>
                              <div className="toggle_label">
                                Expiring Soon{" "}
                                <span className="toggle_count">(0)</span>
                              </div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                      </div>
                    </div>
            </div>
          </div>
    </>
  )
}

export default Lefttab