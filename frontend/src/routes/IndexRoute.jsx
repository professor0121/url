import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Links from "../pages/Links";
import QR from "../pages/Qr";
import Pages from "../pages/Pages";
import Analytics from "../pages/Analytics";
import Campaigns from "../pages/Campaigns";
import Domains from "../pages/Domains";
import Settings from "../pages/Settings";

function IndexRoute() {
  return (
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="links" element={<Links />} />
        <Route path="qr" element={<QR />} />
        <Route path="pages" element={<Pages />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="domains" element={<Domains />} />
        <Route path="settings" element={<Settings />} />
      </Route>
  );
}

export default IndexRoute;
