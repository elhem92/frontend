import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Listarticle from "./components/articles/Listarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Editarticle from "./components/articles/Editarticle";
import Viewarticle from "./components/articles/Viewarticle";
import Insertcategories from "./components/categories/Insertcategories";
import Editcategories from "./components/categories/Editcategories";
import Viewcategories from "./components/categories/Viewcategories";
import Listcategories from "./components/categories/Listcategories";
import Listscategories from "./components/scategories/Listscategories";
import Insertscategories from "./components/scategories/Insertscategories";
import Editscategories from "./components/scategories/Editscategories";
import Viewscategories from "./components/scategories/Viewscategories";
import Menu from "./components/Menu";
import Listarticlecard from "./components/articles/Listarticlecard";
function App() {

  return (
    <>
     <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticle/>}/>
        <Route path="/articles/add" element={<Insertarticle/>}/>
        <Route path="/article/edit/:id" element={<Editarticle/>}/>
        <Route path="/article/view/:id" element={<Viewarticle/>}/>

        <Route path="/" element={<Listarticlecard/>}/>

        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/categories/add" element={<Insertcategories/>}/>
        <Route path="/categories/edit/:id" element={<Editcategories/>}/>
        <Route path="/categories/view/:id" element={<Viewcategories/>}/>

        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/scategories/add" element={<Insertscategories/>}/>
        <Route path="/scategories/edit/:id" element={<Editscategories/>}/>
        <Route path="/scategories/view/:id" element={<Viewscategories/>}/>
        
      </Routes>
     </Router>
    </>
  )
}

export default App
