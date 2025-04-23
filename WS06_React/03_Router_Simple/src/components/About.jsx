import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the About page.</p>
      <Link to="/">Go back to the homepage</Link>
      <br/>
      <Link to="/contact">Go to the Contact page</Link>
    </div>
  );
};

export default About;
