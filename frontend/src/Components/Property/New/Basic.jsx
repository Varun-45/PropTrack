import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NEW_BASIC_INFO_PROPERTY } from "../../../Constants/propertyconstants";
import { useAlert } from "react-alert";

const Basic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const [Type, setType] = useState();
  const [Service, setService] = useState();
  const [Property_Type, setProperty_Type] = useState();
  const [Construction_Status, setConstruction_Status] = useState();
  const [BHK, setBHK] = useState();
  const [Furnish_Type, setFurnish_Type] = useState();
  const [Covered_Parking, setCovered_Parking] = useState();
  const [Open_Parking, setOpen_Parking] = useState();
  const [security, setsecurity] = useState();
  const [Tenant_Type, setTenant_Type] = useState();
  const [Possession_Status, setPossession_Status] = useState();
  const [Suitable_For, setSuitable_For] = useState();
  const [Location_Hub, setLocation_Hub] = useState();
  const [Located_Near, setLocated_Near] = useState();
  const [Ownership, setOwnership] = useState();
  const [Negotiable, setNegotiable] = useState();
  const [Tax_Included, setTax_Included] = useState();
  const [For, setFor] = useState();
  const [Best_For, setBest_For] = useState();
  const [meals, setmeals] = useState();
  const [Meals_Offerings, setMeals_Offerings] = useState();
  const [Meals_Speciality, setMeals_Speciality] = useState();
  const [Common_Areas, setCommon_Areas] = useState();
  const [Managed_By, setManaged_By] = useState();
  const [Manager_Stays, setManager_Stays] = useState();
  const [Non_Veg_Allowed, setNon_Veg_Allowed] = useState();
  const [Opposite_Sex_Allowed, setOpposite_Sex_Allowed] = useState();
  const [Any_Time_Allowed, setAny_Time_Allowed] = useState();
  const [Visitors_Allowed, setVisitors_Allowed] = useState();
  const [Guardian_Allowed, setGuardian_Allowed] = useState();
  const [Drinking_Allowed, setDrinking_Allowed] = useState();
  const [Smoking_Allowed, setSmoking_Allowed] = useState();
  const [x, setx] = useState();
  const [Zone_Type, setZone_Type] = useState();
  const [Property_Condition, setProperty_Condition] = useState();
  const [Electricity_Included, setElectricity_Included] = useState();
  const [Water_Included, setWater_Included] = useState();
  const [DG_UPS_Included, setDG_UPS_Included] = useState();
  const [Age_of_Property, setAge_of_Property] = useState();
  const [Available_From, setAvailable_From] = useState();
  const [Monthly_Rent, setMonthly_Rent] = useState();
  const [Maintainance_Charges, setMaintainance_Charges] = useState();
  const [Security_Deposit, setSecurity_Deposit] = useState();
  const [BuiltUp_Area, setBuiltUp_Area] = useState();
  const [Carpet_Area, setCarpet_Area] = useState();
  const [Cost, setCost] = useState();
  const [PG_Name, setPG_Name] = useState();
  const [Total_Beds, setTotal_Beds] = useState();
  const [Notice_Period, setNotice_Period] = useState();
  const [Lock_in_Period, setLock_in_Period] = useState();
  const [Plot_Price, setPlot_Price] = useState();
  const [Plot_Area, setPlot_Area] = useState();
  const [Area_Unit, setArea_Unit] = useState();
  const [Length, setLength] = useState();
  const [Width, setWidth] = useState();
  const [Width_of_Facing_Road, setWidth_of_Facing_Road] = useState();
  const [Expected_Rent, setExpected_Rent] = useState();
  const [Expected_Rent_Increase, setExpected_Rent_Increase] = useState();
  const [Entrance, setEntrance] = useState();
  const [Cieling, setCieling] = useState();
  const [Price, setPrice] = useState();
  const [Offers, setOffers] = useState({
    Legal: [],
    Rentals: [],
    Security_Deposit: [],
    Home_Services: [],
  });


  const TR_SR_P = {
    Type,
    Service,
    Property_Type,
    Age_of_Property,
    BHK,
    Furnish_Type,
    Covered_Parking,
    Open_Parking,
    Available_From,
    Monthly_Rent,
    Maintainance_Charges,
    Security_Deposit,
    BuiltUp_Area,
    Carpet_Area,
    Tenant_Type,
  };
  const TR_SS_PA = {
    Type,
    Service,
    Property_Type,
    Construction_Status,
    BHK,
    Furnish_Type,
    Covered_Parking,
    Open_Parking,
    Cost,
    Maintainance_Charges,
    BuiltUp_Area,
    Carpet_Area,
  };
  const TR_SS_PP = {
    Type,
    Service,
    Property_Type,
    Possession_Status,
    Plot_Price,
    Maintainance_Charges,
    Plot_Area,
    Area_Unit,
    Length,
    Width,
    Width_of_Facing_Road,
  };
  const TR_SP = {
    Type,
    Service,
    PG_Name,
    Total_Beds,
    For,
    Best_For,
    Meals_Offerings,
    Meals_Speciality,
    Notice_Period,
    Lock_in_Period,
    Common_Areas,
    Managed_By,
    Non_Veg_Allowed,
    Opposite_Sex_Allowed,
    Any_Time_Allowed,
    Visitors_Allowed,
    Guardian_Allowed,
    Drinking_Allowed,
    Smoking_Allowed,
  };
  const TC_SR_PO = {
    Type,
    Service,
    Property_Type,
    Possession_Status,
    Available_From,
    Age_of_Property,
    Zone_Type,
    Location_Hub,
    Property_Condition,
    BuiltUp_Area,
    Ownership,
    Expected_Rent,
    Security_Deposit,
    Negotiable,
    DG_UPS_Included,
    Electricity_Included,
    Water_Included,
    Lock_in_Period,
    Expected_Rent_Increase,
  };
  const TC_SR_PR = {
    Type,
    Service,
    Property_Type,
    Possession_Status,
    Available_From,
    Age_of_Property,
    Suitable_For,
    Location_Hub,
    BuiltUp_Area,
    Carpet_Area,
    Entrance,
    Cieling,
    Located_Near,
    Ownership,
    Expected_Rent,
    Security_Deposit,
    Negotiable,
    Tax_Included,
    Electricity_Included,
    Lock_in_Period,
    Expected_Rent_Increase,
  };
  const TC_SS_PO = {
    Type,
    Service,
    Property_Type,
    Possession_Status,
    Age_of_Property,
    Zone_Type,
    Location_Hub,
    Property_Condition,
    BuiltUp_Area,
    Ownership,
    Price,
    Negotiable,
    Tax_Included,
    DG_UPS_Included,
  };
  const TC_SS_PR = {
    Type,
    Service,
    Property_Type,
    Possession_Status,
    Age_of_Property,
    Suitable_For,
    Location_Hub,
    BuiltUp_Area,
    Carpet_Area,
    Entrance,
    Cieling,
    Located_Near,
    Ownership,
    Price,
    Negotiable,
    Tax_Included,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (Type === "Commercial") {
      if (Service === "PG") {
        setService(undefined);
      }
      let array = ["Office", "Retail Shop", "Showroom"];
      if (!array.includes(Property_Type)) {
        setProperty_Type(undefined);
      }
    }
    if (Type === "Residential") {
      let array = ["Office", "Retail Shop", "Showroom"];
      if (array.includes(Property_Type)) {
        setProperty_Type(undefined);
      }
    }
  }, [Type]);

  useEffect(() => {
    if (Service === "Rent") {
      let array = ["Plot", "Agricultural Land"];
      if (array.includes(Property_Type)) {
        setProperty_Type(undefined);
      }
    }
  }, [Service]);

  const toggleoffer = (e, category) => {
    let value = e.target.innerHTML;
    if (Offers[category].includes(value)) {
      setOffers({
        ...Offers,
        [category]: Offers[category].filter((item) => item !== value),
      });
    } else {
      setOffers({ ...Offers, [category]: [...Offers[category], value] });
    }
  };

  const [loadingcontinue, setloadingcontinue] = useState(false)
  let data;
  
  
  const handlecontinue = (e) => {
    e.preventDefault();
    setloadingcontinue(true)
    if (Type === "Residential") {
        if (Service === "Rent") {
        data = TR_SR_P;
    } else if (Service === "Sell") {
        let array = ["Plot", "Agricultural Land"];
        if (!array.includes(Property_Type)) {
          data = TR_SS_PA;
        } else if (array.includes(Property_Type)) {
            data = TR_SS_PP;
        }
      } else if (Service === "PG") {
          data = TR_SP;
      }
    } else if (Type === "Commercial") {
      if (Service === "Rent") {
          if (Property_Type === "Office") {
              data = TC_SR_PO;
            } else if (
                Property_Type === "Retail Shop" ||
          Property_Type === "Showroom"
          ) {
            data = TC_SR_PR;
        }
      } else if (Service === "Sell") {
          if (Property_Type === "Office") {
              data = TC_SS_PO;
            } else if (
                Property_Type === "Retail Shop" ||
                Property_Type === "Showroom"
                ) {
            data = TC_SS_PR;
        }
    }
}

    let go = data ? true : false;
    // console.log('1',go)
    
    for (let key in data) {
        // console.log(key);
        let array = ['Maintainance_Charges','Carpet_Area','Offers','Tenant_Type','PG_Name','Meals_Speciality','Security_Deposit','Negotiable','DG_UPS_Included','Electricity_Included','Water_Included','Lock_in_Period','Expected_Rent_Increase','Located_Near']
        if(!array.includes(key) && (data[key]==='' || !data[key])){
            // console.log(key,data[key]);
            go = false;
            // console.log('2',go)
            break;
        }
    }

setTimeout(() => {
    // console.log('3',go)
    if (go) {
        const payloaddata = data;
        dispatch({
            type: NEW_BASIC_INFO_PROPERTY,
            payload: payloaddata,
        });
        navigate("/property/new/address");
    } else {
        alert.error("Please Fill All Required Fields");
    }
    setloadingcontinue(false)
    
}, 500);
  };


  return (
    <>
      <div className="post_property_main">
        <ul className="tab_head">
          <li className="active">
            Basic Info
            {(Type === "Commercial" || Service === "PG") && (
              <>
                <span className="subtab_cont">
                  {Type === "Commercial"
                    ? "1/3"
                    : Service === "PG"
                    ? "1/4"
                    : ""}
                </span>
              </>
            )}
          </li>
          <li className="disabled">Address</li>
          <li className="disabled">Photos</li>
        </ul>
        <div className="tab_content">
          <div className="basic_info">
            <div>
              <span className="mandatoryMarker">*</span>indicates a mandatory
              field
            </div>
            <div className="form_content">
              <div className="field commercial_new_icon">
                <div className="group">
                  <div className="title no_bottom">
                    I want to<span className="mandatoryMarker">*</span>
                  </div>
                  <div>
                    <div className="rf_group radio_group">
                      <div
                        className={`rf_toggle radio radio_0 toggle_tag pills ${
                          Type === "Residential" && "toggle_active"
                        }`}
                        onClick={() => setType("Residential")}
                      >
                        <div className={`toggle_label`}>Residential</div>
                      </div>
                      <div
                        className={`rf_toggle radio radio_0 toggle_tag pills ${
                          Type === "Commercial" && "toggle_active"
                        }`}
                        onClick={() => setType("Commercial")}
                      >
                        <div className={`toggle_label`}>Commercial</div>
                      </div>
                    </div>
                    <div className="errorStyle"></div>
                  </div>
                </div>
              </div>
              <div className="field new_icon">
                <div className="group">
                  <div className="title no_bottom">
                    I want to
                    <span className="mandatoryMarker">*</span>
                  </div>
                  <div>
                    <div className="rf_group radio_group">
                      <div
                        className={`rf_toggle radio radio_0 toggle_tag pills ${
                          Service === "Rent" && "toggle_active"
                        }`}
                        onClick={() => setService("Rent")}
                      >
                        <div className="toggle_label">Rent</div>
                      </div>
                      <div
                        className={`rf_toggle radio radio_1 toggle_tag pills ${
                          Service === "Sell" && "toggle_active"
                        }`}
                        onClick={() => setService("Sell")}
                      >
                        <div className="toggle_label">Sell</div>
                      </div>
                      {(Type === "Residential" || Type === undefined) && (
                        <div
                          className={`rf_toggle radio radio_2 toggle_tag pills ${
                            Service === "PG" && "toggle_active"
                          }`}
                          onClick={() => setService("PG")}
                        >
                          <div className="toggle_label">PG/Co-Living</div>
                        </div>
                      )}
                    </div>
                    <div className="errorStyle"></div>
                  </div>
                </div>
              </div>
              {Service !== "PG" || Type === "Commercial" ? (
                <>
                  <div className="field">
                    <div className="group">
                      <div className="title no_bottom">
                        Property Type
                        <span className="mandatoryMarker">*</span>
                      </div>
                      <div>
                        <div className="rf_group radio_group">
                          {Type === "Residential" || Type === undefined ? (
                            <>
                              <div
                                className={`rf_toggle radio radio_0 toggle_tag pills ${
                                  Property_Type === "Apartment"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() => setProperty_Type("Apartment")}
                              >
                                <div className="toggle_label">Apartment</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_1 toggle_tag pills ${
                                  Property_Type === "Independent Floor"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() =>
                                  setProperty_Type("Independent Floor")
                                }
                              >
                                <div className="toggle_label">
                                  Independent Floor
                                </div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_2 toggle_tag pills ${
                                  Property_Type === "Independent House"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() =>
                                  setProperty_Type("Independent House")
                                }
                              >
                                <div className="toggle_label">
                                  Independent House
                                </div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_3 toggle_tag pills ${
                                  Property_Type === "Villa"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() => setProperty_Type("Villa")}
                              >
                                <div className="toggle_label">Villa</div>
                              </div>
                              {(Service === "Sell" ||
                                Service === undefined) && (
                                <>
                                  <div
                                    className={`rf_toggle radio radio_3 toggle_tag pills ${
                                      Property_Type === "Plot"
                                        ? "toggle_active"
                                        : ""
                                    }`}
                                    onClick={() => setProperty_Type("Plot")}
                                  >
                                    <div className="toggle_label">Plot</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_3 toggle_tag pills ${
                                      Property_Type === "Agricultural Land"
                                        ? "toggle_active"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      setProperty_Type("Agricultural Land")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Agricultural Land
                                    </div>
                                  </div>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <div
                                className={`rf_toggle radio radio_3 toggle_tag pills ${
                                  Property_Type === "Office"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() => setProperty_Type("Office")}
                              >
                                <div className="toggle_label">Office</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_3 toggle_tag pills ${
                                  Property_Type === "Retail Shop"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() => setProperty_Type("Retail Shop")}
                              >
                                <div className="toggle_label">Retail Shop</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_3 toggle_tag pills ${
                                  Property_Type === "Showroom"
                                    ? "toggle_active"
                                    : ""
                                }`}
                                onClick={() => setProperty_Type("Showroom")}
                              >
                                <div className="toggle_label">Showroom</div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="errorStyle"></div>
                      </div>
                    </div>
                  </div>
                  {!(
                    Property_Type === "Plot" ||
                    Property_Type === "Agricultural Land"
                  ) &&
                    !(Type === "Commercial") && (
                      <>
                        {Type === "Residential" && Service === "Rent" && (
                          <>
                            <div className="field">
                              <div className="material_input dropdownContainer">
                                <input
                                  className={Age_of_Property && "has_value"}
                                  type="text"
                                  autoComplete="text"
                                  quickview="true"
                                  maxLength="2"
                                  section="basic"
                                  paramstate="flat_details.age_of_property"
                                  trackchange="true"
                                  pattern="^\d*(\.\d{0,2})?$"
                                    value={Age_of_Property || ''}
                                    onChange={(e) => setAge_of_Property(v=>e.target.validity.valid ? e.target.value : v)}
                                />
                                <label className="label">
                                  Age of Property (in years)
                                  <span className="mandatoryMarker">*</span>
                                </label>
                                <span className="helper">
                                  <span
                                    className="tooltip status_reason tooltip_bottom age_of_property_tooltip"
                                    data_title="This field describes how old is the property. For new properties enter 0 years."
                                  >
                                    {" "}
                                    <span className="va-middle status_reason_icon"></span>
                                  </span>
                                </span>
                                <ul className="result_cont"></ul>
                              </div>
                            </div>
                          </>
                        )}
                        {((Type === "Residential" && Service === "Sell") ||
                          Type === undefined) && (
                          <>
                            <div className="field">
                              <div className="group">
                                <div className="title no_bottom">
                                  Construction Status
                                  <span className="mandatoryMarker">*</span>
                                </div>
                                <div>
                                  <div className="rf_group radio_group">
                                    <div
                                      className={`rf_toggle radio radio_0 toggle_tag pills ${
                                        Construction_Status === "Ready to Move"
                                          ? "toggle_active"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        setConstruction_Status("Ready to Move")
                                      }
                                    >
                                      Ready to Move
                                    </div>
                                    <div
                                      className={`rf_toggle radio radio_1 toggle_tag pills ${
                                        Construction_Status ===
                                        "Under Construction"
                                          ? "toggle_active"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        setConstruction_Status(
                                          "Under Construction"
                                        )
                                      }
                                    >
                                      Under Construction
                                    </div>
                                  </div>
                                  <div className="errorStyle"></div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="field">
                          <div className="group">
                            <div className="title no_bottom">
                              BHK
                              <span className="mandatoryMarker">*</span>
                            </div>
                            <div>
                              <div className="rf_group radio_group">
                                <div
                                  className={`rf_toggle radio radio_0 toggle_tag pills ${
                                    BHK === "1rk" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setBHK("1rk")}
                                >
                                  1 RK
                                </div>
                                <div
                                  className={`rf_toggle radio radio_1 toggle_tag pills ${
                                    BHK === "1" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setBHK("1")}
                                >
                                  1 BHK
                                </div>
                                <div
                                  className={`rf_toggle radio radio_2 toggle_tag pills ${
                                    BHK === "2" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setBHK("2")}
                                >
                                  2 BHK
                                </div>
                                <div
                                  className={`rf_toggle radio radio_3 toggle_tag pills ${
                                    BHK === "3" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setBHK("3")}
                                >
                                  3 BHK
                                </div>
                                <div
                                  className={`rf_toggle radio radio_4 toggle_tag pills ${
                                    BHK === "3+" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setBHK("3+")}
                                >
                                  3+ BHK
                                </div>
                              </div>
                              <div className="errorStyle"></div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <div className="group">
                            <div className="title no_bottom">
                              Furnish Type
                              <span className="mandatoryMarker">*</span>
                            </div>
                            <div>
                              <div className="rf_group radio_group">
                                <div
                                  className={`rf_toggle radio radio_0 toggle_tag pills ${
                                    Furnish_Type === "Fully Furnished"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    setFurnish_Type("Fully Furnished")
                                  }
                                >
                                  Fully Furnished
                                </div>
                                <div
                                  className={`rf_toggle radio radio_1 toggle_tag pills ${
                                    Furnish_Type === "Semi Furnished"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    setFurnish_Type("Semi Furnished")
                                  }
                                >
                                  Semi Furnished
                                </div>
                                <div
                                  className={`rf_toggle radio radio_2 toggle_tag pills ${
                                    Furnish_Type === "UnFurnished"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() => setFurnish_Type("UnFurnished")}
                                >
                                  UnFurnished
                                </div>
                              </div>
                              <div className="errorStyle"></div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <div className="group">
                            <div className="title no_bottom">
                              Covered Parking
                              <span className="mandatoryMarker">*</span>
                            </div>
                            <div>
                              <div className="rf_group radio_group">
                                <div
                                  className={`rf_toggle radio radio_0 toggle_tag pills ${
                                    Covered_Parking === "0"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() => setCovered_Parking("0")}
                                >
                                  0
                                </div>
                                <div
                                  className={`rf_toggle radio radio_1 toggle_tag pills ${
                                    Covered_Parking === "1"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() => setCovered_Parking("1")}
                                >
                                  1
                                </div>
                                <div
                                  className={`rf_toggle radio radio_2 toggle_tag pills ${
                                    Covered_Parking === "2"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() => setCovered_Parking("2")}
                                >
                                  2
                                </div>
                                <div
                                  className={`rf_toggle radio radio_3 toggle_tag pills ${
                                    Covered_Parking === "3"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() => setCovered_Parking("3")}
                                >
                                  3
                                </div>
                                <div
                                  className={`rf_toggle radio radio_4 toggle_tag pills ${
                                    Covered_Parking === "3+"
                                      ? "toggle_active"
                                      : ""
                                  }`}
                                  onClick={() => setCovered_Parking("3+")}
                                >
                                  3+
                                </div>
                              </div>
                              <div className="errorStyle"></div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <div className="group">
                            <div className="title no_bottom">
                              Open Parking
                              <span className="mandatoryMarker">*</span>
                            </div>
                            <div>
                              <div className="rf_group radio_group">
                                <div
                                  className={`rf_toggle radio radio_0 toggle_tag pills ${
                                    Open_Parking === "0" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setOpen_Parking("0")}
                                >
                                  0
                                </div>
                                <div
                                  className={`rf_toggle radio radio_1 toggle_tag pills ${
                                    Open_Parking === "1" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setOpen_Parking("1")}
                                >
                                  1
                                </div>
                                <div
                                  className={`rf_toggle radio radio_2 toggle_tag pills ${
                                    Open_Parking === "2" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setOpen_Parking("2")}
                                >
                                  2
                                </div>
                                <div
                                  className={`rf_toggle radio radio_3 toggle_tag pills ${
                                    Open_Parking === "3" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setOpen_Parking("3")}
                                >
                                  3
                                </div>
                                <div
                                  className={`rf_toggle radio radio_4 toggle_tag pills ${
                                    Open_Parking === "3+" ? "toggle_active" : ""
                                  }`}
                                  onClick={() => setOpen_Parking("3+")}
                                >
                                  3+
                                </div>
                              </div>
                              <div className="errorStyle"></div>
                            </div>
                          </div>
                        </div>
                        {Type === "Residential" && Service === "Rent" && (
                          <>
                            <div className="field">
                              <div className="material_input dropdownContainer">
                                <input
                                  className={Available_From && "has_value"}
                                  type="text"
                                  autoComplete="text"
                                  possessiontitle="Possession Date"
                                  section="basic"
                                  quickview="true"
                                  paramstate="flat_details.available_from"
                                  trackchange="true"
                                    value={Available_From || ''}
                                    onChange={(e) => setAvailable_From(e.target.value)}
                                />
                                <label className="label">
                                  Available From
                                  <span className="mandatoryMarker">*</span>
                                </label>
                                <span className="helper">
                                  <span className="icon_calendar"></span>
                                </span>
                                <ul className="result_cont"></ul>
                              </div>
                            </div>
                          </>
                        )}
                        {Type === "Residential" && Service === "Rent" && (
                          <>
                            <div className="field">
                              <div className="material_input icn dropdownContainer">
                                <input
                                  className={Monthly_Rent && "has_value"}
                                  type="text"
                                  autoComplete="text"
                                  maxLength="9"
                                  section="basic"
                                  trackchange="true"
                                  paramstate="user_flats[0].user_flat_details.rent"
                                  pattern="^\d*(\.\d{0,2})?$"
                                    value={Monthly_Rent || ''}
                                    onChange={(e) => setMonthly_Rent(v=>e.target.validity.valid ? e.target.value : v)}
                                />
                                <label className="label">
                                  Monthly Rent
                                  <span className="mandatoryMarker">*</span>
                                </label>
                                <span className="icon icon_rupee"></span>
                                <ul className="result_cont"></ul>
                              </div>
                            </div>
                          </>
                        )}
                        {(Type === "Residential" || Type === undefined) &&
                          (Service === "Sell" || Service === undefined) && (
                            <>
                              <div className="field">
                                <div className="material_input icn dropdownContainer">
                                  <input
                                    className={Cost && "has_value"}
                                    type="text"
                                    autoComplete="text"
                                    plottitle="Plot Price"
                                    trackchange="true"
                                    maxLength="14"
                                    section="basic"
                                    paramstate="user_flats[0].user_flat_details.price"
                                    pattern="^\d*(\.\d{0,2})?$"
                                    value={Cost || ''}
                                    onChange={(e) => setCost(v=>e.target.validity.valid ? v=>e.target.validity.valid ? e.target.value : v : v)}
                                  />
                                  <label className="label">
                                    Cost
                                    <span className="mandatoryMarker">*</span>
                                  </label>
                                  <span className="icon icon_rupee"></span>
                                  <ul className="result_content"></ul>
                                </div>
                              </div>
                            </>
                          )}
                      </>
                    )}
                  {Type === "Residential" &&
                    Service === "Sell" &&
                    (Property_Type === "Plot" ||
                      Property_Type === "Agricultural Land") && (
                      <>
                        <div className="field">
                          <div className="group">
                            <div className="title no_bottom">
                              Possession Status
                              <span className="mandatoryMarker">*</span>
                            </div>
                            <div>
                              <div className="rf_group radio_group is_uc_property">
                                <div
                                  className={`rf_toggle radio radio_0 toggle_tag pills ${
                                    Possession_Status === "Immediate" &&
                                    "toggle_active"
                                  }`}
                                  onClick={() =>
                                    setPossession_Status("Immediate")
                                  }
                                >
                                  <div className="toggle_label">Immediate</div>
                                </div>
                                <div
                                  className={`rf_toggle radio radio_1 toggle_tag pills ${
                                    Possession_Status === "In Future" &&
                                    "toggle_active"
                                  }`}
                                  onClick={() =>
                                    setPossession_Status("In Future")
                                  }
                                >
                                  <div className="toggle_label">In Future</div>
                                </div>
                              </div>
                              <div className="errorStyle"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  {Type === "Commercial" && (
                    <>
                      <div className="field">
                        <div className="group">
                          <div className="title no_bottom">
                            Possession Status
                            <span className="mandatoryMarker">*</span>
                          </div>
                          <div>
                            <div className="rf_group radio_group is_uc_property">
                              <div
                                className={`rf_toggle radio radio_0 toggle_tag pills ${
                                  Possession_Status === "Ready to move" &&
                                  "toggle_active"
                                }`}
                                onClick={() =>
                                  setPossession_Status("Ready to move")
                                }
                              >
                                <div className="toggle_label">
                                  Ready to move
                                </div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_1 toggle_tag pills ${
                                  Possession_Status === "Under Construction" &&
                                  "toggle_active"
                                }`}
                                onClick={() =>
                                  setPossession_Status("Under Construction")
                                }
                              >
                                <div className="toggle_label">
                                  Under Construction
                                </div>
                              </div>
                            </div>
                            <div className="errorStyle"></div>
                          </div>
                        </div>
                      </div>
                      {Service === "Rent" && (
                        <>
                          <div className="field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Available_From && "has_value"}
                                type="text"
                                autoComplete="text"
                                possessiontitle="Possession Date"
                                section="basic"
                                quickview="true"
                                paramstate="flat_details.available_from"
                                trackchange="true"
                                value={Available_From || ''}
                                onChange={(e) =>
                                  setAvailable_From(e.target.value)
                                }
                              />
                              <label className="label">
                                Available From
                                <span className="mandatoryMarker">*</span>
                              </label>
                              <span className="helper">
                                <span className="icon_calendar"></span>
                              </span>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                        </>
                      )}
                      {Possession_Status === "Ready to move" && (
                        <>
                          <div className="field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Age_of_Property && "has_value"}
                                type="text"
                                autoComplete="text"
                                quickview="true"
                                maxLength="2"
                                section="basic"
                                paramstate="age_of_property_in_years"
                                trackchange="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Age_of_Property || ''}
                                    onChange={(e) => setAge_of_Property(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Age of Property (in years)
                                <span className="mandatoryMarker">*</span>
                              </label>
                              <span className="helper">
                                <span
                                  className="tooltip status_reason tooltip_bottom_left age_of_property_tooltip"
                                  data-title="This field describes how old is the property. For new properties enter 0 years."
                                >
                                  <span className="va_middle status_reason_icon"></span>
                                </span>
                              </span>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {Type === "Residential" &&
                    Service === "Sell" &&
                    (Property_Type === "Plot" ||
                      Property_Type === "Agricultural Land") && (
                      <>
                        <div className="field">
                          <div className="material_input icn dropdownContainer">
                            <input
                              className={Available_From && "has_value"}
                              type="text"
                              autoComplete="text"
                              plottitle="Plot Price"
                              trackchange="true"
                              maxLength="14"
                              section="basic"
                              paramstate="user_flats[0].user_flat_details.price"
                              pattern="^\d*(\.\d{0,2})?$"
                              value={Available_From || ''}
                              onChange={(e) => setAvailable_From(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Plot Price
                              <span className="mandatoryMarker">*</span>
                            </label>
                            <span className="icon icon_rupee"></span>
                            <ul className="result_cont"></ul>
                          </div>
                        </div>
                      </>
                    )}
                  {(Type === "Residential" || Type === undefined) &&
                    (Service === "Rent" ||
                      Service === "Sell" ||
                      Service === undefined) && (
                      <>
                        <div className="field">
                          <div className="material_input icn dropdownContainer">
                            <input
                              className={Maintainance_Charges && "has_value"}
                              type="text"
                              autoComplete="text"
                              maxLength="8"
                              section="basic"
                              quickview="true"
                              shortlabel="Maintenance Charges"
                              trackchange="true"
                              paramstate="flat_details.maintenance_charges_buy"
                              isvalid="true"
                              pattern="^\d*(\.\d{0,2})?$"
                                    value={Maintainance_Charges || ''}
                                    onChange={(e) => setMaintainance_Charges(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Maintenance Charges (per month)
                            </label>
                            <span className="icon icon_rupee"></span>
                            <ul className="result_content"></ul>
                          </div>
                        </div>
                      </>
                    )}
                  {Type === "Residential" &&
                    Service === "Sell" &&
                    (Property_Type === "Plot" ||
                      Property_Type === "Agricultural Land") && (
                      <>
                        <div className="field half va_top">
                          <div className="material_input dropdownContainer">
                            <input
                              className={Plot_Area && "has_value"}
                              type="text"
                              autoComplete="text"
                              maxLength="8"
                              section="basic"
                              quickview="true"
                              trackchange="true"
                              pattern="^\d*(\.\d{0,2})?$"
                                    value={Plot_Area || ''}
                                    onChange={(e) => setPlot_Area(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Plot Area
                              <span className="mandatoryMarker">*</span>
                            </label>
                            <span className="helper"> sq. ft.</span>
                            <ul className="result_cont"></ul>
                          </div>
                        </div>
                        <div className="field half second">
                          <div className="material_input dropdownContainer">
                            <input
                              className={Area_Unit && "has_value"}
                              type="text"
                              autoComplete="text"
                              section="basic"
                              quickview="true"
                              trackchange="true"
                              isvalid="true"
                              answered="true"
                              pattern="^\d*(\.\d{0,2})?$"
                                    value={Area_Unit || ''}
                                    onChange={(e) => setArea_Unit(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Area Unit
                              <span className="mandatoryMarker">*</span>
                            </label>
                            <span
                              className="helper_icon icon_arrow_down"
                              style={{ transition: "all 0.4s ease 0s" }}
                            ></span>
                            <ul className="result_cont">
                              <li className="opt">sq. ft.</li>
                              <li className="opt">sq. yd.</li>
                              <li className="opt">sq. mt.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="field half">
                          <div className="material_input dropdownContainer">
                            <input
                              className={Length && "has_value"}
                              type="text"
                              autoComplete="text"
                              maxLength="4"
                              section="basic"
                              quickview="true"
                              trackchange="true"
                              pattern="^\d*(\.\d{0,2})?$"
                                    value={Length || ''}
                                    onChange={(e) => setLength(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Length<span className="mandatoryMarker">*</span>
                            </label>
                            <span className="helper"> ft</span>
                            <ul className="result_cont"></ul>
                          </div>
                        </div>
                        <div className="field half second">
                          <div className="material_input dropdownContainer">
                            <input
                              className={Width && "has_value"}
                              type="text"
                              autoComplete="text"
                              maxLength="4"
                              section="basic"
                              quickview="true"
                              trackchange="true"
                              pattern="^\d*(\.\d{0,2})?$"
                                    value={Width || ''}
                                    onChange={(e) => setWidth(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Width<span className="mandatoryMarker">*</span>
                            </label>
                            <span className="helper"> ft</span>
                            <ul className="result_cont"></ul>
                          </div>
                        </div>
                      </>
                    )}
                  {Type === "Residential" && Service === "Rent" && (
                    <>
                      <div className="field">
                        <div className="group">
                          <div className="title no_bottom">
                            Do you take security deposit?
                            <span className="mandatoryMarker">*</span>
                          </div>
                          <div>
                            <div className="rf_group radio_group is_security_deposit_chargeable">
                              <div
                                className={`rf_toggle radio radio_0 toggle_tag pills ${
                                  security === true && "toggle_active"
                                }`}
                                onClick={() => setsecurity(true)}
                              >
                                <div className="toggle_label">Yes</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_1 toggle_tag pills ${
                                  security === false && "toggle_active"
                                }`}
                                onClick={() => setsecurity(false)}
                              >
                                <div className="toggle_label">No</div>
                              </div>
                            </div>
                            <div className="errorStyle"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {security === true && (
                    <>
                      <div className="field">
                        <div className="material_input icn dropdownContainer">
                          <input
                            className={Security_Deposit && "has_value"}
                            type="text"
                            autoComplete="text"
                            maxLength="9"
                            quickview="true"
                            trackchange="true"
                            section="basic"
                            paramstate="user_flats[0].user_flat_details.security_deposit"
                            pattern="^\d*(\.\d{0,2})?$"
                                    value={Security_Deposit || ''}
                                    onChange={(e) => setSecurity_Deposit(v=>e.target.validity.valid ? e.target.value : v)}
                          />
                          <label className="label">
                            Security Deposit
                            <span className="mandatoryMarker">*</span>
                          </label>
                          <span className="icon icon_rupee"></span>
                          <ul className="result_cont"></ul>
                        </div>
                      </div>
                    </>
                  )}
                  {Type === "Commercial" && (
                    <>
                      <div className="field">
                        <div className="comm_subheading">About the property</div>
                      </div>
                      {Property_Type !== "Office" ? (
                        <>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">
                                Suitable For
                                <span className="mandatoryMarker">*</span>
                              </div>
                              <div>
                                <div className="rf_group checkbox_group">
                                  <div
                                    className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                      Suitable_For === "Jewellery" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Jewellery")}
                                  >
                                    <div className="toggle_label">Jewellery</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                      Suitable_For === "Gym" && "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Gym")}
                                  >
                                    <div className="toggle_label">Gym</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_2 toggle_tag pills ${
                                      Suitable_For === "Grocery" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Grocery")}
                                  >
                                    <div className="toggle_label">Grocery</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_3 toggle_tag pills ${
                                      Suitable_For === "Clinic" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Clinic")}
                                  >
                                    <div className="toggle_label">Clinic</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_4 toggle_tag pills ${
                                      Suitable_For === "Footwear" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Footwear")}
                                  >
                                    <div className="toggle_label">Footwear</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_5 toggle_tag pills ${
                                      Suitable_For === "Electronics" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setSuitable_For("Electronics")
                                    }
                                  >
                                    <div className="toggle_label">Electronics</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_6 toggle_tag pills ${
                                      Suitable_For === "Clothing" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Clothing")}
                                  >
                                    <div className="toggle_label">Clothing</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_7 toggle_tag pills ${
                                      Suitable_For === "Others" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setSuitable_For("Others")}
                                  >
                                    <div className="toggle_label">Others</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">
                                Zone Type
                                <span className="mandatoryMarker">*</span>
                              </div>
                              <div>
                                <div className="rf_group radio_group zone_type_id">
                                  <div
                                    className={`rf_toggle radio radio_0 toggle_tag pills ${
                                      Zone_Type === "Industrial" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setZone_Type("Industrial")}
                                  >
                                    <div className="toggle_label">Industrial</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_1 toggle_tag pills ${
                                      Zone_Type === "Commercial" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setZone_Type("Commercial")}
                                  >
                                    <div className="toggle_label">Commercial</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_2 toggle_tag pills ${
                                      Zone_Type === "Residential" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setZone_Type("Residential")}
                                  >
                                    <div className="toggle_label">Residential</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_3 toggle_tag pills ${
                                      Zone_Type === "Special economic zone" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setZone_Type("Special economic zone")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Special economic zone
                                    </div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_4 toggle_tag pills ${
                                      Zone_Type === "Open Spaces" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setZone_Type("Open Spaces")}
                                  >
                                    <div className="toggle_label">Open Spaces</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_5 toggle_tag pills ${
                                      Zone_Type === "Agricultural zone" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setZone_Type("Agricultural zone")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Agricultural zone
                                    </div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_6 toggle_tag pills ${
                                      Zone_Type === "Others" && "toggle_active"
                                    }`}
                                    onClick={() => setZone_Type("Others")}
                                  >
                                    <div className="toggle_label">Others</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="field">
                        <div className="group">
                          <div className="title no_bottom">
                            Location Hub<span className="mandatoryMarker">*</span>
                          </div>
                          <div>
                            <div className="rf_group radio_group location_hub_type_id">
                              {Property_Type !== "Office" ? (
                                <>
                                  <div
                                    className={`rf_toggle radio radio_0 toggle_tag pills ${
                                      Location_Hub === "Mall" && "toggle_active"
                                    }`}
                                    onClick={() => setLocation_Hub("Mall")}
                                  >
                                    <div className="toggle_label">Mall</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_1 toggle_tag pills ${
                                      Location_Hub === "Commercial Project" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setLocation_Hub("Commercial Project")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Commercial Project
                                    </div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_2 toggle_tag pills ${
                                      Location_Hub === "Residential Project" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setLocation_Hub("Residential Project")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Residential Project
                                    </div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_3 toggle_tag pills ${
                                      Location_Hub ===
                                        "Retail Complex/Building" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setLocation_Hub("Retail Complex/Building")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Retail Complex/Building
                                    </div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_4 toggle_tag pills ${
                                      Location_Hub === "Market/High Street" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setLocation_Hub("Market/High Street")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Market/High Street
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div
                                    className={`rf_toggle radio radio_3 toggle_tag pills ${
                                      Location_Hub === "IT Park" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setLocation_Hub("IT Park")}
                                  >
                                    <div className="toggle_label">IT Park</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_4 toggle_tag pills ${
                                      Location_Hub === "Business Park" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setLocation_Hub("Business Park")
                                    }
                                  >
                                    <div className="toggle_label">
                                      Business Park
                                    </div>
                                  </div>
                                </>
                              )}
                              <div
                                className={`rf_toggle radio radio_5 toggle_tag pills ${
                                  Location_Hub === "Others" && "toggle_active"
                                }`}
                                onClick={() => setLocation_Hub("Others")}
                              >
                                <div className="toggle_label">Others</div>
                              </div>
                            </div>
                            <div className="errorStyle"></div>
                          </div>
                        </div>
                      </div>
                      {Property_Type === "Office" && (
                        <>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">
                                Property Condition
                                <span className="mandatoryMarker">*</span>
                              </div>
                              <div>
                                <div className="rf_group radio_group property_condition_id">
                                  <div
                                    className={`rf_toggle radio radio_0 toggle_tag pills ${
                                      Property_Condition === "Ready to use" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setProperty_Condition("Ready to use")
                                    }
                                  >
                                    <div className="toggle_label">Ready to use</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_1 toggle_tag pills ${
                                      Property_Condition === "Bare shell" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setProperty_Condition("Bare shell")
                                    }
                                  >
                                    <div className="toggle_label">Bare shell</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {!(
                    Property_Type === "Plot" ||
                    Property_Type === "Agricultural Land"
                  ) && (
                    <>
                      <div className="field">
                        <div className="material_input dropdownContainer">
                          <input
                            className={BuiltUp_Area && "has_value"}
                            type="text"
                            autoComplete="text"
                            trackchange="true"
                            maxLength="8"
                            section="basic"
                            quickview="true"
                            paramstate="flat_details.built_up_area"
                            pattern="^\d*(\.\d{0,2})?$"
                                    value={BuiltUp_Area || ''}
                                    onChange={(e) => setBuiltUp_Area(v=>e.target.validity.valid ? e.target.value : v)}
                          />
                          <label className="label">
                            Built Up Area
                            <span className="mandatoryMarker">*</span>
                          </label>
                          <span className="helper"> Sq. ft.</span>
                          <ul className="result_content"></ul>
                        </div>
                      </div>
                      {Property_Type !== "Office" && (
                        <>
                          <div className="field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Carpet_Area && "has_value"}
                                type="text"
                                autoComplete="text"
                                maxLength="8"
                                section="basic"
                                paramstate="flat_details.carpet_area"
                                trackchange="true"
                                isvalid="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Carpet_Area || ''}
                                    onChange={(e) => setCarpet_Area(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Carpet Area (Optional)
                              </label>
                              <span className="helper">sq. ft.</span>
                              <ul className="result_content"></ul>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {Type === "Commercial" && (
                    <>
                      {Property_Type !== "Office" && (
                        <>
                          <div className="field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Entrance && "has_value"}
                                type="number"
                                autoComplete="number"
                                section="basic"
                                paramstate="entrance_width"
                                trackchange="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Entrance || ''}
                                    onChange={(e) => setEntrance(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Entrance width in feet
                                <span className="mandatoryMarker">*</span>
                              </label>
                              <span className="helper">ft.</span>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                          <div className="field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Cieling && "has_value"}
                                type="number"
                                autoComplete="number"
                                section="basic"
                                paramstate="ceiling_height"
                                trackchange="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Cieling || ''}
                                    onChange={(e) => setCieling(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Ceiling height in feet
                                <span className="mandatoryMarker">*</span>
                              </label>
                              <span className="helper">ft.</span>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">Located Near</div>
                              <div>
                                <div className="rf_group checkbox_group">
                                  <div
                                    className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                      Located_Near === "Entrance" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setLocated_Near("Entrance")}
                                  >
                                    <div className="toggle_label">Entrance</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                      Located_Near === "Elevator" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setLocated_Near("Elevator")}
                                  >
                                    <div className="toggle_label">Elevator</div>
                                  </div>
                                  <div
                                    className={`rf_toggle checkbox checkbox_2 toggle_tag pills ${
                                      Located_Near === "Stairs" &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setLocated_Near("Stairs")}
                                  >
                                    <div className="toggle_label">Stairs</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="field">
                        <div className="group">
                          <div className="title no_bottom">
                            Ownership<span className="mandatoryMarker">*</span>
                          </div>
                          <div>
                            <div className="rf_group radio_group ownership_type_id">
                              <div
                                className={`rf_toggle radio radio_0 toggle_tag pills ${
                                  Ownership === "Freehold" && "toggle_active"
                                }`}
                                onClick={() => setOwnership("Freehold")}
                              >
                                <div className="toggle_label">Freehold</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_1 toggle_tag pills ${
                                  Ownership === "Leasehold" && "toggle_active"
                                }`}
                                onClick={() => setOwnership("Leasehold")}
                              >
                                <div className="toggle_label">Leasehold</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_2 toggle_tag pills ${
                                  Ownership === "Cooperative society" &&
                                  "toggle_active"
                                }`}
                                onClick={() =>
                                  setOwnership("Cooperative society")
                                }
                              >
                                <div className="toggle_label">
                                  Cooperative society
                                </div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_3 toggle_tag pills ${
                                  Ownership === "Power of attorney" &&
                                  "toggle_active"
                                }`}
                                onClick={() =>
                                  setOwnership("Power of attorney")
                                }
                              >
                                <div className="toggle_label">
                                  Power of attorney
                                </div>
                              </div>
                            </div>
                            <div className="errorStyle"></div>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <div className="comm_subheading">Financials</div>
                      </div>
                      {Service === "Sell" ? (
                        <>
                          <div className="field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Price && "has_value"}
                                type="text"
                                autoComplete="text"
                                section="basic"
                                trackchange="true"
                                paramstate="seller_commercial_details.price"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Price || ''}
                                    onChange={(e) => setPrice(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Price<span className="mandatoryMarker">*</span>
                              </label>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="field">
                            <div className="material_input icn dropdownContainer">
                              <input
                                className={Expected_Rent && "has_value"}
                                type="text"
                                autoComplete="text"
                                maxLength="9"
                                section="basic"
                                trackchange="true"
                                paramstate="seller_commercial_details.expected_rent"
                                pattern="^\d*(\.\d{0,2})?$"
                                
                                value={Expected_Rent || ''}
                                    onChange={(e) => setExpected_Rent(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Expected Rent
                                <span className="mandatoryMarker">*</span>
                              </label>
                              <span className="icon icon_rupee"></span>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                          <div className="field">
                            <div className="material_input icn dropdownContainer">
                              <input
                                className={Security_Deposit && "has_value"}
                                type="text"
                                autoComplete="text"
                                maxLength="9"
                                quickview="true"
                                paramstate="seller_commercial_details.security_deposit"
                                trackchange="true"
                                section="basic"
                                isvalid="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Security_Deposit || ''}
                                    onChange={(e) => setSecurity_Deposit(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">Security Deposit</label>
                              <span className="icon icon_rupee"></span>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                        </>
                      )}
                      <div className="field inline comm_field">
                        <div className="group">
                          <div className="title no_bottom">Negotiable</div>
                          <div>
                            <div className="rf_group radio_group is_negotiable">
                              <div
                                className={`rf_toggle radio radio_0 toggle_tag pills ${
                                  Negotiable === true && "toggle_active"
                                }`}
                                onClick={() => setNegotiable(true)}
                              >
                                <div className="toggle_label">Yes</div>
                              </div>
                              <div
                                className={`rf_toggle radio radio_1 toggle_tag pills ${
                                  Negotiable === false && "toggle_active"
                                }`}
                                onClick={() => setNegotiable(false)}
                              >
                                <div className="toggle_label">No</div>
                              </div>
                            </div>
                            <div className="errorStyle"></div>
                          </div>
                        </div>
                      </div>
                      {!(Service === "Rent" && Property_Type === "Office") && (
                        <>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">
                                Tax &amp; Govt. charge included?
                              </div>
                              <div>
                                <div className="rf_group radio_group tax_or_govt_charges_included">
                                  <div
                                    className={`rf_toggle radio radio_0 toggle_tag pills ${
                                      Tax_Included === true && "toggle_active"
                                    }`}
                                    onClick={() => setTax_Included(true)}
                                  >
                                    <div className="toggle_label">Yes</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_1 toggle_tag pills ${
                                      Tax_Included === false && "toggle_active"
                                    }`}
                                    onClick={() => setTax_Included(false)}
                                  >
                                    <div className="toggle_label">No</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {Property_Type === "Office" && (
                        <>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">
                                DG &amp; UPS Charge included?
                              </div>
                              <div>
                                <div className="rf_group radio_group dg_and_ups_charge_included">
                                  <div
                                    className={`rf_toggle radio radio_0 toggle_tag pills ${
                                      DG_UPS_Included === true &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setDG_UPS_Included(true)}
                                  >
                                    <div className="toggle_label">Yes</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_1 toggle_tag pills ${
                                      DG_UPS_Included === false &&
                                      "toggle_active"
                                    }`}
                                    onClick={() => setDG_UPS_Included(false)}
                                  >
                                    <div className="toggle_label">No</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {Service === "Rent" && (
                        <>
                          <div className="field">
                            <div className="group">
                              <div className="title no_bottom">
                                Electricity charges included?
                              </div>
                              <div>
                                <div className="rf_group radio_group electricity_charges_included">
                                  <div
                                    className={`rf_toggle radio radio_0 toggle_tag pills ${
                                      Electricity_Included === true &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setElectricity_Included(true)
                                    }
                                  >
                                    <div className="toggle_label">Yes</div>
                                  </div>
                                  <div
                                    className={`rf_toggle radio radio_1 toggle_tag pills ${
                                      Electricity_Included === false &&
                                      "toggle_active"
                                    }`}
                                    onClick={() =>
                                      setElectricity_Included(false)
                                    }
                                  >
                                    <div className="toggle_label">No</div>
                                  </div>
                                </div>
                                <div className="errorStyle"></div>
                              </div>
                            </div>
                          </div>
                          {Property_Type === "Office" && (
                            <>
                              <div className="field">
                                <div className="group">
                                  <div className="title no_bottom">
                                    Water charges included?
                                  </div>
                                  <div>
                                    <div className="rf_group radio_group water_charges_included">
                                      <div
                                        className={`rf_toggle radio radio_0 toggle_tag pills ${
                                          Water_Included === true &&
                                          "toggle_active"
                                        }`}
                                        onClick={() => setWater_Included(true)}
                                      >
                                        <div className="toggle_label">Yes</div>
                                      </div>
                                      <div
                                        className={`rf_toggle radio radio_1 toggle_tag pills ${
                                          Water_Included === false &&
                                          "toggle_active"
                                        }`}
                                        onClick={() => setWater_Included(false)}
                                      >
                                        <div className="toggle_label">No</div>
                                      </div>
                                    </div>
                                    <div className="errorStyle"></div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          <div className="field inline comm_field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={Lock_in_Period && "has_value"}
                                type="text"
                                autoComplete="text"
                                maxLength="3"
                                section="basic"
                                trackchange="true"
                                paramstate="seller_commercial_details.lock_in_period_months"
                                isvalid="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Lock_in_Period || ''}
                                    onChange={(e) => setLock_in_Period(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">Lock-in Period</label>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                          <div className="field inline comm_field">
                            <div className="material_input dropdownContainer">
                              <input
                                className={
                                  Expected_Rent_Increase && "has_value"
                                }
                                type="text"
                                autoComplete="text"
                                section="basic"
                                trackchange="true"
                                paramstate="seller_commercial_details.expected_yearly_rent_increase_percent"
                                isvalid="true"
                                pattern="^\d*(\.\d{0,2})?$"
                                    value={Expected_Rent_Increase || ''}
                                    onChange={(e) => setExpected_Rent_Increase(v=>e.target.validity.valid ? e.target.value : v)}
                              />
                              <label className="label">
                                Expected Rent Increase
                              </label>
                              <ul className="result_cont"></ul>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                  {Type === "Residential" && (
                    <>
                      <div className="field">
                        <div>
                          <div className="css_kbasuc">
                            <span className="css_1ezgv1">Offers</span> (Increase
                            leads on your property{" "}
                            <span className="css_1ezgv1">upto 50%</span>)
                          </div>
                          <div className="css_1regm4h">
                            <div className="css_7mgr3e">Legal</div>
                            <div className="css_102kyxh">
                              <div
                                className={
                                  Offers.Legal.includes("Free rental agreement")
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Legal")}
                              >
                                Free rental agreement
                              </div>
                              <div
                                className={
                                  Offers.Legal.includes(
                                    "Free police verification"
                                  )
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Legal")}
                              >
                                Free police verification
                              </div>
                            </div>
                            <div className="css_7mgr3e">Rentals</div>
                            <div className="css_102kyxh">
                              <div
                                className={
                                  Offers.Rentals.includes("Zero brokerage")
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Rentals")}
                              >
                                Zero brokerage
                              </div>
                              <div
                                className={
                                  Offers.Rentals.includes("15 days rent off")
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Rentals")}
                              >
                                15 days rent off
                              </div>
                              <div
                                className={
                                  Offers.Rentals.includes("1 month rent off")
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Rentals")}
                              >
                                1 month rent off
                              </div>
                            </div>
                            <div className="css_7mgr3e">Security Deposit</div>
                            <div className="css_102kyxh">
                              <div
                                className={
                                  Offers.Security_Deposit.includes(
                                    "Only one month security deposit"
                                  )
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) =>
                                  toggleoffer(e, "Security_Deposit")
                                }
                              >
                                Only one month security deposit
                              </div>
                              <div
                                className={
                                  Offers.Security_Deposit.includes(
                                    "10% discount on security deposit"
                                  )
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) =>
                                  toggleoffer(e, "Security_Deposit")
                                }
                              >
                                10% discount on security deposit
                              </div>
                              <div
                                className={
                                  Offers.Security_Deposit.includes(
                                    "30% discount on security deposit"
                                  )
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) =>
                                  toggleoffer(e, "Security_Deposit")
                                }
                              >
                                30% discount on security deposit
                              </div>
                            </div>
                            <div className="css_7mgr3e">Home Services</div>
                            <div className="css_102kyxh">
                              <div
                                className={
                                  Offers.Home_Services.includes(
                                    "Free deep cleaning Service"
                                  )
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Home_Services")}
                              >
                                Free deep cleaning Service
                              </div>
                              <div
                                className={
                                  Offers.Home_Services.includes(
                                    "Free painting Service"
                                  )
                                    ? "css_oa3svq"
                                    : "css_1b9k6ne"
                                }
                                onClick={(e) => toggleoffer(e, "Home_Services")}
                              >
                                Free painting Service
                              </div>
                            </div>
                          </div>
                          <div className="material_text">
                            <textarea
                              className=""
                              maxLength="100"
                              style={{ height: "28px" }}
                            ></textarea>
                            <label className="label">
                              Enter other attractive offers (Max 100 characters)
                            </label>
                            <span className="helper">0 / 100</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {Type === "Residential" && Service === "Rent" && (
                    <>
                      <div className="field">
                        <div className="group">
                          <div className="title no_bottom">
                            Preferred Tenant Type
                          </div>
                          <div>
                            <div className="rf_group checkbox_group lease_type_ids">
                              <div
                                className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                  Tenant_Type === "Family" && "toggle_active"
                                }`}
                                onClick={() => setTenant_Type("Family")}
                              >
                                <div className="toggle_label">Family</div>
                              </div>
                              <div
                                className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                  Tenant_Type === "Bachelors" && "toggle_active"
                                }`}
                                onClick={() => setTenant_Type("Bachelors")}
                              >
                                <div className="toggle_label">Bachelors</div>
                              </div>
                              <div
                                className={`rf_toggle checkbox checkbox_2 toggle_tag pills ${
                                  Tenant_Type === "Company" && "toggle_active"
                                }`}
                                onClick={() => setTenant_Type("Company")}
                              >
                                <div className="toggle_label">Company</div>
                              </div>
                            </div>
                            <div className="errorStyle"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {Type === "Residential" &&
                    Service === "Sell" &&
                    (Property_Type === "Plot" ||
                      Property_Type === "Agricultural Land") && (
                      <>
                        <div className="field">
                          <div className="material_input dropdownContainer">
                            <input
                              className={Width_of_Facing_Road && "has_value"}
                              type="text"
                              autoComplete="text"
                              maxLength="8"
                              section="basic"
                              quickview="true"
                              trackchange="true"
                              pattern="^\d*(\.\d{0,2})?$"
                                    value={Width_of_Facing_Road || ''}
                                    onChange={(e) => setWidth_of_Facing_Road(v=>e.target.validity.valid ? e.target.value : v)}
                            />
                            <label className="label">
                              Width of Facing Road
                              <span className="mandatoryMarker">*</span>
                            </label>
                            <span className="helper"> ft</span>
                            <ul className="result_cont"></ul>
                          </div>
                        </div>
                      </>
                    )}
                </>
              ) : (
                (Type === "Residential" || Type === undefined) && (
                  <>
                    <div className="field">
                      <div className="pg_subheading">PG DETAILS</div>
                    </div>
                    <div className="field">
                      <div className="material_input dropdownContainer">
                        <input
                          className={PG_Name && "has_value"}
                          type="text"
                          autoComplete="text"
                          paramstate="flat_details.pg_name"
                          isvalid="true"
                          pattern="^\d*(\.\d{0,2})?$"
                                    value={PG_Name || ''}
                                    onChange={(e) => setPG_Name(v=>e.target.validity.valid ? e.target.value : v)}
                        />
                        <label className="label">PG Name (Optional)</label>
                        <ul className="result_cont"></ul>
                      </div>
                    </div>
                    <div className="field">
                      <div className="material_input dropdownContainer">
                        <input
                          className={Total_Beds && "has_value"}
                          type="text"
                          autoComplete="text"
                          paramstate="flat_details.total_beds"
                          pattern="^\d*(\.\d{0,2})?$"
                                    value={Total_Beds || ''}
                                    onChange={(e) => setTotal_Beds(v=>e.target.validity.valid ? e.target.value : v)}
                        />
                        <label className="label">
                          Total Beds<span className="mandatoryMarker">*</span>
                        </label>
                        <ul className="result_cont"></ul>
                      </div>
                    </div>
                    <div className="field inline mobile">
                      <div className="group">
                        <div className="title no_bottom">
                          PG is for<span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group checkbox_group available_for">
                            <div
                              className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                For === "Girls" && "toggle_active"
                              }`}
                              onClick={() => setFor("Girls")}
                            >
                              <div className="toggle_label">Girls</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                For === "Boys" && "toggle_active"
                              }`}
                              onClick={() => setFor("Boys")}
                            >
                              <div className="toggle_label">Boys</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline mobile">
                      <div className="group">
                        <div className="title no_bottom">
                          Best suited for
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group checkbox_group suitable_entity_type_ids">
                            <div
                              className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                Best_For === "Students" && "toggle_active"
                              }`}
                              onClick={() => setBest_For("Students")}
                            >
                              <div className="toggle_label">Students</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                Best_For === "Professionals" && "toggle_active"
                              }`}
                              onClick={() => setBest_For("Professionals")}
                            >
                              <div className="toggle_label">Professionals</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field mobile">
                      <div className="group">
                        <div className="title no_bottom">
                          Meals Available
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group meals_available">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                meals === true && "toggle_active"
                              }`}
                              onClick={() => setmeals(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                meals === false && "toggle_active"
                              }`}
                              onClick={() => setmeals(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    {meals && (
                      <>
                        <div className="field">
                          <div className="group">
                            <div className="title no_bottom">
                              Meal Offerings
                              <span className="mandatoryMarker">*</span>
                            </div>
                            <div>
                              <div className="rf_group checkbox_group meal_type_ids">
                                <div
                                  className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                    Meals_Offerings === "Breakfast" &&
                                    "toggle_active"
                                  }`}
                                  onClick={() =>
                                    setMeals_Offerings("Breakfast")
                                  }
                                >
                                  <div className="toggle_label">Breakfast</div>
                                </div>
                                <div
                                  className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                    Meals_Offerings === "Lunch" &&
                                    "toggle_active"
                                  }`}
                                  onClick={() => setMeals_Offerings("Lunch")}
                                >
                                  <div className="toggle_label">Lunch</div>
                                </div>
                                <div
                                  className={`rf_toggle checkbox checkbox_2 toggle_tag pills ${
                                    Meals_Offerings === "Dinner" &&
                                    "toggle_active"
                                  }`}
                                  onClick={() => setMeals_Offerings("Dinner")}
                                >
                                  <div className="toggle_label">Dinner</div>
                                </div>
                              </div>
                              <div className="errorStyle"></div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="field mobile pg_dropdown">
                      <div className="group">
                        <div className="title no_bottom">
                          Meal Speciality (Optional)
                        </div>
                        <div>
                          <div className="rf_group checkbox_group meal_cuisine_ids">
                            <div
                              className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                Meals_Speciality === "Punjabi" &&
                                "toggle_active"
                              }`}
                              onClick={() => setMeals_Speciality("Punjabi")}
                            >
                              <div className="toggle_label">Punjabi</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                Meals_Speciality === "South Indian" &&
                                "toggle_active"
                              }`}
                              onClick={() =>
                                setMeals_Speciality("South Indian")
                              }
                            >
                              <div className="toggle_label">South Indian</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_2 toggle_tag pills ${
                                Meals_Speciality === "Andhra" && "toggle_active"
                              }`}
                              onClick={() => setMeals_Speciality("Andhra")}
                            >
                              <div className="toggle_label">Andhra</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_3 toggle_tag pills ${
                                Meals_Speciality === "North Indian" &&
                                "toggle_active"
                              }`}
                              onClick={() =>
                                setMeals_Speciality("North Indian")
                              }
                            >
                              <div className="toggle_label">North Indian</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_4 toggle_tag pills ${
                                Meals_Speciality === "Others" && "toggle_active"
                              }`}
                              onClick={() => setMeals_Speciality("Others")}
                            >
                              <div className="toggle_label">Others</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline pg_text">
                      <div className="material_input dropdownContainer">
                        <input
                          className={Notice_Period && "has_value"}
                          type="text"
                          autoComplete="text"
                          paramstate="flat_details.notice_period_in_days"
                          pattern="^\d*(\.\d{0,2})?$"
                                    value={Notice_Period || ''}
                                    onChange={(e) => setNotice_Period(v=>e.target.validity.valid ? e.target.value : v)}
                        />
                        <label className="label">
                          Notice Period (Days)
                          <span className="mandatoryMarker">*</span>
                        </label>
                        <ul className="result_cont"></ul>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="material_input dropdownContainer">
                        <input
                          className={Lock_in_Period && "has_value"}
                          type="text"
                          autoComplete="text"
                          paramstate="flat_details.lock_in_period"
                          pattern="^\d*(\.\d{0,2})?$"
                                    value={Lock_in_Period || ''}
                                    onChange={(e) => setLock_in_Period(v=>e.target.validity.valid ? e.target.value : v)}
                        />
                        <label className="label">
                          Lock in Period (Days)
                          <span className="mandatoryMarker">*</span>
                        </label>
                        <ul className="result_cont"></ul>
                      </div>
                    </div>
                    <div className="field">
                      <div className="group">
                        <div className="title no_bottom">
                          Common Areas<span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group checkbox_group common_area_type_ids">
                            <div
                              className={`rf_toggle checkbox checkbox_0 toggle_tag pills ${
                                Common_Areas === "Living Room" &&
                                "toggle_active"
                              }`}
                              onClick={() => setCommon_Areas("Living Room")}
                            >
                              <div className="toggle_label">Living Room</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_1 toggle_tag pills ${
                                Common_Areas === "Kitchen" && "toggle_active"
                              }`}
                              onClick={() => setCommon_Areas("Kitchen")}
                            >
                              <div className="toggle_label">Kitchen</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_2 toggle_tag pills ${
                                Common_Areas === "Dining Hall" &&
                                "toggle_active"
                              }`}
                              onClick={() => setCommon_Areas("Dining Hall")}
                            >
                              <div className="toggle_label">Dining Hall</div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_3 toggle_tag pills ${
                                Common_Areas === "Study Room / Library" &&
                                "toggle_active"
                              }`}
                              onClick={() =>
                                setCommon_Areas("Study Room / Library")
                              }
                            >
                              <div className="toggle_label">
                                Study Room / Library
                              </div>
                            </div>
                            <div
                              className={`rf_toggle checkbox checkbox_4 toggle_tag pills ${
                                Common_Areas === "Breakout Room" &&
                                "toggle_active"
                              }`}
                              onClick={() => setCommon_Areas("Breakout Room")}
                            >
                              <div className="toggle_label">Breakout Room</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="pg_subheading">OWNER / CARETAKER DETAILS</div>
                    </div>
                    <div className="field">
                      <div className="group">
                        <div className="title no_bottom">
                          Property Managed By
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group property_manager_type_id">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Managed_By === "Landlord" && "toggle_active"
                              }`}
                              onClick={() => setManaged_By("Landlord")}
                            >
                              <div className="toggle_label">Landlord</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Managed_By === "Caretaker" && "toggle_active"
                              }`}
                              onClick={() => setManaged_By("Caretaker")}
                            >
                              <div className="toggle_label">Caretaker</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_2 toggle_tag pills ${
                                Managed_By === "Dedicated Professional" &&
                                "toggle_active"
                              }`}
                              onClick={() =>
                                setManaged_By("Dedicated Professional")
                              }
                            >
                              <div className="toggle_label">
                                Dedicated Professional
                              </div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="group">
                        <div className="title no_bottom">
                          Property Manager stays at Property
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group manager_on_property">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Manager_Stays === true && "toggle_active"
                              }`}
                              onClick={() => setManager_Stays(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Manager_Stays === false && "toggle_active"
                              }`}
                              onClick={() => setManager_Stays(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <div className="pg_subheading">PG RULES</div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Non Veg Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group is_non_veg_allowed">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Non_Veg_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setNon_Veg_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Non_Veg_Allowed === false && "toggle_active"
                              }`}
                              onClick={() => setNon_Veg_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Opposite Sex Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group is_opposite_sex_allowed">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Opposite_Sex_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setOpposite_Sex_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Opposite_Sex_Allowed === false &&
                                "toggle_active"
                              }`}
                              onClick={() => setOpposite_Sex_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Any Time Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group timing_restriction">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Any_Time_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setAny_Time_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Any_Time_Allowed === false && "toggle_active"
                              }`}
                              onClick={() => setAny_Time_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Visitors Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group are_visitors_allowed">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Visitors_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setVisitors_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Visitors_Allowed === false && "toggle_active"
                              }`}
                              onClick={() => setVisitors_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Guardian Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group is_guardian_allowed">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Guardian_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setGuardian_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Guardian_Allowed === false && "toggle_active"
                              }`}
                              onClick={() => setGuardian_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Drinking Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group is_drinking_allowed">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Drinking_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setDrinking_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Drinking_Allowed === false && "toggle_active"
                              }`}
                              onClick={() => setDrinking_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                    <div className="field inline">
                      <div className="group">
                        <div className="title no_bottom">
                          Smoking Allowed
                          <span className="mandatoryMarker">*</span>
                        </div>
                        <div>
                          <div className="rf_group radio_group is_smoking_allowed">
                            <div
                              className={`rf_toggle radio radio_0 toggle_tag pills ${
                                Smoking_Allowed === true && "toggle_active"
                              }`}
                              onClick={() => setSmoking_Allowed(true)}
                            >
                              <div className="toggle_label">Yes</div>
                            </div>
                            <div
                              className={`rf_toggle radio radio_1 toggle_tag pills ${
                                Smoking_Allowed === false && "toggle_active"
                              }`}
                              onClick={() => setSmoking_Allowed(false)}
                            >
                              <div className="toggle_label">No</div>
                            </div>
                          </div>
                          <div className="errorStyle"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}

              <div className="btn_cont">
                <button
                  onClick={handlecontinue}
                  className={`btn secondary ${loadingcontinue && "disabled"}`}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basic;
