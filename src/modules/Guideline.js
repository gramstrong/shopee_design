import React, { PureComponent } from "react";
import { Link } from "react-router";
import addStyle from "../helpers/add-style";
import makeTitle from "../helpers/make-title";
import "../scss/modules/image.scss";
import SidebarExpand from "./SidebarExpand";

var Remarkable = require("remarkable");
var md = new Remarkable({
  html: true,
  breaks: true
});

class Guideline extends PureComponent {
  state = {
    sidebarVisible: window.innerWidth < 1100 ? false : true
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkDimensions);
  }

  checkDimensions = () => {
    window.innerWidth < 1100
      ? this.setState({ sidebarVisible: false })
      : this.setState({ sidebarVisible: true });
  };

  toggleSidebar = () => {
    this.setState({ sidebarVisible: this.state.sidebarVisible ? false : true });
  };

  hideSidebar = () => {
    if (window.innerWidth < 1100) this.setState({ sidebarVisible: false });
  };

  makeTitle = gdlName => {
    if (gdlName === "pcmall-guideline") {
      return "PC MALL GUIDELINE";
    } else if (gdlName === "app-guideline") {
      return "APP GUIDELINE";
    } else if (gdlName === "branding") {
      return "SHOPEE BRANDING";
    }
  };

  render() {
    var gdlName = this.props.params.gdlName;
    var root = "/product/";
    if (!gdlName) {
      gdlName = "branding";
      root = "/";
    }
    var compName = this.props.params.compName;
    var menu = require("../" + gdlName + "-menu.json");
    var opened = "";
    if (gdlName === "sc-guideline") {
      compName += "-en";
    } else {
      compName += "-en";
    }
    for (var key in menu) {
      if (menu[key].indexOf(makeTitle(compName.slice(0, -3))) !== -1)
        opened = key;
    }
    if (opened) {
      console.log(compName);
      var mdfile = require("../markdown/" + gdlName + "/" + compName + ".md");
      var htmlString = addStyle(md.render(mdfile));
      var lang = compName.slice(-3);
      var style = this.state.sidebarVisible ? { left: 0 } : { left: -250 };

      return (
        <div className="main">
          <div className="sidebar-wrapper" style={style}>
            <div className="sidebar">
              {gdlName === "sc-guideline" ? (
                <div className="sidebar-title">
                  <img
                    className="sidebar-logo"
                    src="/static/image/modular-design-logo.svg"
                    alt=""
                  />
                  <br />
                  MODULAR<br />DESIGN
                </div>
              ) : (
                <div className="sidebar-title">
                  <a href="/" alt="Home Link">
                    <img
                      className="sidebar-logo"
                      src="/static/image/logo.svg"
                      alt=""
                    />
                  </a>
                  {/* <br />
                  SHOPEE
                  <br />
                  BRANDING */}
                </div>
              )}

              <SidebarExpand
                data={menu}
                root={root}
                gdlName={gdlName}
                compName={compName}
                lang={lang}
                location={this.props.location}
              />

              {/*
                <div className="sidebar-footer">
                  {gdlName === "branding" ? (
                    <div />
                  ) : (
                    <div>
                      <div className="sidebar-hint">
                        Check Other Design Guidelines
                      </div>
                      <div className="sidebar-link-wrapper">
                        {gdlName !== "app-guideline" ? (
                          <Link
                            className="sidebar-link"
                            to="/product/app-guideline"
                          >
                            APP DESIGN
                          </Link>
                        ) : (
                          <span />
                        )}
                        {gdlName !== "pcmall-guideline" ? (
                          <Link
                            className="sidebar-link"
                            to="/product/pcmall-guideline"
                          >
                            PC MALL
                          </Link>
                        ) : (
                          <span />
                        )}
                        {gdlName !== "sc-guideline" ? (
                          <Link
                            className="sidebar-link"
                            to="/product/sc-guideline"
                          >
                            SELLER CENTER
                          </Link>
                        ) : (
                          <span />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="sidebar-hint">Language</div>
                  <div className="sidebar-link-wrapper">
                    {lang === "-cn" ? (
                      <Link
                        className="sidebar-link"
                        to={
                          "/product/" +
                          gdlName +
                          "/" +
                          compName.slice(0, -3) +
                          "-en"
                        }
                      >
                        English
                      </Link>
                    ) : (
                      <span />
                    )}
                    {lang === "-en" ? (
                      <Link
                        className="sidebar-link"
                        to={
                          "/product/" +
                          gdlName +
                          "/" +
                          compName.slice(0, -3) +
                          "-cn"
                        }
                      >
                        中文
                      </Link>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              */}
            </div>
          </div>
          <div
            className="side-button side-button-menu"
            onClick={this.toggleSidebar}
          >
            <svg viewBox="0 0 1024 1024">
              <path d="M864,224H160c-17.7,0-32-14.3-32-32s14.3-32,32-32h704c17.7,0,32,14.3,32,32S881.7,224,864,224z" />
              <path d="M864,544H160c-17.7,0-32-14.3-32-32c0-17.7,14.3-32,32-32h704c17.7,0,32,14.3,32,32C896,529.7,881.7,544,864,544z" />
              <path d="M864,864H160c-17.7,0-32-14.3-32-32s14.3-32,32-32h704c17.7,0,32,14.3,32,32S881.7,864,864,864z" />
            </svg>
          </div>
          <Link className="side-button" to="/">
            <svg viewBox="0 0 1024 1024">
              <path d="M1014.6,521.4L557.3,64c-25-25-65.6-25-90.6,0L137.4,393.4c0,0,0,0,0,0l-128,128c-12.5,12.5-12.5,32.8,0,45.3
								c6.2,6.2,14.4,9.4,22.6,9.4s16.4-3.1,22.6-9.4l73.4-73.4V928c0,35.3,28.7,64,64,64h640c35.3,0,64-28.7,64-64V493.2l73.4,73.4
						c12.5,12.5,32.8,12.5,45.3,0C1027.1,554.1,1027.1,533.9,1014.6,521.4z M832,928H192V429.3l320.1-320l319.9,320V928z" />
            </svg>
          </Link>
          <div className="content" onClick={this.hideSidebar}>
            <div
              className="mdfile"
              dangerouslySetInnerHTML={{ __html: htmlString }}
            />
            <div className="footer">
              <div className="container-fluid">
                &copy; Shopee Design 2017 v0.0.8{" "}
                <span className="footer-tag">
                  {" "}
                  Designed and built by Shopee Design Team
                </span>
                <div className="footer-logo">
                  <a href="#">
                    <img alt="" src="/static/image/logo-fb.svg" />
                  </a>
                  <a href="https://www.instagram.com/shopee_sg" target="_blank">
                    <img alt="" src="/static/image/logo-ins.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="placeholder"> Component not found.</div>;
    }
  }
}

export default Guideline;
