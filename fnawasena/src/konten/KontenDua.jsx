import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Ulat from "../img/blog2.png";
import { Header1 } from "../data";
import "../css/Konten.css";

const KontenDua = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header
        className="konten-header"
        style={{
          backgroundImage: `url(${Header1.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1>AGRIWAVE</h1>
              <p>BLOG</p>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="konten-container">
        <div className="konten-sidebar">
          <button
            className="konten-back-button"
            onClick={() => navigate("/blog")}
          >
            &larr; Kembali
          </button>
          <div className="konten-search-bar">
            <input type="text" placeholder="Cari" />
            <button>Cari</button>
          </div>
          <div className="konten-recent-posts">
            <h2>Postingan Terkini</h2>
            <ul>
              <li>Meningkatkan kesuburan tanah alami</li>
              <li>Tanah di Indonesia 70 Persen Tidak Subur</li>
              <li>Kasgot, Alternatif Pupuk Ramah Lingkungan</li>
              <li>Kasgot Bisa Menyelamatkan Lahan Pertanian</li>
              <li>Tingkat Kesuburan Tanah Turun</li>
              <li>Strategi Agar Tanaman Buah di Pot Berbuah Lebih Cepat</li>
              <li>Keuntungan Penggunaan Pupuk Organik</li>
              <li>Pengelolaan Sampah Organik Untuk Keberlanjutan Lingkungan</li>
              <li>Rahasia Merawat Tanaman yang Sehat</li>
            </ul>
          </div>
        </div>
        <div className="konten-main-content">
          <div className="konten-post-header">
            <span>Posted on Mei 18, 2024 by Admin</span>
          </div>
          <h1>Meningkatkan Kesuburan Tanah Alami</h1>
          <img
            src={Ulat}
            alt="Tractor in field"
            className="konten-featured-image"
          />
          <div className="konten-post-content">
            <p>
              Tanah yang dapat menghasilkan panen yang melimpah sepanjang tahun
              jika diintami dapat disebut sebagai tanah yang subur. Namun, jika
              tanah hanya menghasilkan hasil tinggi tetapi hanya dapat diintami
              sekali dalam setahun karena kurangnya pasokan air, maka tanah
              tersebut tidak dapat diklasifikasikan sebagai tanah yang subur.
            </p>
            <p>
              Maka, definisi kesuburan tanah dibagi menjadi dua kategori:
              kesuburan tanah aktual, yang merupakan kesuburan tanah yang ada
              secara alami, dan kesuburan tanah potensial, yang mencakup
              kemampuan maksimum tanah yang dapat dicapai dengan intervensi
              teknologi, seperti penerapan sistem pengairan untuk lahan yang
              tidak memiliki pasokan air yang berkelanjutan dan solusi lainnya.
            </p>
            <p>
              Penggunaan pupuk organik dalam pertanian untuk meningkatkan
              kesuburan tanah dan kesehatan tanaman semakin diminati. Pupuk
              organik, yang terbuat dari bahan-bahan seperti pupuk kandang,
              kompos, dan limbah organik lainnya, tidak hanya memberikan manfaat
              bagi tanaman, tetapi juga membantu mengurangi dampak negatif
              terhadap lingkungan.
            </p>
          </div>
          <div className="konten-post-sidebar">
            <h2>Tips Meningkatkan Kesuburan Tanah</h2>
            <ul>
              <li>1. Kompos: Gunakan kompos dari sisa-sisa tanaman.</li>
              <li>
                2. Pupuk Hijau: Tanam tanaman penutup tanah seperti
                kacang-kacangan untuk meningkatkan kesuburan dan struktur tanah.
              </li>
              <li>
                3. Rotasi Tanaman: Praktik rotasi tanaman dapat mencegah
                penumpukan patogen dan meningkatkan keseimbangan nutrisi tanah.
              </li>
              <li>
                4. Campuran Tanah: Pastikan campuran tanah Anda selalu cukup
                drainase yang baik dan resirkulasi air yang cukup.
              </li>
              <li>
                5. Bahan Organik: Gunakan bahan organik dari jarum daun, rumput
                kering untuk meningkatkan kandungan organik tanah.
              </li>
            </ul>
            <p>
              Dengan menerapkan tips ini, Anda dapat menjaga kesuburan tanah
              secara alami demi memobilisasi kegiatan pertanian Anda untuk masa
              depan yang lebih berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontenDua;
