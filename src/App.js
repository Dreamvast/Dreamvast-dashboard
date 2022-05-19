import './App.css';
import { DashboardPage, MenuPage } from './pages'
import { LandingPage } from './pages/LandingPage'
import { Routes, Route, useLocation } from 'react-router-dom'

const withLocation = Component => props => {
    const location = useLocation();
  
    return <Component {...props} location={location} />;
  };

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<LandingPage />}/>
      <Route path="/menu" exact={true} element={<MenuPage />}/>
      <Route path="/dashboard/:id" exact={true} element={<DashboardPage />}/>
    </Routes>
  );
}

export default withLocation(App);
