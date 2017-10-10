import React from 'react'
// import { Link } from 'react-router'

export default React.createClass({
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  componentWillMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  getInitialState() {
    return {
      pagePosition: 0,
      mousePosition: 0,
    }
  },


  handleScroll() {
    // var winHeight = window.innerHeight;
    // var body = document.body;
    // var html = document.documentElement;
    // var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
    //                html.clientHeight, html.scrollHeight, html.offsetHeight );

    var value = document.body.scrollTop;
    this.setState({ pagePosition: value });
  },

  onMousemove(e) {
    this.setState({ mousePosition: e.clientY })
  },

  render() {
    var style = '';
    if (this.state.pagePosition > 0 || this.props.params.gdlName) style = ' add-shadow';
    if (this.props.params.compName) style = ' navbar-closed';
    return (
      <div>
        {/* <div className={"navbar" + style}>
          <div className="container">
            <Link to="/"><img src="/static/image/logo.svg" className="nav-logo" alt="" /></Link>

            <div className="nav-links">
              <a className="nav-item" href="/" >Home</a>
              <div className="dropdown">
                <Link className="nav-item" to="/product" activeClassName="active">Product</Link>
                {(this.props.params.gdlName) ?
                  <div></div>
                  :
                  <div className="dropdown-content">
                    <Link className="dropdown-item" to="/product/sc-guideline" activeClassName="active">Seller Center Guideline</Link>
                    <Link className="dropdown-item" to="/product/pcmall-guideline" activeClassName="active">PC Mall Guideline</Link>
                    <Link className="dropdown-item" to="/product/app-guideline" activeClassName="active">Mobile App Guideline</Link>
                  </div>
                }
              </div>
              <Link className="nav-item" to="/branding" activeClassName="active">Branding</Link>
              <a className="nav-item" href="http://careers.shopee.sg/job?department_id=17" target="_blank">Join Us</a>
            </div>
          </div>
        </div> */}

        <div className={"navbar navbar-fixed-top" + style}>
          <div className="container">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navBar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand"><img src="/static/image/logo.svg" alt="" /></a>
            </div>
            <div className="collapse navbar-collapse" id="navBar">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/" className="nav-item">Home</a></li>
                <li><a href="/product" className="nav-item">Product</a></li>
                {/* <li className="dropdown">
                  <a href="#" className="dropdown-toggle nav-item" data-toggle="dropdown">Product
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a href="/product/sc-guideline">Seller Center Guideline</a></li>
                    <li><a href="/product/pcmall-guideline">PC Mall Guideline</a></li>
                    <li><a href="/product/app-guideline">Mobile App Guideline</a></li>
                  </ul>
                </li> */}
                <li><a href="/branding" className="nav-item">Branding</a></li>
                <li><a href="http://careers.shopee.sg/job?department_id=17" className="nav-item" target="_blank">Join Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        {this.props.children}
      </div>



    )
  }


})
