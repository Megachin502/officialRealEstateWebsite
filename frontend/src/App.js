//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.component'
import Listings from './components/Listings.component'
import EditListing from './components/EditListing.component'
import AgentPanel from './components/AgentPanel.component'


function App() {
  return (
    <BrowserRouter>
      <div className="App App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Listings />} />
          <Route path='/edit:id' element={<EditListing />} />
          <Route path='/agentpanel' element={<AgentPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
