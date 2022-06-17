import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
     <Link to={'/about'}><h3>About</h3></Link>
      <p>  {year}</p>
      
    </footer>
  );
}
