import React from "react";
import "./FooterStyles.css";
import { FcLike } from "react-icons/fc";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p className="footer__content">
          Crafted and developed with <FcLike size={24} /> by Nobert Langat{" "}
          <br />
          Copyrights &copy; {currentYear}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
