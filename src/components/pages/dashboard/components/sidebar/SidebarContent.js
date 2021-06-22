import React from "react";
import "./sidebarcontent.css";
function SidebarContent({ image, title }) {
  return (
    <div>
      <div className="sidebarcontent">
        <div className="sidebar__link ">
          <img className="iconsvg" src={image} alt="" />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default SidebarContent;
