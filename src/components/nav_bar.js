import React, { Component } from 'react';
import {Nav,Navbar ,NavItem,MenuItem,NavDropdown} from 'react-bootstrap/lib';

class Navigation extends Component {

 constructor(props) {
 	console.log(props);
 	super(props);
 	
 }
  


  render() {
    return (
      <Navbar inverse collapseOnSelect>
		    <Navbar.Header>
		      <Navbar.Brand>
		        <a href="#">{this.props.title}</a>
		      </Navbar.Brand>
		      <Navbar.Toggle />
		    </Navbar.Header>
		    <Navbar.Collapse>
		      <Nav>
		      	{
		      		this.props.links.map((link, index)=>{
		      			console.log(link);
		      			return (<NavItem  eventKey={index} href="#">{link}</NavItem>)
		      		})
		      	}
		        
		        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
		   		{
				  this.props.dropdown.map( (option,index)=>{
				  	return (<MenuItem eventKey={index}>{option}</MenuItem>)
				  })
				}
		        </NavDropdown>
		      </Nav>
		      <Nav pullRight>
		        {
			        this.props.pullright.map((pullright , index)=>{
			        	return (<NavItem eventKey={index} href="#">{pullright}</NavItem>);
			        })
		    	}
		      </Nav>
		    </Navbar.Collapse>
		  </Navbar>
    );
  }
}

export default Navigation;
