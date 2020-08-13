import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    const [isLoggedIn,setIsLoggedIn ]=React.useState(true)
  return (

    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          {" "}
          <img style={{ marginRight: "10px" }} alt="logo" src="oe.jpg" />
          TISA
        </Menu.Item>
        {isLoggedIn &&<><Menu.Item  name="About Us" />
        <Menu.Item name="Contact Us" />
        <Menu.Item
          as={NavLink}
          exact
          to="/register"
          position="right"
          name="Join US"
        /></>}
      </Container>
    </Menu>
  );
};
