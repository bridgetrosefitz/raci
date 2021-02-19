import logo from './logo.svg';
import './App.css';
import RACITable from './Components/RACITable';
import Login from './Components/Login';
import TeamMemberList from './Components/TeamMemberList';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
    <Container>
        <RACITable/>
        <Login/>
        <TeamMemberList/>
    </Container>
    </div>
  );
}

export default App;
