import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const SingleItem = () =>{
    const params = useParams()
    const [character,setCharacter] = useState("")
    console.log(params);

    const showSinglePerson = () =>{
        fetch('https://www.swapi.tech/api/people/' + params.uid, {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setCharacter(resAsJson.result.properties)
                console.log(resAsJson);
			}).catch((error)=>{
				console.log(error);
			})
    }


    useEffect(()=>{
        showSinglePerson()
    },[])
    return(
        <div className="container-fluid">
            <div className="row d-flex align-items-center justify-content-center vh-100">
                <div className="col-10 ">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                  <img src="https://picsum.photos/id/259/900/900" classNameName="card-img-top" alt="..." style={{ borderRadius: 5 ,height: 350, width:350}}></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h1 className="card-title">{character.name}</h1>
                                    <p className="card-text">Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada.
                                     Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus.
                                     Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id mi.
                                     Pellentesque ipsum. Nulla</p>
                                     <hr style={{color: "red"}}/>
                                    <div className="d-flex flex-row text-danger">
                                        <p className="card-text  mx-5"> Height <br/>{character.height}</p>
                                        <p className="card-text  mx-5">Birth <br/>Year <br/> {character.birth_year}</p>
                                        <p className="card-text  mx-5">Gender <br/>{character.gender}</p>
                                        <p className="card-text  mx-5">Skin <br/> Color <br/>{character.skin_color}</p>
                                        <p className="card-text  mx-5">Eye <br/> Color <br/> {character.eye_color}</p>
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

export default SingleItem