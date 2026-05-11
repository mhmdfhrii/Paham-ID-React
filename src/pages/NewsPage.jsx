import { useState } from "react";
import { Link } from "react-router-dom";
import { allNewsData } from "../data/dummyNews";
import "../styles/globals.css";

const categories = ["ALL", "ENVIRONMENT", "POLITICS", "TECHNOLOGY", "SOCIAL", "ECONOMICS", "EDUCATION"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const isAll = activeCategory === "ALL";

  const filteredData = isAll
    ? allNewsData
    : allNewsData.filter(item => item.category === activeCategory);

  const headline = filteredData[0];
  const mainContent = isAll ? filteredData.slice(1) : filteredData;

  return (
    <div className="news-page-wrapper">
      {/* --- CATEGORY BAR --- */}
      <nav className="category-bar">
        <span className="sections-label">SECTIONS:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main className="news-container">
        {/* --- HEADLINE --- */}
        {headline && (
          <section className="featured-article" style={{ marginBottom: "60px" }}>
            <div className="featured-image-wrapper">
              <Link to={`/news/${headline.id}`}>
                <img src={headline.image} alt={headline.title} style={{ borderRadius: "20px", cursor: "pointer", width: "100%" }} />
              </Link>
            </div>
            <div className="featured-content">
              <span className="category-tag">{headline.category}</span>
              <Link to={`/news/${headline.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <h1 style={{ fontFamily: "Georgia, serif", fontSize: "42px", margin: "15px 0", cursor: "pointer" }}>
                  {headline.title}
                </h1>
              </Link>
              <p style={{ color: "#555", lineHeight: "1.6" }}>{headline.description}</p>
              <div className="author-meta" style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
                <img src={headline.authorImage || "https://via.placeholder.com/40"} alt={headline.author} style={{ borderRadius: "50%", width: "40px" }} />
                <div style={{ fontSize: "12px" }}>
                  <strong>{headline.author}</strong>
                  <p style={{ color: "#999", margin: 0 }}>{headline.date} • {headline.readTime}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* --- GRID / LIST --- */}
        {isAll ? (
          <div className="articles-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
            {mainContent.map((article) => (
              <article key={article.id} className="article-card">
                <div className="card-top" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ color: "#1a3a5c", fontSize: "10px", fontWeight: "bold" }}>{article.category}</span>
                  <span onClick={() => setActiveCategory(article.category)} style={{ color: "#00aaff", fontSize: "9px", cursor: "pointer", fontWeight: "bold" }}>LIHAT SEMUA</span>
                </div>
                <Link to={`/news/${article.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card-image">
                    <img src={article.image} alt={article.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
                  </div>
                  <h3 style={{ fontFamily: "Georgia, serif", fontSize: "19px", lineHeight: "1.3", marginBottom: "10px" }}>{article.title}</h3>
                </Link>
                <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.5" }}>{article.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="news-list-vertical">
            {filteredData.slice(1).map((article) => (
              <div key={article.id} className="list-item" style={{ display: "flex", gap: "25px", marginBottom: "40px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
                <div className="list-image" style={{ flex: "0 0 250px" }}>
                  <Link to={`/news/${article.id}`}>
                    <img src={article.image} alt={article.title} style={{ width: "100%", borderRadius: "12px", cursor: "pointer" }} />
                  </Link>
                </div>
                <div className="list-info">
                  <span className="date-label" style={{ fontSize: "11px", color: "#999" }}>{article.date}</span>
                  <Link to={`/news/${article.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <h2 style={{ fontFamily: "Georgia, serif", fontSize: "24px", margin: "10px 0", cursor: "pointer" }}>{article.title}</h2>
                  </Link>
                  <p style={{ color: "#555", fontSize: "14px" }}>{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}