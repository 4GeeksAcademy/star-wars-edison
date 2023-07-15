import React, { useEffect, useState,useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Planets = (props) =>{
    const {store,actions} = useContext(Context)
    const [planet, setPlanet] = useState("")

    const singlePlanet = () =>{
        fetch('https://www.swapi.tech/api/planets/' + props.planet.uid, {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setPlanet(resAsJson.result.properties)
			}).catch((error)=>{
				console.log(error);
			})
    }

    useEffect(()=>{
        singlePlanet()
    },[])

    return(
        <div className="card card-body mx-3">
            <img src="https://picsum.photos/id/256/400/200" className="card-img-top" alt="..." style={{ borderRadius: 5 }}></img>
            <h5 className="card-title mt-3 mb-4">{props.planet.name}</h5>
            {planet ? (
                <p className="card-text">
                    <p className='mt-0 mb-0'>Diameter: {planet.diameter}</p>
                    <p className='mt-0 mb-0'>Population: {planet.population}</p> 
                    <p className='mt-0 mb-0'>Terrain: {planet.terrain}</p>
                </p>
            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <div className="d-flex d-flex justify-content-between">
                <button type="button" className="btn btn-outline-success col-3 mt-4"
                    onClick={()=>{
                        actions.addCharacteList(planet.name)
                    }}><i class="far fa-heart"></i></button>
                <button type="button" className="btn btn-outline-success col-6 mt-4" ><Link style={{color: 'inherit', textDecoration: 'inherit'}} to={'/planet/' + props.identidad.uid}>Lear more</Link></button>

            </div>
        </div>
    )
}

export default Planets