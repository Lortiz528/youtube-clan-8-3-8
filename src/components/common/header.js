import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/MenuSharp'
export default function Header() {
      return (
        <header>
        <MenuIcon/>
        <Link to="/">
        <img  src='https://1000logos.net/wp-content/uploads/2017/05/YouTube-Logo-2015.jpg' alt="youtube" />
        </Link>
        </header>
      );
    };