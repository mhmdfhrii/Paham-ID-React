import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, AtSign, Mail, Lock, Eye, EyeOff } from "lucide-react";
import "../styles/auth.css";

export default function RegisterPage() {
  const [showPass, setShowPass]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="auth-page">
      <div className="auth-card register-card">

        {/* ── KIRI: Logo ── */}
        <div className="auth-white-side">
          <div className="auth-logo-stack">
            <img src="/img/logoregist.png" alt="Paham.ID" className="auth-logo-icon" />
            <img src="/img/Group 2.png"    alt="Paham.ID" className="auth-logo-text"  />
          </div>
        </div>

        {/* ── KANAN: Form ── */}
        <div className="auth-navy-side">
          <div className="auth-form-wrapper">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Please fill the details below</p>

            <div className="auth-form">

              <div className="auth-input-group">
                <label>Full name <span className="req">*</span></label>
                <div className="auth-input-wrap">
                  <User size={15} className="auth-input-icon" />
                  <input type="text" placeholder="Enter your full name" />
                </div>
              </div>

              <div className="auth-input-group">
                <label>Username <span className="req">*</span></label>
                <div className="auth-input-wrap">
                  <AtSign size={15} className="auth-input-icon" />
                  <input type="text" placeholder="Enter your username" />
                </div>
              </div>

              <div className="auth-input-group">
                <label>Email <span className="req">*</span></label>
                <div className="auth-input-wrap">
                  <Mail size={15} className="auth-input-icon" />
                  <input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="auth-input-group">
                <label>Password <span className="req">*</span></label>
                <div className="auth-input-wrap">
                  <Lock size={15} className="auth-input-icon" />
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Create a password"
                  />
                  <button type="button" className="auth-eye-btn" onClick={() => setShowPass(v => !v)} tabIndex={-1}>
                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <div className="auth-input-group">
                <label>Confirm Password <span className="req">*</span></label>
                <div className="auth-input-wrap">
                  <Lock size={15} className="auth-input-icon" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm your password"
                  />
                  <button type="button" className="auth-eye-btn" onClick={() => setShowConfirm(v => !v)} tabIndex={-1}>
                    {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
              </div>

              <button type="button" className="auth-btn-submit">Create Account</button>
            </div>

            <p className="auth-footer-text">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}