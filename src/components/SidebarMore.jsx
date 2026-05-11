import React from "react";
import { Link } from "react-router-dom";
import { moreData } from "../data/dummyNews";

export default function SidebarMore({ category }) {
  return (
    <div className="sidebar-section more-from">
      <h4 className="sidebar-title">
        <span className="title-dash"></span> MORE FROM {category}
      </h4>
      <div className="more-list">
        {moreData.map((item) => (
          <div key={item.id} className="more-item">
            <Link to={`/news/${item.id}`} className="more-link-wrapper">
              <img
                src={item.img || item.image}
                alt={item.title}
                className="more-thumb"
              />
              <div className="more-info">
                <h6 className="more-item-title">{item.title}</h6>
                <small className="more-item-date">{item.date}</small>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}