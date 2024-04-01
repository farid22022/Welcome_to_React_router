import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                <NavLink to="/users">Users</NavLink>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
                {/* <Link to="/users">Users</Link> */}
            </nav>
        </div>
    );
};

export default Header;