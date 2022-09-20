import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import style from "./Navbar.module.css";
import logo from "../../assets/images/blanja.png";
import { AiOutlineFilter } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Navibar() {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className={style.link}>
          <img onClick={() => navigate("/")} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "133px" }}
            navbarScroll
          >
            <Nav.Link className={style.formSearch}>
              <input
                className="form-control rounded-pill"
                type="text"
                placeholder="Search"
              />
            </Nav.Link>
            <Nav.Link className={style.filter}>
              <AiOutlineFilter size={30} />
            </Nav.Link>
          </Nav>
          <div className="row">
            <div className="col-md-4">
              <Nav.Link className={style.filter}>
                <BsCart2 onClick={() => navigate("/my-bag")} size={30} />
              </Nav.Link>
            </div>
            <div className="col-md-4 d-grid">
              <Button
                variant="danger"
                className={`rounded-pill ${style.imageUser}`}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
            <div className="col-md-4 d-grid">
              <Button
                variant="outline-danger"
                className={`rounded-pill ${style.imageUser}`}
                onClick={() => navigate("/register")}
              >
                Signup
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
