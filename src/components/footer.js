import React from 'react';
import './footer.scss';

function Footer ({ author }) {
  return (
    <footer>
      <div className="footer-wrap">
        ©{new Date().getFullYear()} {author}<br />
        Built with <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
      </div>
    </footer>
  );
}

export default Footer;
