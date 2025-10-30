import './App.css'
import ProjectAdmin from './pages/create';
// import AdminPage from './pages/homepage'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      {/* <AdminPage /> */}
      <Routes>
        <Route path="/create" element={<ProjectAdmin />} />

      </Routes>

      <AdminPage/>
      <DemoDetail/>
    </>
  );
}

export default App
