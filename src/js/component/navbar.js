import React, { useEffect, useState,useContext }from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	const [itemsCount, setItemsCount] = useState("")

	const showFavourites = () =>{
		return store.favouritesList.length !== 0 ? store.favouritesList.map((item,index)=>{
			  	return <li key={index}> <div className="d-flex flex-row align-items-center"><a className="dropdown-item" href="#">{item}</a> <i className="fas fa-trash-alt me-3" 
				onClick={(e)=>{ 
					e.preventDefault()
					deleteFavorites(item)}}></i></div></li>
			 }) : 
			 <li><a className="dropdown-item" href="#">Is Empty</a></li>
	}
	
	const deleteFavorites= (favoriteItem) =>{
		const updatedFavoritesList = store.favouritesList.filter((item) => item !== favoriteItem);
		actions.updateFavoritesList(updatedFavoritesList);
	}

	useEffect(()=>{
		setItemsCount(store.favouritesList.length)
	},[showFavourites])

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className="mx-4" src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png" alt="logo-starWars" style={{height: 50, width: 80}}/>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<div className="dropdown mx-4" style={{width:150}}>
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {itemsCount}
						</a>
						
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							{showFavourites()}
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
