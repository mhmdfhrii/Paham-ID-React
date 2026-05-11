import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allNewsData } from "../data/dummyNews";
import "../styles/globals.css";

export default function TrendingPage() {
  const [timeFilter, setTimeFilter] = useState("TODAY");

  const getFilteredData = () => {
    if (timeFilter === "TODAY")      return allNewsData.slice(0, 3);
    if (timeFilter === "THIS WEEK")  return allNewsData.slice(2, 6);
    return allNewsData; // THIS MONTH
  };

  const filteredNews = getFilteredData();

  return (
    <div className="trending-page-container">
      <div className="trending-content-wrapper">

        <header className="trending-page-header">
          <h1 className="trending-main-title">What's Trending Now?</h1>

          <div className="trending-filter-row">
            {["TODAY", "THIS WEEK", "THIS MONTH"].map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${timeFilter === filter ? "active" : ""}`}
                onClick={() => setTimeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        <main className="trending-news-list">
          {filteredNews.map((item, index) => (
            <Link key={item.id} to={`/news/${item.id}`} className="trending-card-link">
              <article className="trending-news-card">

                <div className="trending-image-box">
                  {timeFilter === "TODAY" && index === 0 && (
                    <span className="badge-trending">#1 TRENDING</span>
                  )}
                  <img src={item.image} alt={item.title} className="trending-img" />
                </div>

                <div className="trending-text-box">
                  <span className="trending-news-category">{item.category}</span>
                  <h2 className="trending-news-headline">{item.title}</h2>
                  <p className="trending-news-summary">{item.excerpt || item.description}</p>
                  <div className="trending-meta">
                    <span>{item.readTime}</span>
                    <span className="dot">•</span>
                    <span>{item.date}</span>
                  </div>
                </div>

              </article>
            </Link>
          ))}
        </main>

      </div>
    </div>
  );
}