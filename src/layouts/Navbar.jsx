import React from "react";
import { NavLink } from "react-router-dom";
import {Container, Button, Menu} from "semantic-ui-react";

export default function Navbar() {
    return(
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={NavLink} to="/" name="home" />
                    <Menu.Item as={NavLink} to="/user?limit=10" name="users" />
                    <Menu.Menu position="right" >
                        <Menu.Item>
                            <Button primary>Sign In</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div> 
    )
}