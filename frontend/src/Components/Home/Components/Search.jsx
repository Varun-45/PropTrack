import React, { useEffect, useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getallproperties } from "../../../Actions/propertyaction";
import "./Search.css";

const Search = () => {
  const dispatch = useDispatch(),
    navigate = useNavigate();
  const [searchaniwidth, setsearchaniwidth] = useState(""),
    [searchanileft, setsearchanileft] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [location, dispatchLocation] = useReducer((state, action) => {
    action.value = action.value.toLowerCase();
    switch (action.type.toLowerCase()) {
      case "add":
        if (state.includes(action.value)) return state;
        return [...state, action.value].sort((a, b) => a.length - b.length);
      case "remove":
        const newState = state.filter((value) => value !== action.value);
        if (newState.length === state.length) return state;
        return newState;
      default:
        return state;
    }
  }, []);
  const [budget, dispatchBudget] = useReducer(
    (state, action) => {
      const e = action.event,
        field = e.target.parentElement.dataset.field;
      action.type = action.type.toLowerCase();

      if (action.type === "unit") {
        state[field].unit = e.target.value;
      } else if (/base/i.test(action.type)) {
        switch (action.type.substring(4)) {
          case "input":
            const base = e.target.value.replace(/\D+/, "");
            if (state[field].base === base) return state;
            state[field].base = Number(base);
            break;
          case "upbyone":
            state[field].base = Number(state[field].base) + 1;
            break;
          case "downbyone":
            if (Number(state[field].base) === 0) return state;
            state[field].base = Number(state[field].base) - 1;
            break;
          default:
            return state;
        }
      }
      return { ...state };
    },
    {
      max: {
        base: 0,
        unit: "crore",
      },
      min: {
        base: 0,
        unit: "lakh",
      },
    }
  );
  const allProperties = {
    residential: [
      "flat",
      "house/villa",
      "plot",
      "1 bhk",
      "2 bhk",
      "3 bhk",
      "4 bhk",
      "5 bhk",
      "5+ bhk",
    ],
    commercial: [
      "office space",
      "shop/showroom",
      "commercial land",
      "warehouse/godown",
      "industrial building",
      "industrial shed",
    ],
    others: ["agriculture land", "farm house"],
  };
  const [selectedProperties, setSelectedProperties] = useState(
    new Set(["flat", "house/villa", "2 bhk", "3 bhk"])
  );

  const setWidthAndLeft = (e) => {
      setsearchaniwidth(e.target.scrollWidth);
      setsearchanileft(e.target.offsetLeft);
    },
    setToDefault = () => {
      const firstTab = document.getElementsByClassName("search_tab_item")[0];
      setsearchaniwidth(firstTab.scrollWidth);
      setsearchanileft(firstTab.offsetLeft);
    };

  useEffect(() => {
    setTimeout(setToDefault, 3000);
  }, []);

  const handleLocationInputChange = (event) => {
    // If enter key is not pressed, then do nothing
    if (
      event.isComposing ||
      event.keyCode === 229 ||
      !/^enter$/i.test(event.key)
    )
      return;
    // If enter key is pressed
    // Then take the input value and update the local state
    let value = event.target.value.trim();
    if (value === "") return;
    value = value.replace(/\s{2,}/g, " ");
    dispatchLocation({ type: "add", value });
    // Clear field
    event.target.value = "";
  };
  const removeLocation = (e) => {
    dispatchLocation({
      type: "remove",
      value: e.currentTarget.dataset.location,
    });
  };

  const handleBaseChange = (e) => {
    dispatchBudget({ type: "baseInput", event: e });
  };
  const handleUnitChange = (e) => {
    dispatchBudget({ type: "unit", event: e });
  };
  const handleKeyDown = (e) => {
    if (e.isComposing || e.keyCode === 229) return;
    switch (e.code.toLowerCase()) {
      case "arrowup":
        e.preventDefault();
        dispatchBudget({ type: "baseUpByOne", event: e });
        break;
      case "arrowdown":
        e.preventDefault();
        dispatchBudget({ type: "baseDownByOne", event: e });
        break;
      default:
    }
  };
  const handleDropdownChange = (e) => {
    if (dropdown === e.currentTarget.dataset.search) setDropdown("");
    else setDropdown(e.currentTarget.dataset.search);
  };
  const togglePropertySelection = (e) => {
    setSelectedProperties((cur) => {
      if (!cur.has(e.target.dataset.value))
        return new Set(cur).add(e.target.dataset.value);

      const newState = new Set(cur);
      newState.delete(e.target.dataset.value);
      return newState;
    });
  };
  const handleSubmit = () => {
    const keyword = location.join("|");
    const minPrice = getPriceInNumber(budget.min),
      maxPrice = getPriceInNumber(budget.max),
      price = [Math.min(minPrice, maxPrice), Math.max(minPrice, maxPrice)];
    const category = selectedProperties.map(value => value.replace(/\s/g, "_"));

    dispatch(getallproperties({ keyword, price, category }));
    navigate("/owner-properties");

    function getPriceInNumber(priceObj) {
      if (priceObj.unit === "thousand") return priceObj.base * 1000;
      if (priceObj.unit === "lakh") return priceObj.base * 100000;
      if (priceObj.unit === "crore") return priceObj.base * 10000000;
    }
  };

  return (
    <section className="searchform">
      <section className="searchbanner">
        <div className="searchbanner_container">
          <div className="search_container">
            <div className="search_heading">
              Welcome back! Let's continue your search
            </div>
            <div className="search_tab">
              {[
                "Buy",
                "Rent",
                "PG",
                "Plot",
                "Commercial",
                "Post Free Property Ad",
              ].map((tab, i) => (
                <div
                  className="search_tab_item"
                  key={tab + i}
                  onMouseOver={setWidthAndLeft}
                  onMouseOut={setToDefault}
                >
                  {tab}
                </div>
              ))}
              <span
                className="search_tab_ani"
                style={{
                  width: searchaniwidth + "px",
                  left: searchanileft + "px",
                }}
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
                    onKeyDown={handleLocationInputChange}
                  />
                </div>
                <div className="dropdown">
                  {location.map((location) => (
                    <div
                      className="sl_tag"
                      key={location}
                      onClick={removeLocation}
                      tabIndex={0}
                      role="button"
                      aria-label={`remove ${location} from search`}
                      data-location={location}
                    >
                      <span>{location}</span>
                      <span className="remove-btn"></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="search_property">
                <div
                  className="search_property_title"
                  data-search="property"
                  onClick={handleDropdownChange}
                >
                  <span className="search_property_type">
                    {selectedProperties.size === 0
                      ? "property"
                      : selectedProperties.values().next().value}
                  </span>
                  <span className="search_property_type_count">
                    {selectedProperties.size <= 1
                      ? ""
                      : ` +${selectedProperties.size - 1}`}
                  </span>
                </div>
                {dropdown === "property" && (
                  <div className="dropdown property">
                    {Object.keys(allProperties).map((type) => (
                      <div className="type" key={type}>
                        <h3>{type}</h3>
                        <div className="values" data-type={type}>
                          {allProperties[type].map((value) => (
                            <div
                              className={
                                "tag" +
                                (selectedProperties.has(value)
                                  ? " selected"
                                  : "")
                              }
                              tabIndex={0}
                              data-value={value}
                              onClick={togglePropertySelection}
                              key={value}
                            >
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="search_budget">
                <div
                  className="search_budget_title"
                  data-search="budget"
                  onClick={handleDropdownChange}
                >
                  <span className="search_budget_text">
                    {budget.min.base !== 0 && budget.max.base !== 0
                      ? `${budget.min.base} ${budget.min.unit} - ${budget.max.base} ${budget.max.unit}`
                      : budget.min.base !== 0 && budget.max.base === 0
                      ? `from ${budget.min.base} ${budget.min.unit}`
                      : budget.min.base === 0 && budget.max.base !== 0
                      ? `upto ${budget.max.base} ${budget.max.unit}`
                      : "Budget"}
                  </span>
                </div>
                {dropdown === "budget" && (
                  <div className="dropdown search_budget_field">
                    {["min", "max"].map((field) => (
                      <BudgetField
                        {...budget[field]}
                        field={field}
                        key={field}
                        {...{
                          handleBaseChange,
                          handleUnitChange,
                          handleKeyDown,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="search_button" onClick={handleSubmit}>
                <span className="search_button_icon"></span>
                <span className="search_button_text">Search</span>
              </div>
            </div>
          </div>
          {/* <div className="search_payrent_banner"></div> */}
        </div>
      </section>
    </section>
  );
};

const BudgetField = (props) => {
  return (
    <div className="sb_input" data-field={props.field}>
      <h4>{props.field}</h4>
      <input
        type="text"
        className="sb_base_input"
        value={props.base}
        onKeyDown={props.handleKeyDown}
        onChange={props.handleBaseChange}
      />
      <select
        className="sb_unit_input"
        onChange={props.handleUnitChange}
        value={props.unit}
      >
        {["thousand", "lakh", "crore"].map((m) => (
          <option value={m} key={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Search;
