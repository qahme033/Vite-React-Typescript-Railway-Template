import {useEffect, useState, Fragment } from 'react';
import axios, {AxiosResponse} from 'axios';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from "./navbarBrand"
import Button from 'react-bootstrap/Button';

// const items = ['first', 'second', 'third']

// const itemsO = [
//   {"name": 'Diiwaanka', 'icon_name': 'bi bi-folder', 'list':[{"name":'Bogga Raadinta', "icon_name":  'bi bi-search'}, {"name":'Diiwaangeli Meherad', "icon_name":  'bi bi-plus'}, {"name":'Diiwaanka Meheradaha', "icon_name":  'bi bi-book'}]}, 
//   {"name": 'Isticmaale','icon_name': 'bi bi-person', 'list':[{"name":'Bogga Raadinta', "icon_name":  'bi bi-folder'}, {"name":'second', "icon_name":  'bi bi-folder'}, {"name":'third', "icon_name":  'bi bi-folder'}]}, 
//   {"name": 'Maxaa Kele', 'icon_name': 'bi bi-plugin', 'list':[{"name":'first', "icon_name":  'bi bi-folder'}, {"name":'second', "icon_name":  'bi bi-folder'}, {"name":'third', "icon_name":  'bi bi-folder'}]}, 
//   {"name": 'Xidhiidh', 'icon_name': 'bi bi-envelope', 'list':[{"name":'first', "icon_name":  'bi bi-folder'}, {"name":'second', "icon_name":  'bi bi-folder'}, {"name":'third', "icon_name":  'bi bi-folder'}]}, 
// ]

const gen_custom_div = (name: string, icon_name: string) =>
  <div style={{display: "inline-block"}}><i className={icon_name}></i> {name}</div>;



interface MenuItem {
  icon_name: string;
  name: string;
  id: number;
  parent_id: string;
  sort: any;
  date_created: string;
  date_updated: string;
  drop_down_menu_list: MenuItem[];
  has_icon: boolean;
}

const showDropdown = (show:boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>) => setShow(!show)
const hideDropdown = (setShow: React.Dispatch<React.SetStateAction<boolean>>) => {setShow(false)}
const gen_custom_dropdown = (item: MenuItem, show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>) => 
  <NavDropdown    show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} title={gen_custom_div(item.name, item.icon_name)} > 
    {item.drop_down_menu_list.map(item =>  <NavDropdown.Item eventKey="4.1">{gen_custom_div(item.name, item.icon_name)}</NavDropdown.Item>)}
  </NavDropdown>

const gen_custom_button = (item: MenuItem) => <Button variant="light">{gen_custom_div(item.name, item.icon_name)}</Button>

function NavBar() {
  const [data, dispatchData] = useState([] as any[]);
  const [show, setShow] = useState(false);

  const getData = async () => {
    const { data } = await axios.get('https://bff-production.up.railway.app/get_navbar_menu_items');
    dispatchData(data);
    console.log(data)
  };

    useEffect(() => {
      getData()
  }, []);   
  
  return ( 
    <> 
      <br /> 
      <Navbar bg="light" variant="light"> 
        <Container> 
            <Navbar.Brand>
              <NavbarBrand/>
            </Navbar.Brand>
            <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
              {data.map((item: MenuItem) => (item.drop_down_menu_list.length > 0 ? gen_custom_dropdown(item): gen_custom_button(item)))} 
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;