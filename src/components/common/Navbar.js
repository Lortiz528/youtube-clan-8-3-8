import Header from './header';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Header />
      <Link to="/">
        <h3>Home</h3>
      </Link>
    </nav>
  );
}
