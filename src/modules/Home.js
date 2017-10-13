/* global $ */
import React, { PureComponent } from "react";
import { Link } from "react-router";
import makeAddr from "../helpers/make-addr";
import queryParams from "../helpers/query-params";
import prepareMediumPost from "../helpers/prepare-medium-post";
import Footer from "./Footer";
import Search from "./Search";

let searchList = [];
let menuName = "";
let menu = "";
let root = "";

const apiUrl = "https://api.rss2json.com/v1/api.json";

for (let i = 0; i < 4; i++) {
  if (i === 0) {
    menuName = "Seller Center Guideline";
    menu = require("../sc-guideline-menu.json");
    root = "/product/sc-guideline/";
  } else if (i === 1) {
    menuName = "PC Mall Guideline";
    menu = require("../pcmall-guideline-menu.json");
    root = "/product/pcmall-guideline/";
  } else if (i === 2) {
    menuName = "APP Guideline";
    menu = require("../app-guideline-menu.json");
    root = "/product/app-guideline/";
  } else {
    menuName = "Branding";
    menu = require("../branding-menu.json");
    root = "/branding/";
  }
  for (let submenu in menu) {
    for (let item in menu[submenu]) {
      searchList.push({
        name: menu[submenu][item],
        route: root + makeAddr(menu[submenu][item]),
        menu: menuName,
        key: menuName + menu[submenu][item],
        match: -1
      });
    }
  }
}

class Home extends PureComponent {
  state = {
    mediumPosts: {
      items: [],
      isFetching: false,
      error: null
    }
  };

  componentDidMount() {
    this.fetchMediumPosts();
  }

  updateMediumPostsState = newState => {
    this.setState(prevState => ({
      mediumPosts: Object.assign({}, prevState.mediumPosts, newState)
    }));
  };

  fetchMediumPosts = () => {
    const data = {
      rss_url: "https://medium.com/feed/shopee",
      api_key: "2xozxhcwffkcirqd0s499i5odcbcfgo6ctzywvtm",
      count: 3,
      order_by: "pubDate"
    };

    this.updateMediumPostsState({ isFetching: true });

    fetch(`${apiUrl}?${queryParams(data)}`)
      .then(response => response.json())
      .then(response => {

        if (response.status !== "ok") {
          throw new Error("Server response is not ok");
        }

        const preparedItems = response.items.map(prepareMediumPost);

        this.updateMediumPostsState({
          isFetching: false,
          items: preparedItems
        });
      })
      .catch(error => {
        console.error(error);

        this.updateMediumPostsState({
          isFetching: false,
          error
        });
      });
  };

  renderMediumPostItem = ({ link, img, title, description, author }, key) => {
    return (
      <div key={key} className="col-md-4">
        <a className="card" href={link} target="_blank">
          <div className="crop">
            <img src={img} alt={title} />
          </div>
          <h3 className="title">{title}</h3>
          <p className="desc">{description}</p>
          <p className="author">{author}</p>
        </a>
      </div>
    );
  };
  render() {
    const { mediumPosts } = this.state;

    return (
      <main className="home">
        <div className="search">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h3 className="header">
                  <span className="brandname">Shopee Design </span>
                  exists to enhance<br /> user experience & work efficiency
                </h3>

                <div className="search-input">
                  <Search data={searchList} />
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="main-branding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Link className="branding-card" to="/branding/logo">
                  <img
                    src="/static/image/icon-visual-resource.svg"
                    alt="Visual Resource icon"
                  />
                  <h3>Visual Resource</h3>
                  <p>
                    This resource is intended to standardize the use of the
                    Shopee brand and ensure the brand's integrity and
                    consistency.
                  </p>
                </Link>
              </div>
              <div className="col-sm-4">
                <Link className="branding-card" to="/branding/banner">
                  <img
                    src="/static/image/icon-guideline.svg"
                    alt="Guideline icon"
                  />
                  <h3>Guideline</h3>
                  <p>
                    You can find Shopee branding guideline here, please follow
                    the principles to maintain Shopee brand image.
                  </p>
                </Link>
              </div>
              <div className="col-sm-4">
                <Link className="branding-card" to="/branding/core-value">
                  <img
                    src="/static/image/icon-brand-book.svg"
                    alt="Brand Book icon"
                  />
                  <h3>Brand Book</h3>
                  <p>
                    The book hightlights key components important to the Shopee
                    brand: our purpose, our positioning and our personality.
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="medium">
          <div className="container">
            <div className="title">Articles</div>
            {mediumPosts.isFetching ? (
              <div className="col-xs-12">Loading Medium content...</div>
            ) : (
              <div id="content">
                {mediumPosts.items.map(this.renderMediumPostItem)}
              </div>
            )}
            {mediumPosts.error ? (
              <div className="col-xs-12">
                <div className="alert alert-danger">
                  {mediumPosts.error.message}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="team" />
        <div className="container">
          <h3 className="title">Team</h3>
          <div className="col-md-12">
            <img
              src="/static/image/team_member.png"
              alt="Shopee Design Team Member"
              className="team-pic"
            />
          </div>
        </div>
        <Footer />
      </main>
    );
  }
}

export default Home;
