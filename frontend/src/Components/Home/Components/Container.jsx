import React from "react";
import "./Container.css";
import Featured_projects from './Featured_projects'
import Owner_properties from './Owner_properties'
import Property_services from './Property_services'
import Post_property_banner from './Post_property_banner.jsx'

const Container = () => {

  return (
    <div className="pt_home_container_main">
      <Featured_projects/>
      <Owner_properties/>
      <Property_services/>
      <Post_property_banner/>
    </div>
  );
};

export default Container;
