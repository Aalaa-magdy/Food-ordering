
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';
import Login from './components/Login';

const App = () => {
  return (
    <div>
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/success" element={<Success />} />
              <Route path="/*" element={<Error />} />
            </Routes>
 
       </BrowserRouter>
    </div>
  )
}

export default App