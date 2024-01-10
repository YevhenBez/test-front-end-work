import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const Customers = lazy(() => import('../pages/customers'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Customers />}/>
      </Routes>
    </div>
  );
};

export default App;
