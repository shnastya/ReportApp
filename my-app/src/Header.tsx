import * as React from 'react';
// import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends React.Component {
    public render() {
      return  (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Report App</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/report">Report</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      );
    }
  }

export default Header;