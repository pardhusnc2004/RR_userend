import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Studentlist } from './components/student-list';
import { Nav } from './components/navbar';
function App() {
  return (
    <div className="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Studentlist />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
