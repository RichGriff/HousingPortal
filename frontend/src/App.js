import './App.scss';
import Main from './components/Main';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
        <Main />
    </UserProvider>
  );
}

export default App;
