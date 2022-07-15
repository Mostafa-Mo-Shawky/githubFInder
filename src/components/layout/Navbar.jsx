import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 bg-neutral shadow-lg text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-1 ">
          <div className="flex justify-between px-2 mx-2">
            <div>
              <FaGithub className="inline pr-2 text-3xl" />
              <Link to="/" className="text-lg align-middle">
                {title}
              </Link>
            </div>
            <div>
              <Link
                to="/"
                className="capitalize btn bnt-ghost btn-sm rounded-btn"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="capitalize btn bnt-ghost btn-sm rounded-btn"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.prototype = {
  title: PropTypes.string,
};

export default Navbar;
