import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import arrayofpaths from './routes';


const routerConfig = createBrowserRouter(arrayofpaths)

function App() {
  return (
    <RouterProvider router={routerConfig}/>
  );
}

export default App;
