import { NavLink } from 'react-router-dom';
import css from '../../components/navigation/css/navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.ul}>
        <li>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Dashboard</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Product</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Customers</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Income</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Promote</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Help</button>
          </NavLink>
        </li>      
      </ul>
    </nav>
  );
};
export default Navigation;