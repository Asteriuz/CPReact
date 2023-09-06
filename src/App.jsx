import './App.css';
import { Outlet } from 'react-router';
import Nav from './Components/nav';
import Footer from './Components/footer';
import './footer.css'

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
