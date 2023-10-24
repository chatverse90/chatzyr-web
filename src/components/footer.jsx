import React from 'react';
import './footer.css'


function Footer() {
  return (
    <footer className='footerStyle'>
      <div className='footerContentStyle'>
        <ul className='menuStyle' >
          <li className='menuItemStyle'><a className='linkStyle' href="/termsofuse">Terms of Use </a></li>
          <li className='menuItemStyle'><a className='linkStyle' href="/contactus">Contact Us</a></li>
          <li className='menuItemStyle'><a className='linkStyle' href="/privacyterms">Privacy Policy</a></li>
        </ul>
        <div className='copyrightStyle'>
          <span className='chatzyrStyle'>Chatzyr</span> Copyright &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
