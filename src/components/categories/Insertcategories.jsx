import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { Button } from "react-bootstrap";

const Insertcategories = () => {
  let navigate = useNavigate();
  const [nomcategorie, setNomcategorie] = useState('');
  const [imagecategorie, setImagecategorie] = useState('');

  const handelesubmit = async (e) => {
    e.preventDefault();
    const categorie = {
      nomcategorie: nomcategorie,
      imagecategorie: imagecategorie
    }
    await axios.post("https://ecommerce-mern-eosin.vercel.app/api/categorie", categorie);
    navigate("/categories");
  }

  return (
    <div className="container">
      <div className='form border rounded p-4 mt-4 shadow '>
        <Form onSubmit={handelesubmit}>
          <Form.Group>
            <Form.Label>Nom de la catégorie</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="nomcategorie"
              value={nomcategorie}
              onChange={(e) => setNomcategorie(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Image de la catégorie</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="imagecategorie"
              value={imagecategorie}
              onChange={(e) => setImagecategorie(e.target.value)}
            />
          </Form.Group>

          <Button variant="warning" type="submit">Submit <i className="fa-regular fa-floppy-disk"></i></Button>
          <Link className="btn btn-outline-danger mx-2" to="/articles">Cancel</Link>
        </Form>
      </div>
    </div>
  )
}

export default Insertcategories;
