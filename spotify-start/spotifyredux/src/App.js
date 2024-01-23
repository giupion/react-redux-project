
import './App.css';
import Barrasuperiore from './components/Barrasuperiore';
import { Row, Col, Container } from 'react-bootstrap'
import SidebarVertical from './components/SidebarVertical'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AlbumPage from './components/AlbumPage';

function App() {
  return (
    <>
   
    <Container fluid>
    <Row>
    <Col sm={2}>
            <SidebarVertical />
          </Col>
     <Col sm={10} className='col-12 col-md-9 offset-md-3 mainPage'>
    <Barrasuperiore/>
<AlbumPage/>
    </Col>
    </Row>
    </Container>
    
    </>
  );
}

export default App;
