import logo from './logo.svg';
import './App.css';
import RACITable from './Components/RACITable'
import Login from './Components/Login'
import TeamMemberList from './Components/TeamMemberList';

function App() {
  return (
    <div className="App">
        <h1> Hi I'm 🍖 </h1>
        <RACITable/>
        <Login/>
        <TeamMemberList/>
    </div>
  );
}

export default App;
