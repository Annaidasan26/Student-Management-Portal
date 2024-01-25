import logo from "./logo.svg";
import "./App.css";
import ListofStudent from "./Components/ListofStudent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddComponent from "./Components/AddComponent";
import UpdateComponent from "./Components/UpdateComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" Component={ListofStudent}></Route>
          <Route path="/add-student" Component={AddComponent} ></Route>
          <Route path="/update-student" Component={UpdateComponent} ></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
