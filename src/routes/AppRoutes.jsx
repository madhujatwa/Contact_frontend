import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

// Auth Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// User Pages
import Dashboard from "../pages/user/Dashboard";
import AddContact from "../pages/user/AddContact";
import ViewContacts from "../pages/user/ViewContacts";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";
import ContactDetails from "../pages/user/ContactDetails";
import EditContact from "../pages/user/EditContact"; // ✅ ADD THIS

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard Routes */}
      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />

        {/* CONTACT MODULE */}
        <Route path="/dashboard/view" element={<ViewContacts />} />
        <Route path="/dashboard/add" element={<AddContact />} />

        <Route path="/dashboard/contact/:id" element={<ContactDetails />} />

        {/* ✅ IMPORTANT MISSING ROUTE */}
        <Route path="/dashboard/edit/:id" element={<EditContact />} />

        {/* Profile / Settings */}
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />

      </Route>

    </Routes>
  );
}