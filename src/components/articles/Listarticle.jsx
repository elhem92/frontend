import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";


const Listarticle = () => {

    const [article, setArticle]=useState([])

    useEffect(()=>{
        getarticles()
    },[])
    const getarticles=async()=>{
            await axios.get("https://ecommerce-mern-eosin.vercel.app/api/article").then(res=>{
                setArticle(res.data)
                console.log(res.data)
            })
            .catch(error=>{ console.log(error)
            })
        }

    const handeleDelete=async(id)=>{
            if (window.confirm("etes vous sure de supprimer ce produit")){
            await axios.delete(`https://ecommerce-mern-eosin.vercel.app/api/article/${id}`)
            
                getarticles()
         
            .catch(error=>{
                console.log(error)
            })
        }
    }
        
  return (
    <div>

    <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <div className="container-fluid">

            <Link className="btn btn-outline-light" to="/articles/add">
                Ajouter article
            </Link>
            </div>
        </nav>
    </div>


      Liste des  articles
      <Table striped bordered hover variant="Secondary">
        <thead>
            <tr>
                <td>Image</td>
                <td>Reference</td>
                <td>Designation</td>
                <td>Quantite</td>
                <td>Prix</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
        {article.map((art,index)=>

            <tr key={index} >
                <td></td>
                <td><img src={art.imageart} width={80} height={80} /></td>
                <td>{art.reference}</td>
                <td>{art.designation}</td>
                <td>{art.qtestock}</td>
                <td>{art.prix}</td>
                <td><Button variant="warning">Update<span>  </span><i className="fa-solid fa-pen-to-square"></i></Button></td>
                <td><Button variant="danger" onClick={()=>handeleDelete(art._id)}>Delete<span>   </span> <i className="fa-solid fa-trash"></i></Button></td>
               
            </tr>
             )}
        </tbody>
      </Table>
    </div>
  )
}

export default Listarticle
