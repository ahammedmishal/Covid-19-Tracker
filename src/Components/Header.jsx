import React ,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../context'
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import India from './India'



function Header() {
  
const {dark,setMode} = useContext(AppContext)
    return (
        
        <Navbar  bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#"><img src="https://img.icons8.com/nolan/64/coronavirus.png"/> COVID-19</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className=" justify-content-end" id="navbarScroll">
          <Nav 
            
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav>
            <div>
                <label class="switch">
                  <input type="checkbox"
                  onChange={()=>setMode(!dark)}
                  />
                  <span class="slider round"></span>
                </label>
            </div>
          </Nav>
        </Navbar.Collapse>
        
        </Navbar>
        
      
    )
    
}


export default Header
