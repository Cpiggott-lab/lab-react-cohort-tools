import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, StudentDetailsPage, UserProfilePage } from "./pages";
import Navbar from "./components/Navbar";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/students/:studentId", element: <StudentDetailsPage /> },
  { path: "/profile", element: <UserProfilePage /> },
];

function App() {
  return (
    <div className="App relative z-20 pt-20">
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
