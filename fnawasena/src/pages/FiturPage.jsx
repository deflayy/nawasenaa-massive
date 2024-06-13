import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/Fitur.css";
import GooglePlay from "../img/18.png";
import AppStore from "../img/19.png";
import TanganHp from "../img/21.png";
import HeaderFitur from "../img/1.png";
import Fiturunggulan from "../img/fiturunggulan.png";
import Appss from "../img/screan.png";

const FiturPage = () => {
  return (
    <div className="fitur">
      <header
        className="header-fitur"
        style={{
          backgroundImage: `url(${HeaderFitur})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col>
              <div>
                <h1>Agriwave membuat pertanian anda lebih baik</h1>
                <p>
                  Aplikasi Agriwave adalah solusi digital komprehensif yang
                  dirancang khusus untuk memenuhi kebutuhan petani modern.
                  Dengan kombinasi antarmuka yang ramah pengguna dan fitur yang
                  kuat, aplikasi ini menjadi mitra setia bagi petani dalam
                  mengelola pertanian mereka dengan efisien dan efektif.
                </p>
                <div>
                  <a
                    href="https://play.google.com/"
                    className="download-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={GooglePlay} alt="Google Play" />
                  </a>
                  <a
                    href="https://apps.apple.com/"
                    className="download-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={AppStore} alt="App Store" />
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  src={TanganHp}
                  alt="Tangan Holding Smartphone"
                  className="img-tangan-hp"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="fitur-page-content">
        <Container>
          <Row>
            <Col>
              <div>
                <h2>Tentang Aplikasi Agriwave</h2>
                <p>
                  Agriwave juga dikenal sebagai aplikasi pertanian digital,
                  adalah perangkat lunak yang dirancang khusus untuk mendukung
                  petani dalam manajemen pertanian mereka. Aplikasi ini
                  menawarkan berbagai fitur dan fungsionalitas yang dirancang
                  untuk membantu petani meningkatkan produktivitas, efisiensi,
                  dan keberlanjutan pertanian mereka.
                </p>
                <h2>Keunggulan Aplikasi Agriwave</h2>
                <p>
                  Aplikasi ini memberikan panduan dan rekomendasi mengenai
                  manajemen tanaman, termasuk pemilihan bibit, pemupukan
                  tanaman, perawatan tanaman, dan waktu panen yang optimal.
                  Informasi ini membantu petani dalam mengoptimalkan hasil panen
                  mereka dengan meminimalkan risiko kerugian.
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  src={TanganHp}
                  alt="Tangan Holding Smartphone"
                  className="img-tangan-hp"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="w-100 min-vh-100">
        <img src={Fiturunggulan} className="img-fluid" alt="Fitur Unggulan" />
      </div>
      <div className="w-100 min-vh-100">
        <img src={Appss} className="img-fluid" alt="Appss" />
      </div>
    </div>
  );
};

export default FiturPage;
