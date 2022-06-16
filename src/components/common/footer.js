export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>  {year}</p>
    </footer>
  );
}
