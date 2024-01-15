import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';
import sprite from '../../img/svg/sprite-icon.svg';
import css from '../../components/sidebar/css/sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.boxSidebar}>
        <Link to="/" className={css.boxSidebar__logo}>
          <svg width="37" height="37" >
            <use xlinkHref={`${sprite}#hexagon-for-Dashboard`} />
          </svg>
            <div className={css.boxSidebar__logo__name}>
                <p className={css.boxSidebar__logo__name__text} >Dashboard</p>
                <p className={css.boxSidebar__logo__name__version}>v.01</p>
            </div>
        </Link>
      <Navigation />
    </div>
  );
};
export default Sidebar;
