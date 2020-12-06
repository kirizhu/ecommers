import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/' component={HomePage} />
    </div>
  );
};

export default App;
