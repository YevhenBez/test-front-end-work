import { NavLink } from 'react-router-dom';
import css from '../../components/navigation/css/navigation.module.css';
import sprite from '../../img/svg/sprite-icon.svg';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.ul}>
        <li className={css.ul__li}>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>
              <svg width="24" height="24" className={css.ul__navLink__btn__bgnSvg}>
                <use xlinkHref={`${sprite}#key-square`} />
              </svg>
              Dashboard
            </button>
          </NavLink>
        </li>
        <li className={css.ul__li}>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>
              <svg width="24" height="24" className={css.ul__navLink__btn__bgnSvg}>
                <use xlinkHref={`${sprite}#volumetric-square`} />
              </svg>
              Product
            </button>
          </NavLink>
        </li>
        <li className={css.ul__li}>
          <NavLink to="/" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Customers</button>
          </NavLink>
        </li>
        <li className={css.ul__li}>
          <NavLink to="/other" className={css.ul__navLink}>
            <button type="button" className={css.ul__navLink__btn}>Income</button>
          </NavLink>
        </li>
        <li className={css.ul__li}>
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