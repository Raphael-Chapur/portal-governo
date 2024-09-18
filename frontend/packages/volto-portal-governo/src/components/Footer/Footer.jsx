import React from 'react';
import { Container } from '@plone/components';
import Info from './Info';

/**
 * Component to display the footer.
 * @function Footer
 * @returns {string} Markup of the component
 */
const Footer = () => {
  return (
    <footer id="footer">
      <Info />
      <Container className="footer">Hello World!</Container>
    </footer>
  );
};

export default Footer;
