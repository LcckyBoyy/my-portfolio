/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(0,0,0,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home" style={{ color: "#ffffff" }}>Home</a>
      <a href="#about" style={{ color: "#ffffff" }}>About</a>
      <a href="#portfolio" style={{ color: "#ffffff" }}>Portfolio</a>
      <a href="#footer" style={{ color: "#ffffff" }}>Contact</a>
    </div>
  );
};

export default Header;
