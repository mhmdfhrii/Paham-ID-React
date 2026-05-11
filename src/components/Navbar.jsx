import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();

  // Fix: /login → /signin sesuai route di App.jsx
  const isAuthPage = currentPath === '/signin' || currentPath === '/register';
  if (isAuthPage) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* LOGO — bisa diklik ke home */}
        <div className="navbar-logo">
          <Link to="/" className="logo-icon">
            <img src="/img/Group2.png" className="logo-img" alt="Logo" />
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className={`menu-item ${currentPath === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`menu-item ${currentPath === '/news' ? 'active' : ''}`}>
            <Link to="/pages/NewsPage">News</Link>
          </li>
          <li className={`menu-item ${currentPath === '/trending' ? 'active' : ''}`}>
            <Link to="/TrendingPage">Trending</Link>
          </li>
          <li className={`menu-item ${currentPath === '/saved' ? 'active' : ''}`}>
            <Link to="/pages/SavedPage">Saved</Link>
          </li>
        </ul>

        {/* ACTIONS */}
        <div className="navbar-actions">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="button" className="search-icon-wrapper" style={{ cursor: 'pointer', border: 'none', background: 'none', display: 'flex', alignItems: 'center' }}>
              <img src="/img/search.png" className="search-icon-img icon-black" alt="search" />
            </button>
          </div>

          <div className="icon-group">
            <button className="icon-btn">
              <img src="/img/notif.png" className="icon-img" alt="notif" />
            </button>

            {/* Avatar → ke Sign In */}
            <Link to="/signin" style={{ display: 'flex' }}>
              <button className="icon-btn profile-btn">
                <img src="/img/acc.png" className="icon-img account-img" alt="account" />
              </button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;