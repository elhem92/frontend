/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Cardc from "./Cardc"


const Affichearticlescard = ({articles}) => {

  return (
    <div className='container'>
     <div  style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
      {articles.map((art,index)=>
        <Cardc art={art}/>

    )}
    </div>
    </div>
  )
}

export default Affichearticlescard
