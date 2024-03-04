import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Weather Dashboard
      </Link>
      <ul>
        <li>
          <a href='/Forecast'>Forecast</a>
        </li>
        <li>
          <a href='/Alerts'>Alerts</a>
        </li>
        <li>
          <a href='/Data'>Data</a>
        </li>
        <li>
          <a href='News'>News</a>
        </li>
      </ul>
      <ul>
        <CustomLink to='/Profile'>Profile</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li classname={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
