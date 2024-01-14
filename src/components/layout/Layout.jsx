import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import css from '../../components/layout/css/layout.module.css';

const Layout = () => {
  return (
    <div className={css.layoutPage}>
       
              <Sidebar />
          <div>
                  <header >
                      <p>Этот абзац тестовый сюда просто вставлю содержимое header </p>
                  </header>
          
       
      <Suspense>
        <Outlet />
      </Suspense>
          </div>
    </div>
  );
};
export default Layout;