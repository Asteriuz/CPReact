import './App.css';
import { Outlet } from 'react-router';
import Nav from './Components/nav';
import Footer from './Components/footer';

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
