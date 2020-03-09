import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
} from "reactstrap";

export default function CustomNavbar() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Service Rocket HR</NavbarBrand>
    </Navbar>
  );
} 