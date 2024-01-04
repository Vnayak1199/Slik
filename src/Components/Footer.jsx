import React from 'react'
import footerLogo from '../images/footer-logo.svg'
import { footerLink, footerSocial, footer_bottom } from '../utils/FooterData'

const Footer = () => {
  return (
    <>
        <footer>
    <div className="container">
      <div className="footer-top">
        <div className="row">
          <div className="col-md-7 col-sm-5 footer-left">
            <a href="index.html" className="footer-logo" title="Slik">
              <img src={footerLogo} alt="Logo" className="wow bounceInLeft" data-wow-delay="0.5s" />
            </a>
          </div>
          <div className="col-md-5 col-sm-7 footer-right">
            <div className="row">
              <div className="col-6">
                <div className="footer-widget wow fadeInUp">
                  <h4>Pages</h4>
                  <ul>
                    {footerLink.map((footerData,i) => (
                            <li key={i}><a href={footerData.href} title={footerData.title}>{footerData.link}</a></li>
                        ))}
                    <li>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay="0.5s">
                  <h4 className="text-center">Follow us</h4>
                  <ul className="social-icon">
                    {footerSocial.map((footerIcon,i) => (
                        <li key={i}><a href="#" title={footerIcon.title}><img src={footerIcon.icon} alt={footerIcon.alt} /></a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row footer-bottom-inner">
          <div className="col-sm-4 footer-bottom-left wow fadeInLeft">
            <p>© Slik 2024 designed by Vnayak</p>
          </div>
          <div className="col-sm-8 footer-bottom-right wow fadeInRight">
            <ul>
              {footer_bottom.map((footerB ,i) => (
                <li key={i}>
                  <a href={footerB.href} title={footerB.title}>{footerB.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
