
import './App.css';
import ChatBot from './components/ChatBot';
import AppRoutes from './routers/App.router';

function App() {
  return (
    <div className="App">
      <AppRoutes/>
      <ChatBot/>
    </div>
     
  );
}

export default App;
