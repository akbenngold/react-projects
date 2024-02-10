import React from "react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const icons = [
    {
      categoryTitle: "MAIN",
      subcategories: [
        {
          title: "Overview",
          link: "src/assets/icons/overview.svg",
        },
        {
          title: "Analytics ",
          link: "src/assets/icons/analytics.svg",
        },
        {
          title: "Ecommerce ",
          link: "src/assets/icons/ecommerce.svg",
        },

        {
          title: "Crypto",
          link: "src/assets/icons/crypto.svg",
        },

        {
          title: "Accounts ",
          link: "src/assets/icons/overview.svg",
        },
        {
          title: "Customers ",
          link: "src/assets/icons/customers.svg",
        },
        {
          title: "Products",
          link: "src/assets/icons/products.svg",
        },
      ],
    },
    {
      categoryTitle: "CONCEPT",
      subcategories: [
        {
          title: "Orders",
          link: "src/assets/icons/orders.svg",
        },
        {
          title: "Invoices",
          link: "src/assets/icons/invoices.svg",
        },
        {
          title: "Logistics",
          link: "src/assets/icons/logistics.svg",
        },
        {
          title: "Academy",
          link: "src/assets/icons/academy.svg",
        },
        {
          title: "Job",
          link: "src/assets/icons/job.svg",
        },
        { title: "Social", link: "src/assets/icons/social.svg" },
        { title: "Blog", link: "src/assets/icons/blog.svg" },
        { title: "File", link: "src/assets/icons/file.svg" },
        { title: "Kanban", link: "src/assets/icons/kanban.svg" },
        { title: "Mail", link: "src/assets/icons/mail.svg" },
        { title: "Chat", link: "src/assets/icons/link.svg" },
        { title: "Calendar", link: "src/assets/icons/calendar.svg" },
      ],
    },
  ];
  return (
    <div>
      {icons.map((icon) => {
        return (
          <div key={icon.categoryTitle}>
            {icon.categoryTitle}
            {icon.subcategories.map((item, index) => {
              return (
                <SidebarItem
                  key={index}
                  title={item.title}
                  iconSvg={item.link}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
