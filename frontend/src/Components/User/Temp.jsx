import React from "react";
import { useState } from "react";
import "./Temp.css";

const Temp = () => {
  const [locations, setLocations] = useState(new Set(['mumbai', 'thane']));

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

  return (
    <div className="modal">
      <div className="modal-content" id="profile-edit">
        <h2 className="modal-heading">edit your information</h2>

        <button className="close-btn" type="button" aria-label="close modal"></button>

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
              <input type="text" id="location-input" required/>
              <label htmlFor="location-input">location</label>
              <span></span>
            </div>

            <div className="location-input-container">
              {[...locations].map((location) => <div className="location-inputs" key={location}>{location}</div>)}
            </div>
          </div>

          <div className="btn-grp">
            <button type="button" className="sec-btn">cancel</button>

            <button className="pri-btn">save changes</button>
          </div>
        </form>
      </div>

      <div className="modal-background"></div>
    </div>
  );
};

export default Temp;
