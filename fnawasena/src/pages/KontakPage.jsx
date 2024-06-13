import { Container, Row, Col } from "react-bootstrap";
import { Header2 } from "../data";
import "../dist/css/Kontak.css";
import { useState } from "react";

const KontakPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Terjadi kesalahan saat mengirim pesan.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim pesan.");
    }
  };

  return (
    <div className="kontakb1">
      <div>
        <header
          className=""
          style={{
            backgroundImage: `url(${Header2.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Row>
              <Col>
                <h1>AGRIWAVE</h1>
                <p>KONTAK</p>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
      <br />
      <br />
      <div className="kontakb2">
        <div className="komponen">
          <Container className="kontenb1">
            <Row className="rowkonb1">
              <p>
                Kami di sini untuk membantu, dan kami senang mendengar dari
                anda! Apakah anda ada pertanyaan, komentar, atau hanya ingin
                chat, anda dapat menghubungi kami melalui form kontak di halaman
                ini, atau melalui telepon, email, atau media sosial.
              </p>

              <form onSubmit={handleSubmit}>
                <div>
                  <label>Nama:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nama"
                    required
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label>Pesan:</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Pesan"
                    required
                  ></textarea>
                </div>
                <button type="submit">Kirim</button>
              </form>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default KontakPage;
