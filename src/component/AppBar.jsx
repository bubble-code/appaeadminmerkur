import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'rsuite'



const AppBar = () => {

  return (
    <div>
      <Navbar style={{backgroundColor:'#59AFFF'}}>
        <Navbar.Brand >
          <Link to="/" >
            MEKUR SLOTS
          </Link>

        </Navbar.Brand>
        <Nav>
          <Nav.Item>Home</Nav.Item>
          {/* Salones */}
          <Dropdown title="Salones">
            <Dropdown.Item>
              <Link to="/salones/Cantabria">
                Cantabria
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/salones/Madrid">
                Madrid
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/salones/Mallorca">
                Mallorca
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/salones/Navarra">
                Navarra
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {/* Tecnicos */}
          <Dropdown title="Tecnicos">
            <Dropdown.Item>
              <Link to="/tecnicos/Cantabria">
                Cantabria
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/tecnicos/Madrid">
                Madrid
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/tecnicos/Mallorca">
                Mallorca
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/tecnicos/Navarra">
                Navarra
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {/* Averias */}
          <Dropdown title="Averias">
            <Dropdown.Item>
              <Link to="/averias/Cantabria">
                Cantabria
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/averias/Madrid">
                Madrid
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/averias/Mallorca">
                Mallorca
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/averias/Navarra">
                Navarra
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {/* Avisos */}
          <Dropdown title="Avisos">
            <Dropdown.Item>
              <Link to="/avisos/Cantabria">
                Cantabria
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/avisos/Madrid">
                Madrid
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/avisos/Mallorca">
                Mallorca
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/avisos/Navarra">
                Navarra
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {/* CheckList */}
          <Dropdown title="CheckList">
            <Dropdown.Item>
              <Link to="/checklist/Cantabria">
                Cantabria
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/checklist/Madrid">
                Madrid
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/checklist/Mallorca">
                Mallorca
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/checklist/Navarra">
                Navarra
              </Link>
            </Dropdown.Item>
          </Dropdown>
          {/* Objetivos */}
          <Dropdown title="Objetivos">
            <Dropdown.Item>
              <Link to="/objetivos/Cantabria">
                Cantabria
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/objetivos/Madrid">
                Madrid
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/objetivos/Mallorca">
                Mallorca
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/objetivos/Navarra">
                Navarra
              </Link>
            </Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item >Settings</Nav.Item>
        </Nav>
      </Navbar>
      <Outlet />
    </div>)
}
export default AppBar;