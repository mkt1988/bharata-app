import React from "react";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";
import Section4 from "../components/Sections/Section4";
import  "../../sass/sections.scss";

export default class App extends React.Component {
    render() {
      return (
        <div>
          <Section1 />
           <Section2 />
         <Section3 />
         <hr/>
           <Section4 /> 
        </div>
      );
    }
  }