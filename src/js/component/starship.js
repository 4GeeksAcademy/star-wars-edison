import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Starship = (props) =>{
    const {store,actions} = useContext(Context)
    const [starship, setStarship] = useState("")

    const getStarship = () =>{  	
		fetch('https://www.swapi.tech/api/starships/' + props.starship.uid, {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setStarship(resAsJson.result.properties)
			}).catch((error)=>{
				console.log(error);
			})
    }

    useEffect(()=>{
        getStarship()
    },[])

    return(
       <div className="card card-body mx-3">
            <img src="https://picsum.photos/id/545/400/200" className="card-img-top" alt="..." style={{ borderRadius: 5 }}></img>
            <h5 className="card-title mt-3 mb-4">{props.starship.name}</h5>
            {starship ? (
                <p className="card-text">
                    <p className='mt-0 mb-0'>Model: {starship.model}</p>
                    <p className='mt-0 mb-0'>Starship class: {starship.starship_class}</p> 
                    <p className='mt-0 mb-0'>Consumables: {starship.consumables}</p>
                </p>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <div className="d-flex d-flex justify-content-between">
                <button type="button" className="btn btn-outline-success col-3 mt-4"  
                    onClick={()=>{
                        actions.addCharacteList(starship.name)
                    }}><i class="far fa-heart"></i></button>
                <button type="button" className="btn btn-outline-success col-6 mt-4" ><Link style={{color: 'inherit', textDecoration: 'inherit'}} to={'/starship/' + props.identidad.uid}>Lear more</Link></button>
            </div>
       </div>
    )
}

export default Starship;