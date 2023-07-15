import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SingleStarship = () =>{
    const params = useParams()
    const [starship,setStarship] = useState("")

    const showSingleStarship = () =>{
        fetch('https://www.swapi.tech/api/starships/' + params.uid, {
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
        showSingleStarship()
    },[])
    return(
        <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center vh-100">
                <div className="col-10 ">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                  <img src="https://picsum.photos/id/537/900/900" className="card-img-top" alt="..." style={{ borderRadius: 5 ,height: 350, width:350}}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{starship.name}</h1>
                                    <p className="card-text">Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada.
                                     Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus.
                                     Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi.
                                     Pellentesque ipsum. Nulla</p>
                                     <hr style={{color: "red"}}/>
                                    <div className="d-flex flex-row text-danger">
                                        <p className="card-text  mx-5">Length <br/>{starship.length}</p>
                                        <p className="card-text  mx-5">Passengers <br/> {starship.passengers}</p>
                                        <p className="card-text  mx-5">Consumables <br/>{starship.consumables}</p>
                                        <p className="card-text  mx-5">Crew <br/>{starship.crew}</p>
                                        <p className="card-text  mx-5">MGLT <br/> {starship.MGLT}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}

export default SingleStarship