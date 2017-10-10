import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className="footer">
        <div className="container">
          &copy; Shopee Design 2017 v0.0.4 <span className="footer-tag"> Designed and built by Shopee Design Team</span>
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
    )
  }
})