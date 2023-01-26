import './App.css';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Header from './components/Header';

function App() {
  return (
    <RecoilRoot>
      <ScrollRestoration />
      <Header />
      <Outlet />
    </RecoilRoot>
  );
}

export default App;
