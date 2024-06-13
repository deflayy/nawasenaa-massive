import footer1 from "../img/wa.png"; // Import WhatsApp logo
import footer2 from "../img/ig.png"; // Import Instagram logo
import footer3 from "../img/yt.png"; // Import YouTube logo

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <span className="footerlogo">AGRIWAVE</span>
        </div>
        <div className="footerb1">
          <ul className="menu-list">
            <li>
              <a href="#beranda">Beranda</a>
            </li>
            <li>
              <a href="#fitur">Fitur</a>
            </li>
            <li>
              <a href="#download">Download</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </div>
        <div className="footerb2">
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={footer1} alt="WhatsApp" className="footer-icon" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={footer2} alt="Instagram" className="footer-icon" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={footer3} alt="YouTube" className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="footerb3">
        <p>© 2024 Nawasena Group 2 Massive Project</p>
      </div>
    </footer>
  );
}

export default FooterComponent;
