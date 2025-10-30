import './App.css'
<<<<<<< HEAD
import ProjectAdmin from './pages/create';
// import AdminPage from './pages/homepage'
import { Route, Routes } from "react-router-dom";
=======
import DemoDetail from './pages/afterSearch'
import AdminPage from './pages/homepage'
>>>>>>> main

function App() {

  return (
    <>
<<<<<<< HEAD
      {/* <AdminPage /> */}
      <Routes>
        <Route path="/create" element={<ProjectAdmin />} />

      </Routes>

=======
      <AdminPage/>
      <DemoDetail/>
>>>>>>> main
    </>
  );
}

export default App
