import ToDoList from './pages/ToDoList';
import { AppWrapper, GlobalStyles, MainWrapper } from './style/globalStyle';

function App() {
  return (
    <>
      <AppWrapper>
        {/* nav */}
        <MainWrapper>
          <ToDoList />
        </MainWrapper>
      </AppWrapper>
      <GlobalStyles />
    </>
  );
}

export default App;
