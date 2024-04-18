import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success text-white d-flex justify-content-center gap-4">
      <Link to="/" className="text-white"> Home </Link> | <Link to="/favoritos" className="text-white"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
