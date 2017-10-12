import React, { PureComponent } from "react";
import { DropdownButton, MenuItem } from 'react-bootstrap';
import cn from "classnames";

class Navbar extends PureComponent {
  state = {
    pagePosition: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // const winHeight = window.innerHeight;
    // const body = document.body;
    // const html = document.documentElement;
    // const docHeight = Math.max(
    //   body.scrollHeight,
    //   body.offsetHeight,
    //   html.clientHeight,
    //   html.scrollHeight,
    //   html.offsetHeight
    // );

    const value = document.body.scrollTop;

    this.setState({ pagePosition: value });
  };

  render() {
    const classes = cn("navbar navbar-fixed-top", {
      "add-shadow": this.state.pagePosition > 0 || this.props.params.gdlName,
      "navbar-closed": this.props.params.compName
    });

    return (
      <div>
        {/*
          <div className={"navbar" + classes}>
            <div className="container">
              <Link to="/">
                <img src="/static/image/logo.svg" className="nav-logo" alt="" />
              </Link>

              <div className="nav-links">
                <a className="nav-item" href="/">
                  Home
                </a>
                <div className="dropdown">
                  <Link
                    className="nav-item"
                    to="/product"
                    activeClassName="active"
                  >
                    Product
                  </Link>
                  {this.props.params.gdlName ? (
                    <div />
                  ) : (
                    <div className="dropdown-content">
                      <Link
                        className="dropdown-item"
                        to="/product/sc-guideline"
                        activeClassName="active"
                      >
                        Seller Center Guideline
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/product/pcmall-guideline"
                        activeClassName="active"
                      >
                        PC Mall Guideline
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/product/app-guideline"
                        activeClassName="active"
                      >
                        Mobile App Guideline
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  className="nav-item"
                  to="/branding"
                  activeClassName="active"
                >
                  Branding
                </Link>
                <a
                  className="nav-item"
                  href="http://careers.shopee.sg/job?department_id=17"
                  target="_blank"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        */}

        <div className={classes}>
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navBar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand">
                <img src="/static/image/logo.svg" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navBar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/" className="nav-item">
                    Home
                  </a>
                </li>
                <li>
                <li>
                  <DropdownButton className="nav-item" title="Product" id="product-dropdown">
                        <MenuItem href="/product/sc-guideline">Seller Center Guideline</MenuItem>
                        <MenuItem href="/product/pcmall-guideline">PC Mall Guideline</MenuItem>
                        <MenuItem href="/product/app-guideline">Mobile App Guideline</MenuItem>
                  </DropdownButton>
                </li>
                </li>
                <li>
                  <a href="/branding" className="nav-item">
                    Branding
                  </a>
                </li>
                <li>
                  <a
                    href="http://careers.shopee.sg/job?department_id=17"
                    className="nav-item"
                    target="_blank"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
