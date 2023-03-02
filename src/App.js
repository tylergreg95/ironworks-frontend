import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciseLibraryDisplay from './ExerciseLibraryDisplay';
import Home from "./Home";
import Navbar from "./Navbar";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<ExerciseLibraryDisplay />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  )
}

export default App;
