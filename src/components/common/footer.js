import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>{year}</p>
      <Link to={'/about'}><h4>About</h4></Link>
    </footer>
  );
}
