// src/admin/AdminDashboard.jsx
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Admin Dashboard</h2>
          <Link to="/admin/blog-editor">
            <Button variant="primary">Add New Blog</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
