import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <BootstrapNavbar
      expand="lg"
      className="shadow-sm py-3 rounded-bottom fixed-top"
      style={{ background: "linear-gradient(145deg, #4b6cb7, #182848)" }}
    >
      <Container>
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3 text-light d-flex align-items-center gap-2"
        >
          🛍️ MUNE ALCHAMMA
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-light"
        />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={Link}
              to="/"
              className="px-3 text-light d-flex align-items-center gap-1 fw-medium"
            >
              {" "}
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/checkout"
              className="px-3 text-light d-flex align-items-center gap-1 fw-medium"
            >
              {" "}
              <FaShoppingCart /> Cart
              {totalItems > 0 && (
                <Badge
                  pill
                  bg="danger"
                  className="posaition-absolute top-0 start-100 translate-middle badge  rounded-pill"
                  style={{ fontSize: "0.8rem" }}
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
export default Navbar;
