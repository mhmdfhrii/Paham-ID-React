import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import HomePage      from "./pages/HomePage";
import NewsPage      from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import SignInPage    from "./pages/SignInPage";
import RegisterPage  from "./pages/RegisterPage";
import TrendingPage  from "./pages/TrendingPage";
import SavedPage     from "./pages/SavedPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Auth — tanpa Navbar/Footer ── */}
        <Route path="/signin"   element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* ── Main — dengan Navbar/Footer ── */}
        <Route element={<Layout />}>
          <Route path="/"          element={<HomePage />} />
          <Route path="/news"      element={<NewsPage />} />
          <Route path="/news/:id"  element={<NewsDetailPage />} />
          <Route path="/trending"  element={<TrendingPage />} />
          <Route path="/saved"     element={<SavedPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}