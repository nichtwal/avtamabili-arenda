import Home from "./Pages/Home";
import About from "./Pages/About";
import Autopark from "./Pages/Autopark";
import Contacts from "./Pages/Contacts";
import Security from "./Pages/Security";
import Riding from "./Pages/Riding";
import NotFound from "./Pages/NotFound";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import Layout from "./components/Layout";
import Conditions from "./Pages/Conditions";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="autopark" element={<Autopark />} />
            <Route path="riding" element={<Riding />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="security" element={<Security />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
