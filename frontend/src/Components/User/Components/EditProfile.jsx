import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../Actions/useraction";
import "./EditProfile.css";

const EditProfile = (props) => {
  const { isVisible, hideModal } = props;

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.User);
  const [name, setName] = useState(user.Name),
    [email, setEmail] = useState(user.Email ? user.Email : ""),
    [mobileNumber, setMobileNumber] = useState(
      user.MobileNumber ? user.MobileNumber : ""
    );
  // const state = useSelector(state => state);
  // console.log(state);

  const [locations, setLocations] = useState(new Set(["mumbai", "thane"]));

  const checkFileAndAct = (event) => {
    if (!event.target.files) return;

    showImageToUser(event);

    function showImageToUser(event) {
      const img = new Image();
      img.addEventListener("load", (e) => {
        const img = e.target;
        const canvas = document.getElementsByClassName("image-canvas")[0],
          context = canvas.getContext("2d");
        context.drawImage(img, 0, 0);
      });
      img.addEventListener("error", () => alert("Not image"));
      img.src = URL.createObjectURL(event.target.files[0]);
    }
  };

  return (
    <div className="modal" style={{ display: isVisible ? null : "none" }}>
      <div className="modal-content" id="profile-edit">
        <h2 className="modal-heading">edit your information</h2>

        <button
          className="close-btn"
          type="button"
          aria-label="close modal"
          onClick={hideModal}
        ></button>

        <form noValidate={true} onSubmit={(e) => e.preventDefault()}>
          <div className="image-field">
            <canvas className="image-canvas"></canvas>
            <label htmlFor="image-input">add image</label>
            <input type="file" id="image-input" onChange={checkFileAndAct} />
          </div>

          <div className="field">
            <input
              type="text"
              id="name-input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name-input">name</label>
            <span></span>
          </div>

          <div className="field">
            <input
              type="text"
              id="email-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email-input">email</label>
            <span></span>
          </div>

          <div className="contact-field">
            <div className="country-code field">
              <select>
                <option value="+91">+91 india</option>
              </select>
            </div>

            <div className="phone field">
              <input
                type="text"
                id="phone-input"
                required
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <label htmlFor="phone-input">phone number</label>
              <span></span>
            </div>
          </div>

          <div className="location-field">
            <div className="field">
              <input type="text" id="location-input" required />
              <label htmlFor="location-input">location</label>
              <span></span>
            </div>

            <div className="location-input-container">
              {[...locations].map((location) => (
                <div className="location-inputs" key={location}>
                  {location}
                </div>
              ))}
            </div>
          </div>

          <div className="btn-grp">
            <button type="button" className="sec-btn" onClick={hideModal}>
              cancel
            </button>
            <button className="pri-btn" onClick={handleSubmit}>
              save changes
            </button>
          </div>
        </form>
      </div>

      <div className="modal-background"></div>
    </div>
  );

  function handleSubmit() {
    // Remove unnecessary data and Check values
    // 'Name'
    setName((prev) => prev.trim().replace(/\s{2,}/g, " "));
    if (name.length === 0) {
      alert("Please enter your name");
      return;
    }
    // Email
    setEmail((prev) => prev.replace(/\s+/g, ""));
    if (email.length === 0) {
      alert("Please enter your email");
      return;
    }
    // Verify email with a regex
    // Number
    setMobileNumber((prev) => prev.replace(/\s+/g, ""));
    if (mobileNumber.length === 0) {
      alert("Please enter your phone number");
      return;
    }
    // Verify mobile number according to the country selected

    // Inform user about any error

    // If all are right then update
    // dispatch(updateProfile({ name, email, mobileNumber }));
    alert("Profile updated");
    
    hideModal();
  }
};

export default EditProfile;
