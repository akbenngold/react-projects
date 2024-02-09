import React, { Component } from "react";
import "./Sidebar.css";
import "../../styles/utils.css";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      icons: [
        {
          Overview: "../../assets/icons/overview.svg",
          Analytics: "../../assets/icons/analytics.svg",
          Ecommerce: "../../assets/icons/ecommerce.svg",
          Crypto: "../../assets/icons/crypto.svg",
          Account: "../../assets/icons/account.svg",
          Customers: "../../assets/icons/customers.svg",
          Products: "../../assets/icons/products.svg",
        },
        {
          Orders: "../../assets/icons/orders.svg",
          Invoices: "../../assets/icons/invoices.svg",
          Logistics: "../../assets/icons/logistics.svg",
          Academy: "../../assets/icons/academy.svg",
          Job: "../../assets/icons/job.svg",
          Social: "../../assets/icons/social.svg",
          Blog: "../../assets/icons/blog.svg",
          File: "../../assets/icons/file.svg",
          Kanban: "../../assets/icons/kanban.svg",
          Mail: "../../assets/icons/mail.svg",
          Chat: "../../assets/icons/chat.svg",
          Calendar: "../../assets/icons/calendar.svg",
        },
      ],
    };
  }

  render() {
    return (
      <>
        {this.state.icons.map((iconGroup) => {
          return console.log(iconGroup);
        })}
      </>
    );
  }
}

export default Sidebar;
