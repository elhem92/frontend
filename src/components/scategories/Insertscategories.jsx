import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap"
import { Link ,useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
const Insertscategories = () => {


  let navigate = useNavigate();
  const [nomscategorie, setNomscategorie] = useState('');
  const [imagescategorie, setImagescategorie] = useState('');
  const [categorieID,setCategorieID]=useState('');

  const[categorie,setCategorie]=useState([])

  useEffect(() => {
    getcategories()
    }, [])


    const getcategories=async()=>{
      try {
      const res=await axios.get("https://ecommerce-mern-eosin.vercel.app/api/categorie")
      setCategorie(res.data)
      } catch (error) {
      console.log(error)
      }
      }


  const handelesubmit = async (e) => {
    e.preventDefault();
    const scategorie = {
      nomscategorie: nomscategorie,
      imagescategorie: imagescategorie
    }
    await axios.post("https://ecommerce-mern-eosin.vercel.app/api/scategorie", scategorie);
    navigate("/scategories");
  }
  return (
    <div className="container">
    <div className='form border rounded p-4 mt-4 shadow '>
      <Form onSubmit={handelesubmit}>
        <Form.Group>
          <Form.Label>Nom de la scatégorie</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="nomscategorie"
            value={nomscategorie}
            onChange={(e) => setNomscategorie(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Image de la scatégorie</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="imagescategorie"
            value={imagescategorie}
            onChange={(e) => setImagescategorie(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
        <Form.Label>Catégorie</Form.Label>
        <Form.Control
        as="select"
        type="select"
        value={categorieID}
        onChange={(e)=>setCategorieID(e.target.value)}
        >
        <option> choisir une Scategorie</option>
        {categorie.map((cat,index)=>
            <option key={index} value={cat._id}>{cat.nomcategorie}</option>
        )}


        </Form.Control>
        </Form.Group>

        <Button variant="warning" type="submit">Submit <i className="fa-regular fa-floppy-disk"></i></Button>
        <Link className="btn btn-outline-danger mx-2" to="/articles">Cancel</Link>
      </Form>
    </div>
    </div>
  )
}

export default Insertscategories
