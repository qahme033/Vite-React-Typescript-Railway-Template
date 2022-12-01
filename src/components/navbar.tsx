import { useEffect, useState, Fragment } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from "./navbarBrand"
import Button from 'react-bootstrap/Button';
import {NavBarType, NavBarItemType, MenuItemType} from '../schemas/schemas'


const gen_custom_div = (name: string, icon_name: string) =>
  <div style={{ display: "inline-block" }}><i className={icon_name}></i> {name}</div>;

const gen_custom_dropdown = (item: NavBarItemType, shown_name: string, setShow: React.Dispatch<React.SetStateAction<string>>) =>
  <NavDropdown show={shown_name == item.translations[0]?.name} onMouseEnter={() => setShow(item.translations[0]?.name)} onMouseLeave={() => setShow('')} title={gen_custom_div(item.translations[0]?.name, item.icon_name)} >
    {item.drop_down_menu.map(item => <NavDropdown.Item eventKey="4.1">{gen_custom_div(item.translations[0]?.name, item.icon_name)}</NavDropdown.Item>)}
  </NavDropdown>

const gen_custom_button = (item: NavBarItemType) => <Button variant="light">{gen_custom_div(item.translations[0]?.name, item.icon_name)}</Button>

function NavBar(props:{data:NavBarType}) {
  const [show, setShow] = useState('');
  return (
    <>
      <br />
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <NavbarBrand {...props!.data.translations[0]}/>
          </Navbar.Brand>
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            {props.data?.menu_items.map((item: NavBarItemType) => (item.drop_down_menu.length > 0 ? gen_custom_dropdown(item, show, setShow) : gen_custom_button(item)))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;