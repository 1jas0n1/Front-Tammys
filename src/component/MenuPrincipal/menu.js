import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faBoxesPacking, faArrowRight,faCalendarCheck,faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { MdOutlineSettings } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBoxes } from "react-icons/bs";
import './menu.css';
import { IoStatsChartSharp } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import MyNavbar from '../Navbar';
import Footer from '../footer/footer';
const Menu = () => {
 
  return (
  <div>    
    <MyNavbar></MyNavbar>
    <div className="container">
    
      <div className="row">
        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"><FontAwesomeIcon icon={faSackDollar} /></div>
            <div className="card-title">Ventas</div>
            <div className="card-description"></div>
            <ButtonGroup role="group" aria-label="Button group with nested dropdown"  >
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className='custom-btn' style={{width:'225px',height:'30px',padding:'0'}}>
          Opciones
        </Dropdown.Toggle>
        <Dropdown.Menu style={{backgroundColor:'#4a4a4a',color:'white'}}>
          <Dropdown.Item style={{color:'white'}} href="/ventas-art">Realizar Venta</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/historial-venta">Historial Ventas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"><FontAwesomeIcon icon={faBoxesPacking} /></div>
            <div className="card-title">Ingresos</div>
            <div className="card-description"> </div>
            <ButtonGroup role="group" aria-label="Button group with nested dropdown"  >
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className="custom-btn" style={{width:'225px',height:'30px',padding:'0'}}>
          Opciones
        </Dropdown.Toggle>
        <Dropdown.Menu style={{backgroundColor:'#4a4a4a',color:'white'}}>
          <Dropdown.Item style={{color:'white'}} href="/ingresos-art">Realizar Compra</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/historial-ingreso">Historial Compras</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"><BsBoxes /> </div>
            <div className="card-title">Mercancia</div>
            <div className="card-description"> </div>
            <ButtonGroup role="group" aria-label="Button group with nested dropdown"  >
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic" className='custom-btn' style={{width:'225px',height:'30px',padding:'0'}}>
          Opciones
        </Dropdown.Toggle>
        <Dropdown.Menu style={{backgroundColor:'#4a4a4a',color:'white'}}>
          <Dropdown.Item style={{color:'white'}} href="/mercancia">Administrar Mercancia</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/mercancia-dañada">Mercancia Defectuosa</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"> <MdOutlineSettings style={{fontSize:'60px',padding:'0'}} />
          </div>
            <div className="card-title">Configuracion</div>
            <div className="card-description"></div>
            <NavLink to="/configuracion" className="card-link btn btn-primary custom-btn">
              Ir a Configuracion <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"> <FontAwesomeIcon icon={faCalendarCheck} /> </div>
            <div className="card-title"> Catalogos </div>
            <div className="card-description"></div>
            <ButtonGroup role="group" aria-label="Button group with nested dropdown"  >
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle  className='custom-btn'  style={{width:'225px',height:'30px',padding:'0'}}>
          Opciones
        </Dropdown.Toggle>
        <Dropdown.Menu style={{backgroundColor:'#4a4a4a',color:'white'}}>
          <Dropdown.Item style={{color:'white'}} href="/colores">Colores</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/marcas">Marcas</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/materiales">Materiales</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/tallas">Tallas</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/disenos">Diseños</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/estilos">Estilos</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/proveedores">Proveedores</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/categorias">Categorías</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/articulos">Articulos</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/bodegas">Bodegas</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/servicios">Servicios</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"> <FontAwesomeIcon icon={faAddressCard} /> </div>
            <div className="card-title"> Usuarios </div>
            <div className="card-description"></div>
            <ButtonGroup role="group" aria-label="Button group with nested dropdown"  >
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className='custom-btn' style={{width:'225px',height:'30px',padding:'0'}}>
          Opciones
        </Dropdown.Toggle>
        <Dropdown.Menu style={{backgroundColor:'#4a4a4a',color:'white'}}>
          <Dropdown.Item style={{color:'white'}} href="/create-user">Crear Usuario</Dropdown.Item>
          <Dropdown.Item style={{color:'white'}} href="/list-user">Editar Usuario</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center ">
            <div className="card-icon"> <IoStatsChartSharp  style={{fontSize:60,margin:0}}/>
          </div>
            <div className="card-title">Reportes</div>
            <div className="card-description"></div>
            <NavLink to="/reportes" className="card-link btn btn-primary custom-btn">
              Ir a Reportes  <FontAwesomeIcon icon={faArrowRight} />
            </NavLink>
          </div>
        </div>

        <div className="col-md-3">
  <div className="card custom-card text-center">
    <div className="card-icon"> 
      <HiOutlineClipboardDocumentList style={{ fontSize: 60, margin: 0 }} />
    </div>
    <div className="card-title">Servicios</div>
    <div className="card-description"></div>

    {/* Dropdown con opciones para Servicios */}
    <ButtonGroup role="group" aria-label="Button group with nested dropdown">
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle className="custom-btn" style={{ width: '225px', height: '30px', padding: '0' }}>
          Opciones
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: '#4a4a4a', color: 'white' }}>
          <Dropdown.Item style={{ color: 'white' }} href="/HistorialServicio">Historial Servicio</Dropdown.Item>
          <Dropdown.Item style={{ color: 'white' }} href="/FactServicios">Facturar Servicio </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </div>
</div>

        
      </div> 
    </div>  
    <Footer></Footer>
    </div>
  );
};

export default Menu;
