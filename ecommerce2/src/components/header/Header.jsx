import React, { Component } from "react";
import search from "../../assets/icons/search.svg";
import language from "../../assets/icons/language.svg";
import notification from "../../assets/icons/notification.svg";
import contacts from "../../assets/icons/contacts.svg";
import avatar from "../../assets/icons/avatar.svg";
import "./Header.css";
import "../../styles/utils.css";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <img src={search} className="header__image" alt="search icon" />
        </div>

        <div className="header__right">
          <img src={language} className="header__image" alt="language icon" />

          <div className="header__notification">
            <img
              src={notification}
              className="header__notification__image"
              alt="notification icon"
            />
            <div className="header__notification__badge">2</div>
          </div>
          <img src={contacts} className="header__image" alt="contacts icon" />
          <img src={avatar} className="header__image" alt="avatar icon" />
        </div>
      </div>
    );
  }
}
export default Header;
