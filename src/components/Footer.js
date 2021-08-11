import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="row w-100">
      <div className="col-4">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="col-4">Second Section</div>
      <div className="col-4">Third Section</div>
    </footer>
  );
};

export default Footer;
