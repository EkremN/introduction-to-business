import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
import "code-mirror-themes/themes/monokai.css";
import "./index.css";

const Header = () => (
  <div className="navbar navbar-light gradient">
    <Link to="/" className="navbar-brand">
      Introduction to Business
    </Link>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Introduction to Business"
      meta={[
        {
          name: "description",
          content:
            "Learn how to do Business."
        },
        {
          name: "keywords",
          content:
            "business, economy, marketing, finance, entrepreneurship"
        }
      ]}
    />
    <Header />
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
