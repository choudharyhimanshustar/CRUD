import logo from './logo.svg';
import './App.css';
import Create from './Create';
import Get from './Get'
import Update from './Update'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Get />} />
        <Route path="/post" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
