import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';
import sprite from '../../img/svg/sprite-icon.svg';
import css from '../../components/sidebar/css/sidebar.module.css';

const Sidebar = () => {
  return (
    <div >
        <Link to="/" className={css.logo}>
          <svg width="37" height="37" >
            <use xlinkHref={`${sprite}#hexagon-for-Dashboard`} />
          </svg>
            <div className={css.logo__name}>
                <p className={css.logo__name__text} >Dashboard</p>
                <p className={css.logo__name__version}>v.01</p>
            </div>
        </Link>
      <Navigation />
    </div>
  );
};
export default Sidebar;
