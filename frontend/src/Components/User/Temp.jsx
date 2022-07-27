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

        <form onSubmit={e=>e.preventDefault()}>
          <div className="image-field">
            <canvas className="image-canvas"></canvas>

            <label htmlFor="image-input">add image</label>
            <input type="file" id="image-input" onChange={checkFileAndAct}/>
          </div>

          <div className="field">
            <label htmlFor="name-input">name</label>
            <input type="text" id="name-input" />
          </div>

          <div className="field">
            <label htmlFor="email-input">email</label>
            <input type="email" id="email-input" />
          </div>

          <div className="contact-field">
            <div className="country-code field">
              <select>
                <option value="+91">+91 india</option>
              </select>
            </div>

            <div className="phone field">
              <label htmlFor="phone-input">phone number</label>
              <input type="number" id="phone-input" />
            </div>
          </div>

          <div className="location-field">
            <div className="field">
              <label htmlFor="location-input">location</label>
              <input type="text" id="location-input" />
            </div>

            <div className="location-input-container">
              {[...locations].map((location) => <div className="location-inputs" key={location}>{location}</div>)}
            </div>
          </div>

          <div className="btn-grp">
            <button type="button">cancel</button>

            <button>save changes</button>
          </div>
        </form>
      </div>

      <div className="modal-background"></div>
    </div>
  );
};

export default Temp;
