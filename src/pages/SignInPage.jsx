import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import "../styles/auth.css";

export default function SignInPage() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="signin-page">
      {/* Background penuh dari signinbg.png — no card */}
      <div className="signin-bg" />

      <div className="signin-form-wrapper">
        <img src="/img/logosignin.png" alt="Paham.ID" className="signin-logo" />
        <h1 className="signin-title">Sign In</h1>

        <div className="signin-form">

          <div className="signin-input-group">
            <label>Email / Username <span className="req">*</span></label>
            <div className="signin-input-wrap">
              <Mail size={16} className="signin-icon" />
              <input type="text" placeholder="Enter your email or username" />
            </div>
          </div>

          <div className="signin-input-group">
            <label>Password <span className="req">*</span></label>
            <div className="signin-input-wrap">
              <Lock size={16} className="signin-icon" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="signin-eye-btn"
                onClick={() => setShowPass(v => !v)}
                tabIndex={-1}
              >
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <button type="button" className="signin-btn">Sign In</button>
        </div>

        <p className="signin-footer">
          Don't have an account? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </main>
  );
}