import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NEW_ADDRESS_PROPERTY } from "../../../Constants/propertyconstants";

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert()

  const [address, setaddress] = useState({
    City: "",
    Project_Name: "",
    Locality: "",
    Flat_No: "",
    Floor_No: "",
    Total_Floors: "",
  });
  const togglechange = (e)=>{
    const {name,value} = e.target
    if(e.target.validity.valid){
      // console.log(value);
      setaddress({...address,[name]:value})
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleback = (e) => {
    e.preventDefault();
    navigate("/property/new/basic");
  };

  const handlecontinue = (e) => {
    e.preventDefault();
    if(!address.City || !address.Project_Name || !address.Locality || !address.Flat_No || !address.Floor_No || !address.Total_Floors){
      alert.error('Please Fill All Required Fields')
    }else{
      const payloaddata = address
      dispatch({
        type: NEW_ADDRESS_PROPERTY,
        payload: payloaddata,
      });
      navigate("/property/new/photo");
    }
  };

  return (
    <>
      <div className="post_property_main">
        <ul className="tab_head">
          <li>
            <Link to="/property/new/basic">Basic Info</Link>
          </li>
          <li className="active">Address</li>
          <li className="disabled">Photos</li>
        </ul>
        <div className="tab_content">
          <div className="address_content showMap">
            <div className="su_address">
              <div>
                <span className="mandatoryMarker">*</span>indicates a mandatory
                field
              </div>
              <div className="form_content">
                <div className="field">
                  <div className="material_input dropdownContainer">
                    <input
                      className={address.City && "has_value"}
                      type="text"
                      autoComplete="text"
                      section="address"
                      paramstate="region_bounding_box_uuid"
                      name="City"
                      onChange={togglechange}
                      value={address.City}
                    />
                    <label className="label">
                      City Here<span className="mandatoryMarker">*</span>
                    </label>
                    <ul className="result_cont"></ul>
                  </div>
                </div>
                <div className="field building">
                  <div className="material_input dropdownContainer">
                    <input
                      className={address.Project_Name && "has_value"}
                      type="text"
                      autoComplete="text"
                      section="address"
                      name="Project_Name"
                      onChange={togglechange}
                      value={address.Project_Name}
                    />
                    <label className="label">
                      Building/Project/Society (Mandatory)
                      <span className="mandatoryMarker">*</span>
                    </label>
                    <ul className="result_cont"></ul>
                  </div>
                </div>
                <div className="field">
                  <div className="material_input dropdownContainer">
                    <input
                      className={address.Locality && "has_value"}
                      type="text"
                      autoComplete="text"
                      section="address"
                      name="Locality"
                      onChange={togglechange}
                      value={address.Locality}
                    />
                    <label className="label">
                      Locality<span className="mandatoryMarker">*</span>
                    </label>
                    <ul className="result_cont"></ul>
                  </div>
                </div>
                <div className="field flat">
                  <div className="material_input dropdownContainer">
                    <input
                      className={address.Flat_No && "has_value"}
                      type="text"
                      autoComplete="text"
                      maxLength="15"
                      section="address"
                      paramstate="flat_number"
                      trackchange="true"
                      isvalid="true"
                      pattern="^\d*(\.\d{0,2})?$"
                      name="Flat_No"
                      onChange={togglechange}
                      value={address.Flat_No}
                    />
                    <label className="label">Flat No.</label>
                    <ul className="result_cont"></ul>
                  </div>
                </div>
                <div className="field floor">
                  <div className="material_input dropdownContainer">
                    <input
                      className={address.Floor_No && "has_value"}
                      type="text"
                      autoComplete="text"
                      paramstate="floor_number"
                      section="address"
                      trackchange="true"
                      pattern="^\d*(\.\d{0,2})?$"
                      name="Floor_No"
                      onChange={togglechange}
                      value={address.Floor_No}
                    />
                    <label className="label">
                      Floor No.<span className="mandatoryMarker">*</span>
                    </label>
                    <ul className="result_cont"></ul>
                  </div>
                </div>
                <div className="field total_floor">
                  <div className="material_input dropdownContainer">
                    <input
                      className={address.Total_Floors && "has_value"}
                      type="text"
                      autoComplete="text"
                      shortlabel="Total Floors"
                      section="address"
                      paramstate="flat_details.floor_count"
                      trackchange="true"
                      pattern="^\d*(\.\d{0,2})?$"
                      name="Total_Floors"
                      onChange={togglechange}
                      value={address.Total_Floors}
                    />
                    <label className="label">
                      Total Floors<span className="mandatoryMarker">*</span>
                    </label>
                    <ul className="result_cont"></ul>
                  </div>
                </div>
                <div className="btn_cont btn_cont_share_partner">
                  <button
                    onChange={handleback}
                    className="back_button btn primary bordered"
                  >
                    Back
                  </button>
                  <button onClick={handlecontinue} className="btn secondary">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
