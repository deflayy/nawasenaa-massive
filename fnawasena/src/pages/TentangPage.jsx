import { Container, Row, Col } from "react-bootstrap";
import { Header3 } from "../data";
import "../dist/css/TentangPage.css";

import profil1 from "../img/p1.png";
import profil2 from "../img/p2.png";
import profil3 from "../img/p3.png";
import profil4 from "../img/p4.png";
import profil5 from "../img/p5.png";
import profil6 from "../img/p6.png";
import tdeskripsi from "../img/t1.png";
import ticonn1 from "../img/t2.png";
import ticonn2 from "../img/t3.png";
import ticonn3 from "../img/t4.png";

const profiles = [
  { id: 1, name: "Moch Ferdiansyah", src: profil1 },
  { id: 2, name: "Azlina", src: profil2 },
  { id: 3, name: "I Putu The fly Arnawa", src: profil3 },
  { id: 4, name: "Muhammad Viddya Zufar", src: profil4 },
  { id: 5, name: "Annisa Armenda", src: profil5 },
  { id: 6, name: "Ryzki Fachturahman", src: profil6 },
];

const TentangPage = () => {
  return (
    <div className="tentang-page">
      <header
        className="header"
        style={{
          backgroundImage: `url(${Header3.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1>AGRIWAVE</h1>
              <p>TENTANG KAMI</p>
            </Col>
          </Row>
        </Container>
      </header>
      <br />
      <Container>
        <div className="section tentang">
          <div className="content">
            <h1>Tentang AGRIWAVE</h1>
            <p>
              Kami adalah sebuah platform pertanian yang berfokus pada pupuk
              maggot, marketplace, dan pelatihan pertanian. Dengan menyediakan
              pupuk maggot organik yang berkualitas, marketplace untuk jual-beli
              produk pertanian, dan pelatihan yang komprehensif tentang
              pertanian berkelanjutan, kami bertujuan untuk membantu petani
              meningkatkan hasil panen mereka secara alami dan berkelanjutan.
              Kami dapat berperan dalam memajukan industri pertanian menuju masa
              depan yang lebih cerah dan berkelanjutan.
            </p>
            <button>Hubungi Kami</button>
          </div>
          <div className="image">
            <img src={tdeskripsi} alt="Deskripsi" />
          </div>
        </div>
        <Container className="visi-misi-baris">
          <div className="section visi-misi">
            <Row>
              <Col>
                <h1>Visi</h1>
                <p>
                  Menjadi pemimpin dalam pengembangan dan distribusi pupuk
                  organik berkualitas tinggi untuk meningkatkan produktivitas
                  pertanian secara berkelanjutan.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>Misi</h1>
                <p>
                  Menghasilkan pupuk organik berkualitas tinggi untuk
                  meningkatkan kesuburan tanah secara ramah lingkungan.
                  Mengembangkan teknologi produksi pupuk organik yang efisien
                  dan berkelanjutan. Mengadakan pelatihan dan workshop untuk
                  meningkatkan pemahaman dan keterampilan dalam penggunaan pupuk
                  maggot.
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="container-page">
          <div className="section cara-kerja">
            <Row>
              <Col>
                <h1>Cara Kami Bekerja Sama</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={ticonn1} alt="Pelatihan" />
                <h2>Pelatihan</h2>
                <p>Menyediakan konten yang bermanfaat dan informatif.</p>
              </Col>
              <Col>
                <img src={ticonn2} alt="Berkolaborasi" />
                <h2>Berkolaborasi</h2>
                <p>Saling bersinergi untuk kemajuan agraria bersama.</p>
              </Col>
              <Col>
                <img src={ticonn3} alt="Petani" />
                <h2>Petani</h2>
                <p>
                  Memberikan produk dengan kualitas terbaik bagi pertumbuhan
                  tanaman.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className="section tim-kami">
            <h1>TIM KAMI</h1>
            <div className="photo-list">
              {profiles.map((profile) => (
                <div key={profile.id}>
                  <img src={profile.src} alt={profile.name} />
                  <p>{profile.name}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default TentangPage;
