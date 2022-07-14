import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Main from './Main';

function App() {
  

  return (
    
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </main>
    
  )
}

export default App;