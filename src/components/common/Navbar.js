import Header from './header';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <Header/>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
        
      </nav>
    </div>
  );
}
