import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className="self-center mt-10">{year}</footer>;
};

export default Footer;
