import './App.css';
import { Outlet } from 'react-router';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
