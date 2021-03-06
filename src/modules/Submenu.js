import React, { PureComponent } from "react";
import { Link } from "react-router";
import makeAddr from "../helpers/make-addr";
import "../scss/modules/sidebar.scss";

class Submenu extends PureComponent {
  state = {
    visible: this.props.opened
  };

  toggleShow = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { root, gdlName, submenu } = this.props;

    const style = {
      height: this.state.visible ? this.props.submenu.length * 40 : 0
    };

    return (
      <div className="expandable-listview_ul">
        <div
          className="expandable-listview_listHeader"
          onClick={this.toggleShow}
        >
          <span>{this.props.header}</span>
          {this.state.visible ? (
            <img
              className="expandable-listview_triangle inverse"
              src="/static/image/triangle.svg"
              alt=""
            />
          ) : (
            <img
              className="expandable-listview_triangle"
              src="/static/image/triangle.svg"
              alt=""
            />
          )}
        </div>
        <div className={"collapsible"} style={style}>
          {submenu.map(item => (
            <div className="expandable-listview_listItems" key={item}>
              <Link
                className="link"
                to={`${root}${gdlName}/${makeAddr(item)}`}
                activeClassName="sidebar-item-active"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Submenu;
