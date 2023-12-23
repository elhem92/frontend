import { useState,useEffect } from "react"
import { Table,Button } from "react-bootstrap"
import axios from "axios"
import { Link } from "react-router-dom"

const Listcategories = () => {


  useEffect(()=>{
    getcategories()
    },[])
    const getcategories=async()=>{
        await axios.get("https://ecommerce-mern-eosin.vercel.app/api/categorie").then(res=>{
          setCategorie(res.data)
            console.log(res.data)
        })
        .catch(error=>{ console.log(error)
        })
    }

  const [categorie,setCategorie]=useState([])

  const handeleDelete=async(id)=>{
    if (window.confirm("etes vous sure de supprimer cette categorie")){
    await axios.delete(`https://ecommerce-mern-eosin.vercel.app/api/categorie/${id}`)
    
        getcategories()
  
    .catch(error=>{
        console.log(error)
    })}}


  return (
    <div>
        <Link className="btn btn-info" to="/categories/add">
            Ajouter Categorie
        </Link>
          
          
       <Table>
        <thead>
          <tr className="">
            <td>nomcategorie</td>
            <td>imagecategorie</td>
          </tr>
        </thead>
        <tbody>
          {categorie.map((cat,index)=>
          <tr key={index}>
            <td>{cat.nomcategorie}</td>
            <td><img src={cat.imagecategorie} width={80} height={80}/></td>
            <td><Button variant="warning">Update<span>  </span><i className="fa-solid fa-pen-to-square"></i></Button></td>
            <td><Button variant="danger" onClick={()=>handeleDelete(cat._id)}>Delete<span>   </span> <i className="fa-solid fa-trash"></i></Button></td>
        
          </tr>
          
          
          
          )}
     
        </tbody>
      </Table>
    </div>
  )
}

export default Listcategories
