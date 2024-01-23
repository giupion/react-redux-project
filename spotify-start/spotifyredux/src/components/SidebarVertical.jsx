import React from 'react'

import { useEffect, useState } from "react";
import { InputGroup, FormControl, Button, Navbar, Nav } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const SidebarVertical = () => {

    const dispatch = useDispatch();
    
  return (
    
    
    <Navbar expand="md" fixed="left"  className="d-none d-md-flex">
 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="align-items-baseline">
      <Nav className="flex-column">
      
          
        <InputGroup>
          <FormControl 
            placeholder="Search" 
            aria-label="Search" 
            aria-describedby="basic-addon2" 
         
          />
          <Button variant="outline-secondary" id="button-addon2" >
            GO
          </Button>
        </InputGroup>
        <InputGroup className="mt-2">
          <Button variant="outline-secondary" id="button-addon2" >
            CLEAR
          </Button>
        </InputGroup>
      </Nav>
    </Navbar.Collapse>
    <div className="nav-btn">
      <Button className="btn" id="signup-btn">
        Sign Up
      </Button>
      <Button className="btn" id="login-btn">
        Login
      </Button>
      <a>Cookie Policy</a> |<a> Privacy</a>
    </div>
  </Navbar>
       
  

      
   
  )
}

export default SidebarVertical
