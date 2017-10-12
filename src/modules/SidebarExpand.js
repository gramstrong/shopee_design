import React, { PureComponent } from "react";
import makeTitle from "../helpers/make-title";
import Submenu from "./Submenu";
import "../scss/modules/sidebar.scss";

class SidebarExpand extends PureComponent {
  renderSubmenu = () => {
    const menu = this.props.data;
    let content = [];

    for (let key in menu) {
      const opened =
        menu[key].indexOf(makeTitle(this.props.compName.slice(0, -3))) === -1
          ? false
          : true;
      content.push(
        <Submenu
          root={this.props.root}
          gdlName={this.props.gdlName}
          submenu={menu[key]}
          opened={opened}
          header={key}
          key={this.props.gdlName + key}
          lang={this.props.lang}
        />
      );
    }

    return content;
  };

  render() {
    return (
      <div className="expandable-listview_outerDiv">{this.renderSubmenu()}</div>
    );
  }
}

export default SidebarExpand;
