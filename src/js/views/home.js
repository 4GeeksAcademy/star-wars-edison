import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Character from "../component/character.js";
import Planets from "../component/planets.js";
import Starship from "../component/starship.js";



export const Home = () => {
	const [character, setCharacter] = useState([])
	const [planet,setPlanet] = useState([])
	const [starship,setStarship] = useState([])


	const getAllCharacters = () =>{
		fetch('https://www.swapi.tech/api/people/', {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setCharacter(resAsJson.results)
			}).catch((error)=>{
				console.log(error);
			})
	}

	const getPlanets = () =>{
		fetch('https://www.swapi.tech/api/planets/', {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setPlanet(resAsJson.results)
			}).catch((error)=>{
			console.log(error);
			});
	}

	const getAllStarships = () =>{
		fetch('https://www.swapi.tech/api/starships/', {
			method: 'GET', 
			headers:{
				'Content-Type': 'application/json'
			}
			}).then((res)=> res.json())
			.then(resAsJson => {
				setStarship(resAsJson.results)
			}).catch((error)=>{
				console.log(error);
			})	
	}


	const showContacts = () =>{
		return character.map((item,index) =>{
			return <Character character={item} identidad={item} key={index} />
		})
	}

	const showPlanets = () =>{
		return planet.map((item,index)=>{
			return <Planets planet={item} identidad={item}  key={index} />
		})
	}

	const showStarship = () =>{
		return starship.map((item,index)=>{
			return <Starship  starship={item} identidad={item} key={index}/>
		})
	}
	
	useEffect(()=>{
		getAllCharacters()
		getPlanets()
		getAllStarships()
	},[])
	return(
		<div className="py-2" style={{ overflowX: 'auto', overflowY: 'hidden', paddingLeft: 10, paddingRight: 10}}>
		<h2 className="font-weight-light">Characters</h2>
		<div className="d-flex flex-row flex-nowrap">
			{character.length !== 0 ? showContacts() : (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}
		</div>
		<h2>Planets</h2>
		<div className="d-flex flex-row flex-nowrap">
			{planet.length !== 0 ? showPlanets() : (
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			)}
		</div>
		<h2>Starship</h2>
		<div className="d-flex flex-row flex-nowrap">
			{starship.length !== 0 ? showStarship() : (
				<div className="spinner-border" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
			)}
		</div>
	</div>
		)
	
};
