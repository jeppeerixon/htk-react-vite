import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Traning from "./pages/Traning/Traning";
import Settings from "./pages/Settings/Settings";
import Tools from "./pages/Tools/Tools";
import NoPage from "./pages/NoPage/NoPage";
import './App.scss';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Traning />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tools" element={<Tools />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
