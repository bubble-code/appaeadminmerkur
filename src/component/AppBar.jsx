import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { Navbar, Nav, Dropdown } from 'rsuite';
import '../styles/login.css';



const AppBar = () => {

  const user = useSelector(selectUser);
  return (
    <div>
      <Navbar style={{ backgroundColor: '#59AFFF' }} className={'brand'}>
        <Navbar.Brand  >
          <Link to="/" style={{ color: 'white' }} >
            MERKUR SLOTS
          </Link>

        </Navbar.Brand>
        <Nav>
          {/* ------------------------------------- */}
          {/* <Nav.Item>Home</Nav.Item> */}
          {/* =================================== */}
          {/* Salones */}
          {/* <Dropdown title="Salones">
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
          </Dropdown> */}
          {/* ============================================ */}
          {/* <Nav.Item>
            <Link to="/salonesCom" >
              Salones
            </Link>
          </Nav.Item> */}
          {/* ============================================ */}

          {/* ======================================================== */}
          {/* Tecnicos */}
          {/* <Dropdown title="Tecnicos">
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
          </Dropdown> */}
          {/* ============================================== */}
          {/* ================================================= */}
          {/* Averias */}
          {user.loggedin ? <Dropdown title="Averias">
            <Dropdown.Item>
              <Link to="/addAveria">
                Abrir nueva Averia
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/addAveria">
                Listado de Averias
              </Link>
            </Dropdown.Item>
          </Dropdown> : <></>}
          {user.username === "Admin" ? <Dropdown title="Ruletas">
            <Dropdown.Item>
              <Link to="/ruleta">
                Opciones de Rultas
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/addAveria">
                Listado de Rultas
              </Link>
            </Dropdown.Item>
          </Dropdown> : <></>}



          {/* <Dropdown title="Averias">
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
          </Dropdown> */}


          {/* ============================================== */}
          {/* ================================================= */}
          {/* Avisos */}
          {/* <Dropdown title="Avisos">
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
          </Dropdown> */}
          {/* =============================================== */}
          {/* =============================================== */}
          {/* CheckList */}
          {/* <Nav.Item>
            <Link to="/checklist" >
              Tareas
            </Link>
          </Nav.Item> */}
          {/* Objetivos */}
          {/* <Dropdown title="Objetivos">
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
          </Dropdown> */}
          {/* =============================================== */}
        </Nav>
        {/* <Nav pullRight>
          <Nav.Item >Settings</Nav.Item>
        </Nav> */}
      </Navbar>
      <Outlet />
    </div>)
}
export default AppBar;