import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Archive from './pages/Archive';
import AudioToText from './pages/AudioToText';
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/archive' Component={Archive} />
          <Route path='/audio-to-text' Component={AudioToText} />
        </Routes>
    </Router>
  );
}

export default App;
