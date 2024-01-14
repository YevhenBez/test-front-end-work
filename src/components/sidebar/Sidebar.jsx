import Navigation from '../../components/navigation';
import { Link } from 'react-router-dom';
import sprite from '../../img/svg/sprite-icon.svg';

const Sidebar = () => {
  return (
    <div >
        <Link to="/" >
          <svg width="37" height="37" >
            <use xlinkHref={`${sprite}#hexagon-for-Dashboard`} />
          </svg>
            <p >Dashboard</p>
            <p>v.01</p>
        </Link>
      <Navigation />
    </div>
  );
};
export default Sidebar;
