import React from "react";
import pjson from "../../package.json"

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="col-md-12">
        &copy;{` Shopee Design 2017 ${pjson.version} `}
        <span className="footer-tag">
          {" "}
          Designed and built by Shopee Design Team
      </span>
        <div className="footer-logo">
          <a href="https://www.facebook.com/ShopeeTW/?brand_redir=496566973814913" target="_blank">
            <img alt="" src="/static/image/logo-fb.svg" />
          </a>
          <a href="https://www.instagram.com/shopee_sg" target="_blank">
            <img alt="" src="/static/image/logo-ins.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
