import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Routes from './Routes';

const App = () => (
  <>
    <Routes />
    <ToastContainer />
  </>
);

export default App;
