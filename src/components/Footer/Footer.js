import React from 'react'
import './FooterStyles.css'

const Footer = () => {


  return (
    <>

    <footer className='container-fluid bg-white'>

    <div className=' py-3  px-3  mx-4'
           
    >
        <div className='d-flex justify-content-between flex-wrap'
        
        >
            <div className='p-2 mt-3'
              >
                <h1 className=' text-muted pt-2'
                
            style={{width: '8rem', height: '3rem', fontSize: '2rem', textAlign: 'start', 
             
        }}
                >Shopio</h1>
                <p className=' text-muted'
                style={{fontSize: '0.8rem',
                width: '10rem', height: '5rem'
                }}
                >Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className=' p-2'
            
            >
            
                <h1 className=' ms-2'
                 style={{width: '9rem', height: '2rem', fontSize: '1.1rem', textAlign: 'center', 
             
             borderRadius: '50'}}
                >POLICY INFO</h1>
                <ul className='fs-6 text-muted '
                style={{width: '10rem', height: '8rem', listStyle:'none', textAlign: 'start', }}
                >
                    <li>Privacy Policy</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Report Abuse & Takedown Policy</li>
                    <li> CSR Policy</li>
                </ul>
            </div>
            <div className=' p-2'
           
            >
                <h1 
                style={{width: '9rem', height: '2rem', fontSize: '1.1rem', textAlign: 'center', 
             
             borderRadius: '50'}}
                className=''>COMPANY</h1>
                <ul className='fs-6 text-muted'
                style={{width: '10rem', height: '8rem', alignItems: 'start', justifyContent: 'start'}}
                >
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className=' flex-column justify-content-center align-items-center pt-2'
            >
                <h1 
            style={{width: '9rem', height: '2rem', fontSize: '1.0rem', textAlign: 'center',}}
                
                className=' '>BUSINESS</h1>
                <ul
                className='fs-6 text-muted'
               style={{width: '10rem', height: '8rem', textAlign: "start"}}
               
                >
                    <li> Sell on Shopio</li>
                    <li>Advertise on Shopio</li>
                    <li>Media Enquiries</li>
                    <li>Be an Affiliate</li>
                    <li>Deal of the Day</li>
                </ul>
            </div>
            <div className='p-2'
          style={{width: '18rem', height: '10rem', textAlign: 'start'}}
            
            >
                <h1 
                style={{width: '9rem', height: '2rem', fontSize: '1.0rem', textAlign: 'start',}}
                className=' '>SUBSCRIBE</h1>
                <div className='input text-muted'>
                <input type='text' placeholder='Your email Address'/>
                <button>Submit</button>
                </div>
                <p className='sub-text text-muted'>Lorem ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
        </div>
    </div>
    </footer>
            <div className=' py-3 copyright text-muted'>
                <p>Copyright 2016. All Rights Reserved</p>
            </div> 
    </>
  )
}

export default Footer
