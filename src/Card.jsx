import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const Card =(props) =>{
    const cardel =()=>{
        return props.del(props.id)
    
    }
  return(
    <>
    <div className="col-12 col-md-4 pl-5 card">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button onClick={cardel}><DeleteIcon/></Button>
    </div>
    </>
  )
}
export default Card;