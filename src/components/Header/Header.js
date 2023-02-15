import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import  { AiOutlineDownload, AiOutlineSearch } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import './HeaderStyles.css'

function Header({products}) {

  const [value, setValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

    
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSearch = (searchTerm) => {
    setValue(searchTerm);
  };
  return (
    <>
      <Container fluid className=" " >
        <div className="d-flex">
          <div className="logo-con ">
          {[false, ].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="py-2">
            <>
            <div className="d-flex">
              <Navbar.Brand className="text-muted fs-3 " href="#">
                Shopio
              </Navbar.Brand>
                <Navbar.Toggle 
                  className=" toggle pt-2 border-0"
                 aria-controls= {`offcanvasNavbar-expand-${expand}`}
                 >
                  <RxHamburgerMenu size={20} />
                </Navbar.Toggle>
            </div>
       
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
                        value={value} 
                        onChange={handleChange}
                        placeholder="Search products & brands"
                        className="col-12 border-0 "
                        aria-label="Search products & brands"
                      />
                      <div className="m-2"
                       onClick={handleSearch}>
                        <BsSearch size={25} />    
                      </div>
                    </Form>
                    <ul className="search-list">
        {products.filter(products => {
          const searchTerm = value.toLowerCase();
          const title = products.title.toLowerCase();

          return searchTerm && title.startsWith(searchTerm) && title !== searchTerm
        }).slice(0,5)
        .map((product) => (
          <li onClick={()=>handleSearch(product.title)} key={product.id}>{product.title}</li>
        ))}
      </ul>
            </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          </Navbar>
        ))}
          </div>
          <div className="toggle-container">
          <Navbar collapseOnSelect expand="lg" >
          <Navbar.Collapse
            className="  "
            id="responsive-navbar-nav"
          >
            <Nav className=" row border bg-white ">
              <Form className="d-flex search-input-container">
                <Form.Control
                 type="Search" 
                 value={value} 
                 onChange={handleChange}
                  placeholder="Search products & brands"
                  className="  search-input fw-normal text-muted border-0 "
                  aria-label="Search products & brands"
                />
                <div className="p-2"
                onClick={handleSearch}>
                  <BsSearch size={25} />
                </div>
                
              </Form>
              <ul className=" search-list">
        {products.filter(products => {
          const searchTerm = value.toLowerCase();
          const title = products.title.toLowerCase();

          return searchTerm && title.startsWith(searchTerm) && title !== searchTerm
        }).slice(0,5)
        .map((product) => (
          <li onClick={()=>handleSearch(product.title)} key={product.id}>{product.title}</li>
        ))}
      </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar className="" collapseOnSelect expand="lg" >

          <Navbar.Toggle className="border-0">
            <div className="">
              <AiOutlineDownload />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse>

            <Nav className="download pt-2  align-item-center  ">
              <button className="border-0 bg-transparent fw-light ">Download App</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar className="" collapseOnSelect expand="lg">

          <Navbar.Collapse>

            <Nav className="d-flex pt-2 text-muted fs-6 sign">
             <button className="border-0 bg-transparent fw-light">Sign up</button>
             <span className="p-2">/</span>
             <button className="border-0 bg-transparent fw-light">Login</button>
           </Nav>
          </Navbar.Collapse>
        </Navbar>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;
