import axios from "axios"
import { useEffect, useState } from "react"
import Affichearticlescard from "./Affichearticlescard"

const Listarticlecard = () => {

    const [articles, setArticles]=useState([])

    const fetcharticles=async()=>{

       await axios.get("https://ecommerce-mern-eosin.vercel.app/api/article").then(res=>{
        setArticles(res.data)
       })
       .catch(error=>{
        console.log(error)
       })
    }

    useEffect(()=>{
        fetcharticles()
    },[])
    

  return (
    <div>
      <Affichearticlescard articles={articles}/>
    </div>
  )
}

export default Listarticlecard
