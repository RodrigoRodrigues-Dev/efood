import { Outlet } from 'react-router-dom';
import { Reset } from './styles/GlobalStyles';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Reset />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
