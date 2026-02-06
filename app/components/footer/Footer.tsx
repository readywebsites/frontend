import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Image
            src="/images/logo/logo_01_trans.png"
            alt="Avadh Group Logo"
            className="footer-logo"
            width={100}
            height={100}
            loading="lazy"
          />
          <p>
            Crafting landmarks that redefine skylines. Avadh Group is synonymous
            with luxury, innovation, and trust in the real estate sector.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Residential</Link>
            </li>
            <li>
              <Link href="#">Commercial</Link>
            </li>
            <li>
              <Link href="#">Lifestyle Club</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>
            Avadh Group, 401, 4th Floor, International Business Center, Dumas
            Road, Surat, Gujarat 395007
          </p>
          <p>
            Email: <a href="mailto:info@avadhgroup.com">info@avadhgroup.com</a>
          </p>
          <p>
            Phone: <a href="tel:+912612345678">+91 261 234 5678</a>
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Avadh Group. All Rights Reserved.</p>
        <p>
          <Link href="/privacy-policy">Privacy Policy</Link> |
          <Link href="/terms-of-use">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
