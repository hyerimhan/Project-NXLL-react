import './App.css';
import { ScrollRestoration, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  );
}

export default App;
