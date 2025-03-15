import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { HiOutlineLogin } from "react-icons/hi";
import { IoCreate } from "react-icons/io5";
import { RiDashboard3Fill } from "react-icons/ri";
import { CiBank } from "react-icons/ci";

import { useUser } from "../../context/UserContext";

export const Header = () => {
  const { user, setUser } = useUser();
  const handleOnLogOut = () => {
    // On Logout click, delete `accessJWT` token form the `localStorage`
    localStorage.removeItem("accessJWT");

    // Reset user object form the state
    setUser({});
  };

  return (
    <Navbar expand="lg" variant="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">FT</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  <RiDashboard3Fill /> Dashboard
                </Nav.Link>

                <Nav.Link as={Link} to="/transaction">
                  <CiBank /> Transaction
                </Nav.Link>
                <Nav.Link onClick={handleOnLogOut} as={Link} to="/">
                  <ImExit /> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">
                  <IoCreate /> Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  <HiOutlineLogin /> Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
