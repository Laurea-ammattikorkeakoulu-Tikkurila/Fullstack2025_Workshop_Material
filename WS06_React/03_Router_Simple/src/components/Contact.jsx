import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is the Contact page.</p>
      <Link to="/">Go back to the homepage</Link>
      <br />
      <Link to="/about">Go to the About page</Link>
    </div>
  );
};

export default Contact;
