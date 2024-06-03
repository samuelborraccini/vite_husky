import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Profile
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
