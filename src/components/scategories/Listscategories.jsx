import { useState, useEffect } from "react"
import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "axios"
const Listscategories = () => {

  const handeleDelete=async(id)=>{
    if (window.confirm("etes vous sure de supprimer cette scategorie")){
      await axios.delete(`https://ecommerce-mern-eosin.vercel.app/api/scategorie/${id}`);
      
          getscategories()
      
      .catch(error=>{
          console.log(error)
      })}}

  


  useEffect(()=>{
    getscategories()
    },[])

    const getscategories=async()=>{
        await axios.get("https://ecommerce-mern-eosin.vercel.app/api/scategorie").then(res=>{
          setScategorie(res.data)
            console.log(res.data)
        })
        .catch(error=>{ console.log(error)
        })
    }

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
  
  const[scategorie,setScategorie]=useState([])
  return (
    <div>
      <Link className="btn btn-info" to="/scategories/add">
            Ajouter Categorie
        </Link>

      <Table>
        <thead>
          <tr>
            <td>ImageScategorie</td>
            <td>NomScategorie</td>
            <td>NomCategorie</td>
          </tr>
        </thead>
        <tbody>
          {scategorie.map((scat,index)=>
          <tr key={index}>
            <td><img src={scat.imagescategorie} width={80} height={80}/></td>
            <td>{scat.nomscategorie}</td>
            {/* {categorie.map((cat,index)=>
            <td key={cat}>{cat.nomcategorie}</td>
            )} */}

              {categorie
                  .filter((Filtrecat) => Filtrecat._id === scat.categorieID)
                  .map((cat) => (
                    <span key={cat._id}>{cat.nomcategorie}</span>
                  ))}
            <td><Button className="btn btn-danger" onClick={()=>handeleDelete(scat._id)}>Delete</Button></td>


          </tr>
          
          
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Listscategories
