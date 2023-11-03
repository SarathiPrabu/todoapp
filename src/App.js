import './App.css';
import Todos from "./components/Todos";
import {RecoilRoot} from "recoil";

function App() {
  return (
      <RecoilRoot>
          <div className="App">
              <h1>To Do Application</h1>
              <Todos/>
          </div>
      </RecoilRoot>

  );
}

export default App;
