import React from "react";
import { useState } from "react";
import "./EditProfile.css";

const EditProfile = (props) => {
  const { isVisible, hideModal } = props;

  const [locations, setLocations] = useState(new Set());

  const checkFileAndAct = (event) => {
    if (!event.target.files) return;

    showImageToUser(event);

    function showImageToUser(event) {
      const img = new Image();
      img.addEventListener("load", (e) => {
        const img = e.target;
        const canvas = document.getElementsByClassName("image-canvas")[0],
        context = canvas.getContext("2d");
        context.drawImage(img,0,0);
      });
      img.addEventListener("error", () => alert("Not image"));
      img.src = URL.createObjectURL(event.target.files[0]);
    }
  }

  const handleLocationChange = (event) => {
    // If enter key is not pressed, then do nothing
    if (event.isComposing || event.keyCode === 229 || !(/^enter$/i.test(event.key))) return;
    // If enter key is pressed
    // Then take the input value and update the local state
    let value = event.target.value.trim();
    if (value === '') return;
    value = value.replace(/\s{2,}/g, " ").toLowerCase();
    if (!locations.has(value))
      setLocations(cur => (new Set([...cur, value])));
    // Clear field
    event.target.value = '';
  };
  const removeLocation = (e) => {
    setLocations(cur => {
      const newState = new Set(cur);
      newState.delete(e.target.dataset.location);
      return newState
    })
  };

  return (
    <div className="modal" style={{display: isVisible ? null : "none"}}>
      <div className="modal-content" id="profile-edit">
        <h2 className="modal-heading">edit your information</h2>

        <button className="close-btn" type="button" aria-label="close modal" onClick={hideModal}></button>

        <form noValidate={true} onSubmit={e=>e.preventDefault()}>
          <div className="image-field">
            <canvas className="image-canvas"></canvas>
            <label htmlFor="image-input">add image</label>
            <input type="file" id="image-input" onChange={checkFileAndAct}/>
          </div>

          <div className="field">
            <input type="text" id="name-input" required/>
            <label htmlFor="name-input">name</label>
            <span></span>
          </div>

          <div className="field">
            <input type="text" id="email-input" required/>
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
              <input type="text" id="phone-input" required/>
              <label htmlFor="phone-input">phone number</label>
              <span></span>
            </div>
          </div>

          <div className="location-field">
            <div className="field">
              <input type="text" id="location-input" required onKeyDown={handleLocationChange}/>
              <label htmlFor="location-input">location</label>
              <span></span>
            </div>

            <div className="location-input-container">
              {[...locations].map((location) => <div className="location-inputs" key={location} data-location={location} onClick={removeLocation}>{location}</div>)}
            </div>
          </div>

          <div className="btn-grp">
            <button type="button" className="sec-btn" onClick={hideModal}>cancel</button>
            <button className="pri-btn">save changes</button>
          </div>
        </form>
      </div>

      <div className="modal-background"></div>
    </div>
  );
};

export default EditProfile;
