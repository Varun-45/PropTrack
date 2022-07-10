import React from "react";
import "./Home.css";
import Search from './Components/Search'
import Container from './Components/Container'

const Home = () => {
  return (
    <>
      <div className="pt_home">
        <Search/>
        <Container/>
      </div>
    </>
  );
};

export default Home;
