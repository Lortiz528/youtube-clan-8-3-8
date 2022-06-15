import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <p>Youtube</p>
      <link to={'/'}>
        <h3>Home</h3>
      </link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default Navbar;
