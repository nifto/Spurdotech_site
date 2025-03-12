import React from "react";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary text-gray-900">
      <header className="w-full bg-primary text-white py-4">
        <nav className="container mx-auto flex justify-between px-6">
          <h1 className="text-xl font-bold">Spurdotech</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/mac-repair" className="hover:underline">Mac Repair</a></li>
            <li><a href="/data-recovery" className="hover:underline">Data Recovery</a></li>
            <li><a href="/upgrades" className="hover:underline">Upgrades</a></li>
            <li><a href="/remote-support" className="hover:underline">Remote Support</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto p-6">{children}</main>
      <footer className="w-full bg-primary text-white text-center py-4 mt-6">
        <p>&copy; {new Date().getFullYear()} Spurdotech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
