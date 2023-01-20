import React from 'react'
import './Footer.css'

const Footers = () => {
  return (
    <footer className='foot-container'>

    <div className='footer'>
        <div className='footer-container'>
            <div className=' card2'>
                <h1 className='logo-text'>Shopio</h1>
                <p className='sub-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className='card2'>
                <h1 className='head-text'>POLICY INFO</h1>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Report Abuse & Takedown Policy</li>
                    <li> CSR Policy</li>
                </ul>
            </div>
            <div className='card2'>
                <h1 className='head-text'>COMPANY</h1>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='card2'>
                <h1 className='head-text'>BUSINESS</h1>
                <ul>
                    <li> Sell on Shopio</li>
                    <li>Advertise on Shopio</li>
                    <li>Media Enquiries</li>
                    <li>Be an Affiliate</li>
                    <li>Deal of the Day</li>
                </ul>
            </div>
            <div className='card2'>
                <h1 className='head-text'>SUBSCRIBE</h1>
                <div className='input'>
                <input type='text' placeholder='Your email Address'/>
                <button>Submit</button>
                </div>
                <p className='sub-text'>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
        </div>
    </div>
            <div className='copyright'>
                <p>Copyright 2016. All Rights Reserved</p>
            </div>
      
    </footer>
  )
}

export default Footers