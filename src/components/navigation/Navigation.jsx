import { NavLink } from 'react-router-dom';
import css from '../../components/navigation/css/navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.ul}>
        <li>
          <NavLink to="/other" className={css.navLink}>
            <button type="button">Dashboard</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.navLink}>
            <button type="button">Product</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={css.navLink}>
            <button type="button">Customers</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.navLink}>
            <button type="button">Income</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.navLink}>
            <button type="button">Promote</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.navLink}>
            <button type="button">Help</button>
          </NavLink>
        </li>      
      </ul>
    </nav>
  );
};
export default Navigation;