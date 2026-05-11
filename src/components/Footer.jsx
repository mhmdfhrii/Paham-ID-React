import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  const location = useLocation();

  // Sembunyikan footer di halaman auth
  const hiddenPaths = ["/signin", "/register"];
  if (hiddenPaths.includes(location.pathname.toLowerCase())) return null;

  return (
    <footer className="footer-container-custom">
      <div className="footer-content-wrapper">

        {/* ── ROW 1: Logo + Tagline + Newsletter mini ── */}
        <div className="footer-top-row">

          {/* Logo & tagline */}
          <div className="footer-brand">
            <div className="footer-logo-box">
              <img src="/img/logoregist.png" className="footer-icon-final" alt="Icon" />
              <img src="/img/Group 2.png" className="footer-text-final" alt="Paham.ID" />
            </div>
            <p className="footer-tagline">
              Berita yang membuat Anda <em>benar-benar paham.</em>
            </p>
          </div>

          {/* Nav Kolom */}
          <div className="footer-nav-cols">
            <div className="footer-nav-col">
              <span className="footer-col-heading">RUBRIK</span>
              <Link to="/news?cat=environment">Environment</Link>
              <Link to="/news?cat=technology">Technology</Link>
              <Link to="/news?cat=politics">Politics</Link>
              <Link to="/news?cat=economics">Economics</Link>
            </div>
            <div className="footer-nav-col">
              <span className="footer-col-heading">PAHAM.ID</span>
              <a href="/about">About Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact</a>
              <Link to="/register">Register</Link>
            </div>
          </div>

          {/* Newsletter mini */}
          <div className="footer-newsletter">
            <span className="footer-col-heading">NEWSLETTER</span>
            <p>Ringkasan berita terbaik, langsung ke inbox Anda.</p>
            <div className="footer-email-row">
              <input type="email" placeholder="Email kamu..." />
              <button type="button">SUBSCRIBE</button>
            </div>
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div className="footer-divider" />

        {/* ── ROW 2: Copyright + Social Icons ── */}
        <div className="footer-bottom-row">
          <p className="footer-copyright-text">
            © 2026 THE EDITORIAL AUTHORITY. ALL RIGHTS RESERVED.
          </p>

          <div className="footer-social-row">
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            {/* RSS */}
            <a href="/rss" className="footer-social-btn" aria-label="RSS">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19.01 7.38 20 6.18 20C4.98 20 4 19.01 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;