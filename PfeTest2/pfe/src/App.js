import NavBarCustom from "./componentes/navbar";
import Login from "./componentes/login";
import { Routes, Route } from "react-router-dom";
import Info from "./componentes/Info";
import About from "./componentes/About";
import Landing from './componentes/landing'
import Register from './componentes/register'
import Dashboard from './componentes/dashboard'
function App() {
  return (
    <div>
    <NavBarCustom></NavBarCustom>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="login" element={<Login nombre="mi login" />} />
        <Route path="about" element={<About />} />
        <Route path="info" element={<Info />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
   
    </div>
    
  );
}
export default App;
