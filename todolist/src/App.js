import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import TaskList from './pages/TaskList';
import AddNewTask from './pages/AddNewTask';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList/>}/>
          <Route path="/task/add" element={<AddNewTask/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
