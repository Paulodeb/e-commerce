import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import  { AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import './HeaderStyles.css'

function Header({products}) {

  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([])
  

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setValue(searchWord)
    const newFilter = products.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === '') {
      setFilteredData([])
    } else{
      setFilteredData(newFilter)
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setValue('')
  }

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
                        type="text"
                        value={value} 
                        onChange={handleFilter}
                        placeholder="Search products & brands"
                        className="search-input col-12 border-0 "
                        aria-label="Search products & brands"
                      />
                     <div className="searchIcon">
                  {filteredData.length === 0 ?  (
                  <BsSearch size={25} />
                  ) : (
                  <AiOutlineClose size={25} id='clearBtn' onClick={clearInput}/>
                  )}
                 
                </div>
                
                    </Form>
                    {filteredData.length !== 0 &&
                <div className="t-dataResult">
                {filteredData.slice(0, 5).map((product) => (
                  <div className="dataItem" key={product.id}>
                    <p>{product.title}</p>
                  </div>
                ))}
              </div>
              }
                    {/* <ul className="search-list">
        {products.filter(products => {
          const searchTerm = value.toLowerCase();
          const title = products.title.toLowerCase();

          return searchTerm && title.startsWith(searchTerm) && title !== searchTerm
        }).slice(0,5)
        .map((product) => (
          <li onClick={()=>handleSearch(product.title)} key={product.id}>{product.title}</li>
        ))}
      </ul> */}
            </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
          </Navbar>
        ))}
          </div>
          
          <Navbar className="searchContainer" collapseOnSelect expand="lg" >
          <Navbar.Collapse
            className="  "
            id="responsive-navbar-nav"
          >
            <Nav className=" row search">
              <Form className="d-flex searchInput">
                <Form.Control
                 type="text" 
                 value={value} 
                 onChange={handleFilter}
                  placeholder="Search products & brands"
                  className="  search-input fw-normal text-muted border-0 "
                  aria-label="Search products & brands"
                />
                <div className="searchIcon">
                  {filteredData.length === 0 ?  (
                  <BsSearch size={25} />
                  ) : (
                  <AiOutlineClose size={25} id='clearBtn' onClick={clearInput}/>
                  )}
                 
                </div>
                
              </Form>
              
              {filteredData.length !== 0 &&
                <div className="dataResult">
                {filteredData.slice(0, 5).map((product) => (
                  <div className="dataItem" key={product.id}>
                    <p>{product.title}</p>
                  </div>
                ))}
              </div>}
              {/* <ul className=" search-list">
        {products.filter(products => {
          const searchTerm = value.toLowerCase();
          const title = products.title.toLowerCase();

          return searchTerm && title.startsWith(searchTerm) && title !== searchTerm
        }).slice(0,5)
        .map((product) => (
          <li onClick={()=>handleSearch(product.title)} key={product.id}>{product.title}</li>
        ))}
      </ul> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar className="downloadContainer" collapseOnSelect expand="lg" >

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
        <Navbar className="signContainer" collapseOnSelect expand="lg">

          <Navbar.Collapse>

            <Nav className="d-flex pt-2 text-muted fs-6 sign">
             <button className="border-0 bg-transparent fw-light">Sign up</button>
             <span className="p-2">/</span>
             <button className="border-0 bg-transparent fw-light">Login</button>
           </Nav>
          </Navbar.Collapse>
        </Navbar>
          
        </div>
      </Container>
    </>
  );
}

export default Header;
