import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import Lefttab from "./Listings/Lefttab";
import Centertab from "./Listings/Centertab";
import Righttab from "./Listings/Righttab";
import EditProfile from "./Components/EditProfile";

const Profile = () => {
  const { user } = useSelector((state) => state.User);
  // const user = {
  //   Name: "Ayush Gupta",
  //   phoneNumber: 1234567890,
  //   Email: "abc123@email.com",
  //   Address: "gaya, bihar, india, 823001, mir abu saleh road"
  // }

  const [editProfile, setEditProfile] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch()
  }, []);

  return (
    <>
      <div className="profile">
        <section className="profile_section">
          <span className="icon icon_edit" onClick={() => setEditProfile(true)}></span>
          <div className="profile_section_info_card">
            <div className="profile_pic seller_default"></div>
            <div className="profile_details">
              <div className="profile_details_primary_detail inspectlet_sensitive">
                {user.Name}
              </div>
              <div className="profile_details_secondary_detail detail_lighter inspectlet_sensitive">
                {user.phoneNumber}
              </div>
              <div className="profile_details_secondary_detail detail_lighter inspectlet_sensitive">
                {user.Email}
              </div>
              <div className="profile_details_secondary_detail">{user.Address}</div>
            </div>
          </div>
        </section>
        <div className="myaccount">
            <Lefttab />
            <Centertab />
            <Righttab />
        </div>
      </div>

      <EditProfile isVisible={editProfile} hideModal={() => setEditProfile(false)} /> 
    </>
  );
};

export default Profile;
