import React from 'react';
import MenuIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { clearSearch } = this.props;
    return (
      <header>
         <MenuIcon />
        <Link to="/" onClick={clearSearch}>
          <img className='logo'
            src="https://1000logos.net/wp-content/uploads/2017/05/YouTube-Logo-2015.jpg"
            alt="youtube"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
