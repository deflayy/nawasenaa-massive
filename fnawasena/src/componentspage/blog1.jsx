import { Container } from "react-bootstrap";
import Blog1Image from "../img/blog1.png"; // Pastikan mengganti path sesuai dengan struktur proyek Anda

const Blog1 = () => {
  return (
    <Container>
      <div className="blog-post">
        <img src={Blog1Image} alt="Blog 1" />
        <div className="blog-info">
          <h2>Meningkatkan Kesuburan Tanah Alami</h2>
          <p>Tanggal: 12 April 2024</p>
          <p>
            Deskripsi: Tanah yang dapat menghasilkan panen yang melimpah
            sepanjang tahun jika ditanami dapat disebut sebagai tanah yang
            subur....
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog1;
