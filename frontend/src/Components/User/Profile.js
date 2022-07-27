import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import Lefttab from "./Listings/Lefttab";
import Centertab from "./Listings/Centertab";
import Righttab from "./Listings/Righttab";

const Profile = () => {
  const { user } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch()
  }, []);

  return (
    <>
      <div className="profile">
        <section class="profile_section">
          <span class="icon icon_edit"></span>
          <div class="profile_section_info_card">
            <div class="profile_pic seller_default"></div>
            <div class="profile_details">
              <div class="profile_details_primary_detail inspectlet_sensitive">
                {user.Name}
              </div>
              <div class="profile_details_secondary_detail detail_lighter inspectlet_sensitive">
                {user.phoneNumber}
              </div>
              <div class="profile_details_secondary_detail detail_lighter inspectlet_sensitive">
                {user.Email}
              </div>
              <div class="profile_details_secondary_detail">{user.Address}</div>
            </div>
          </div>
        </section>
        <div className="myaccount">
          <div>
            <Lefttab />
            <Centertab />
            <Righttab />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
