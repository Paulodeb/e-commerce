import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import  { AiOutlineDownload } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  function Shopio() {
    return (
      <>
        {[false, ].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="">
            <>
              <Navbar.Brand className="text-muted px-3 fs-3 " href="#">
                Shopio
                <Navbar.Toggle
                  className=" ms-2 border-0"
                  // aria-controls={`offcanvasNavbar-expand-${expand}`}
                >
                  <RxHamburgerMenu size={25} />
                </Navbar.Toggle>
              </Navbar.Brand>
       
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >


                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Shopio
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 p-3">
                    <Nav>Download App</Nav>
                    <Nav>SignUp</Nav>
                    <Nav>Login</Nav>
                  </Nav>
                  <Nav className=" col-11 bg-white ">
                    <Form className="d-flex  border col-12 ">
                      <Form.Control
                        type="search"
                        placeholder="Search products & brands"
                        className="col-12 border-0 "
                        aria-label="Search products & brands"
                      />
                      <div className="m-2">
                        <BsSearch size={25} />
                      </div>
                    </Form>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          </Navbar>
        ))}
      </>
    );
  }

  const Search = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="">
          <Navbar.Collapse
            className=" justify-content-center "
            id="responsive-navbar-nav"
          >
            <Nav className=" col-12 mt-3 bg-white  w-100">
              <Form className="d-flex   col-11 ">
                <Form.Control
                  type="search"
                  placeholder="Search products & brands"
                  className="col-12 ps-3 fw-normal text-muted border-0 "
                  aria-label="Search products & brands"
                />
                <div className="m-2 pe-5 ">
                  <BsSearch size={25} />
                </div>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };

  const Download = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg md" bg="">
          <Navbar.Toggle className="border-0">
            <div className="">
              <AiOutlineDownload />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse
            className=" justify-content-start "
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-center pt-2  ">
              <button className="border-0 bg-transparent fw-light ">Download App</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };

  const SignUp = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="">
         
          <Navbar.Collapse
            className=" justify-content-start "
            id="responsive-navbar-nav"
          >
            <Nav className="d-flex text-muted fs-6   " id="Login">
              <button className="border-0 bg-transparent fw-light">Sign up</button>
              <span className="p-2">/</span>
              <button className="border-0 bg-transparent fw-light">Login</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  };


  return (
    <>
      <Container fluid className="px-5" >
        <div className=" d-flex  justify-content-center align-items-center">
          <div className=" col-2 justify-content-center align-items-center  pt-2 ">
            <Shopio />
          </div>
          <div className="col-6  ">
            <Search  />
          </div>
          <div className="col-2 ms-5 pt-3  "> 
            <Download />
          </div>
          <div className="col-2 pt-3  ">
            <SignUp />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;
