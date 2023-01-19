import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="border-t border-gray-700 border-dashed py-2">
      <p className="text-center">
        Copyright&#169;{year}. All rights reserved by{" "}
        <a href="#home" className="underline">
          Humphrey
        </a>
      </p>
    </footer>
  );
};

export default Footer;
