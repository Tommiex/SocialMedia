import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'blue',
  fontWeight: 'bold'
};

function MyComponent() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MyComponent