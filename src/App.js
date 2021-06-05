import logo from './logo.svg';
import './App.css';
import Sidebar from  './components/sidebar/Sidebar'
import Middle from  './components/middle/Middle'
import Widgets from  './components/widgets/Widgets'
import styled from 'styled-components';

const AppContainer = styled.div `
  width: 1300px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;  

const MainContainer = styled.div `
  display: flex;
  overflow-y: auto;
  width: 100%;
`;

function App() {
  return (
    <AppContainer id="App">
        {/* sidebar navigation */}
        <Sidebar/>
        <MainContainer>
          {/* search bar and main content */}
          <Middle />
          <Widgets />
        </MainContainer>
    </AppContainer>
  );
}

export default App;
