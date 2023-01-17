import "./App.css";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
