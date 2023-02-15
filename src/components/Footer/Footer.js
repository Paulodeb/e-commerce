import React from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap'
import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid bg-white">
        <div className=" py-3  px-3  mx-4">
          <div className="d-flex footer-container justify-content-between flex-wrap">
            <div className="p-2 mt-3 logo-container">
              <h1 className=" text-muted pt-2 logo">Shopio</h1>
              <p className=" text-muted text">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="d-none d-sm-block policy-container p-2">
              <h1 className=" header">POLICY INFO</h1>
              <ul className="fs-6 text-muted list">
                <li>Privacy Policy</li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Report Abuse & Takedown Policy</li>
                <li> CSR Policy</li>
              </ul>
            </div>
            <div className="d-sm-none pad">
            <DropdownButton id="dropdown-basic-button" title="POLICY INFO">
                <Dropdown.Item href="#/action-1">Privacy Policy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Terms of Sale</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Terms of Use</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Report Abuse & Takedown Policy</Dropdown.Item>
                <Dropdown.Item href="#/action-5">CSR Policy</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className="d-none d-sm-block p-2 company-container">
              <h1 className="header ">COMPANY</h1>
              <ul className="fs-6 text-muted company-list">
                <li>About Us</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="d-sm-none pad">
            <DropdownButton id="dropdown-basic-button" title="COMPANY">
                <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Blog</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sitemap</Dropdown.Item>
                <Dropdown.Item href="#/action-4">FAQ</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Contact Us</Dropdown.Item>
            </DropdownButton>
            </div>
            <div className=" d-none d-sm-block flex-column justify-content-start align-items-start pt-2">
              <h1 className="header">BUSINESS</h1>
              <ul className="fs-6 text-muted">
                <li> Sell on Shopio</li>
                <li>Advertise on Shopio</li>
                <li>Media Enquiries</li>
                <li>Be an Affiliate</li>
                <li>Deal of the Day</li>
              </ul>
            </div>
            <div className="d-sm-none pad"> 
            <DropdownButton id="dropdown-basic-button" title="BUSINESS">
                <Dropdown.Item href="#/action-1">Sell on Shopio</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Advertise on Shopio</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Media Enquiries</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Be an Affiliate</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Deal of the Day</Dropdown.Item>
            </DropdownButton>
            </div>
            <div
              className="p-2 subscribe-container">
              <h1 className="header">SUBSCRIBE</h1>
              <div className="input text-muted">
                <input type="text" placeholder="Your email Address" />
                <button>Submit</button>
              </div>
              <p className="sub-text text-muted">
                Lorem ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
          </div> 
        </div>
      </footer>
      <div className=" py-3 copyright text-muted">
        <p>Copyright 2016. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
