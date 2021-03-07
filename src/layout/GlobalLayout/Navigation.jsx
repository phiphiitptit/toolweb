import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';



function Navigation() {
    return(
        <>
        <Nav className="justify-content-center" >
        <Nav.Item>
  
          <Link to="/">Home</Link>
  
        </Nav.Item>
        <Nav.Item>
  
          <Link to="/about" >Link</Link>
  
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" >Link</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" >Link</Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">Or right-aligned</p>
      </>
    );
};

export default Navigation;