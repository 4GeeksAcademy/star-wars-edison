import React, { useEffect, useState,useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useParams } from "react-router-dom";


const Character = (props) =>{
    const {store,actions} = useContext(Context)
    const [character, setCharacter] = useState("")

    const getSingleCharacter = () =>{
		
		fetch('https://www.swapi.tech/api/people/' + props.character.uid, {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setCharacter(resAsJson.result.properties)
			}).catch((error)=>{
				console.log(error);
			})
	}

    useEffect(()=>{
        getSingleCharacter()
    },[])
    return(
         <div className="card card-body mx-3"  style={{ width: 300}}>
            <img src="https://picsum.photos/id/259/400/200" className="card-img-top" alt="..." style={{ borderRadius: 5}}></img>
            <h5 className="card-title mt-3 mb-4">{props.character.name}</h5>
            {character ? (
                <p className="card-text">
                    <p className='mt-0 mb-0'>Gender: {character.gender}</p>
                    <p className='mt-0 mb-0'>Hair Color: {character.hair_color}</p> 
                    <p className='mt-0 mb-0'>Eye Color: {character.eye_color}</p>
                </p>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <div className="d-flex d-flex justify-content-between">
                <button type="button" className="btn btn-outline-success  col-3 mt-4" 
                    onClick={()=>{
                        actions.addCharacteList(character.name)
                    }}><i className="far fa-heart"></i></button>
                
                <button type="button" className="btn btn-outline-success col-6 mt-4" ><Link style={{color: 'inherit', textDecoration: 'inherit'}}  to={'/people/' + props.identidad.uid}>Lear more</Link></button>
            </div>
        </div>
    )
}

export default Character