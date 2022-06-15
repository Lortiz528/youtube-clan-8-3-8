import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav> 
        <div>
        <Link to="/">
          <h3>Home</h3>
          </Link>
    
  <Link to= "/about">
          <h3>About</h3>
          </Link>
        </div>
      </nav>
    );
  };