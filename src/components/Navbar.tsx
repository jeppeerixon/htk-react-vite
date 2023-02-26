import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
          <li>
            <span className="material-symbols-rounded">
            fitness_center
            </span>
            <Link to="/">Traning</Link>
          </li>
          <li>
            <span className="material-symbols-rounded">
            settings
            </span>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <span className="material-symbols-rounded">
            calculate
            </span>
            <Link to="/tools">Tools</Link>
          </li>
        </ul>
    </nav>
    </>
  )
};

export default Navbar;