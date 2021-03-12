
import GlobalStyles from './styles/globalStyles';
import {Container} from 'react-bootstrap';
import DoctorPage from './pages/DoctorPage';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Container className="App" fluid>
      <DoctorPage/>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles/>
    </Container>
  );
}

export default App;
