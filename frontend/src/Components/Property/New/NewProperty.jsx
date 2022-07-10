import React, { useState } from "react";
import "./NewProperty.css";
import Basic from './Basic';
import Address from './Address';
import Photo from './Photo';
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";


const NewProperty = () => { 
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/property/new/basic')
  
  }, [])
  
  
  return (
    <>
    <div className="cont">

      <div className="post_property_container">
        <div className="post_property_heading">Upload Listing</div>
      <Outlet/>
      </div>
    </div>
    </>
  );
};

export default NewProperty;
