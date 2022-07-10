import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearErrors, createProperty } from "../../../Actions/propertyaction";
import { NEW_PROPERTY_RESET } from "../../../Constants/propertyconstants";

const Photo = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Property_Details, Property_Address, loading, success, error } =
    useSelector((state) => state.NewProperty);

  const inputfile = useRef(null);
  const [Images, setImages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Property Created Successfully");
      // navigate();
      dispatch({ type: NEW_PROPERTY_RESET });
    }
  }, [dispatch, alert, error, success]);

  const ImagesChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const uploadhandle = () => {
    const data = { Property_Details, Property_Address, Images };
    dispatch(createProperty(data));
  };

  return (
    <>
      <div className="post_property_main">
        <ul className="tab_head">
          <li className="disabled">Basic Info</li>
          <li className="disabled">Address</li>
          <li className="active">Photos</li>
        </ul>
        {!Images[0] ? (
          <>
            <div className="tab_content">
              <div>
                <div className="su_photos">
                  <div className="center_div center">
                    <span>
                      <div className="su_img_upld">
                        <span>
                          <span className="img_upldr">
                            <div className="add_box desktop">
                              <div>
                                <div className="inner_box">
                                  <div>
                                    <div className="icon"></div>
                                    <div className="title">
                                      + Add Photos
                                      <div className="sub">
                                        (max limit 5 MB per image)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="btn primary"
                                  onClick={() => inputfile.current.click()}
                                >
                                  Upload Photos
                                </button>
                                <div className="image_guideline_box">
                                  <div className="rejection_text_container">
                                    <div className="rejection_img"></div>
                                    <div className="rejection_text">
                                      <h2>Your photos might get rejected</h2>
                                      <span>
                                        Please see the reasons why your photos
                                        might get rejected to avoid rejections
                                      </span>
                                    </div>
                                  </div>
                                  <div className="image_guideline_link">
                                    View Reasons now!
                                  </div>
                                </div>
                                <div className="txt_cont">
                                  <div>
                                    <i className="icon_tick_circle"></i>
                                    <span>
                                      <div>
                                        <span className="bold">
                                          Atleast 8 photos
                                        </span>{" "}
                                        will increase property quality score by
                                        15%
                                      </div>
                                    </span>
                                  </div>
                                  <div>
                                    <i className="icon_tick_circle"></i>
                                    <span>
                                      <div>
                                        <span className="bold">
                                          Hall, Bedroom, Kitchen and Bathroom
                                        </span>{" "}
                                        photos will get more points in quality
                                        score
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="image/jpeg,image/png,image/jpg"
                          style={{ display: "none" }}
                          ref={inputfile}
                          onChange={ImagesChange}
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="tab_content">
              <div>
                <div className="su_photos">
                  <div className="center_div">
                    <span>
                      <div className="su_img_upld">
                        <span>
                          <span className="img_upldr">
                            <div className="add_box desktop inline">
                              <div>
                                <div className="inner_box"
                                  onClick={() => inputfile.current.click()}
                                >
                                  <div>
                                    <div className="icon"></div>
                                    <div className="title">
                                      + Add More
                                      <div className="sub">
                                        (max limit 5 MB per image)
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="btn primary"
                                >
                                  Upload Photos
                                </button>
                              </div>
                            </div>
                          </span>
                        </span>
                        <input
                          type="file"
                          multiple=""
                          accept="image/jpeg,image/png,image/jpg"
                          style={{ display: "none" }}
                          ref={inputfile}
                          onChange={ImagesChange}
                        />
                      </div>
                    </span>
                    {Images.map((image, index) => {
                      return (
                        <>
                          <div className="img_item_container">
                            <div
                              className="img_item selected desktop"
                              style={{
                                backgroundImage: `url('${image}')`,
                              }}
                            >
                              <div className="cover">
                                <span>COVER</span>
                                <i className="icon_reco_filled"></i>
                              </div>
                              <div className="action icon_close selected"></div>
                              <span className="tag_cont">
                                <div className="select_cont normal_input">
                                  <div className="tag_item drop">
                                    Others<i className="icon_arrow_down"></i>
                                  </div>
                                  <div className="result_cont">
                                    <li className="opt" title="Living Room">
                                      Living Room
                                    </li>
                                    <li className="opt" title="Bedroom">
                                      Bedroom
                                    </li>
                                    <li className="opt" title="Kitchen">
                                      Kitchen
                                    </li>
                                    <li className="opt" title="Bathroom">
                                      Bathroom
                                    </li>
                                    <li className="opt" title="Balcony">
                                      Balcony
                                    </li>
                                    <li className="opt" title="Floor Plan">
                                      Floor Plan
                                    </li>
                                    <li className="opt" title="Brochure">
                                      Brochure
                                    </li>
                                    <li className="opt" title="Master Layout">
                                      Master Layout
                                    </li>
                                    <li className="opt" title="Site Plan">
                                      Site Plan
                                    </li>
                                    <li className="opt" title="Outside View">
                                      Outside View
                                    </li>
                                    <li className="opt selected" title="Others">
                                      Others
                                    </li>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div className="ta_c">
                      <div className="txt_cont">
                        <div>
                          <i className="icon_tick_circle"></i>
                          <span>
                            <div>
                              <span className="bold">Atleast 8 photos</span>{" "}
                              will increase property quality score by 15%
                            </div>
                          </span>
                        </div>
                        <div>
                          <i className="icon_tick_circle"></i>
                          <span>
                            <div>
                              <span className="bold">
                                Hall, Bedroom, Kitchen and Bathroom
                              </span>{" "}
                              photos will get more points in quality score
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form_content">
                    <div className="btn_cont isOwner">
                      <div className="internal_btn_cont">
                        <button
                          className="btn secondary"
                          onClick={uploadhandle}
                        >
                          Upload Listing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Photo;
