import React from 'react';
import MenuIcon from '@mui/icons-material/MenuSharp';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { clearSearch } = this.props;
    return (
      <header>
         <MenuIcon className='other-icons' />
        <Link to="/" onClick={clearSearch}>
          <img className='logo'
            src="https://thumbs.gfycat.com/PhysicalAlertBeaver-max-1mb.gif"
            alt="youtube"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
