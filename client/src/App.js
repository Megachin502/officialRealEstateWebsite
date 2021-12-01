//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar.component'
import Listings from './components/Listings.component'
import EditListing from './components/EditListing.component'
import AgentPanel from './components/AgentPanel.component'
import RequirementsChecklist from './components/RequirementsChecklist.component'

function App() {
  return (
    < HashRouter >
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Listings />} />
          <Route path='/edit/:id' element={<EditListing />} />
          <Route path='/agentpanel' element={<AgentPanel />} />
          <Route path='/requirementschecklist' element={<RequirementsChecklist />} />
        </Routes>
      </div>
    </HashRouter >
  );
}

export default App;
