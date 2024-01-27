import {RouterProvider} from "react-router-dom";
import "antd/dist/antd.min"
import root from "./router/root";
import './App.scss'



function App() {
  return (
      <RouterProvider router={root}/>
  );
}


export default App;
