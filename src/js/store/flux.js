const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favouritesList:[],
		},
		actions: {
			addCharacteList : (arr) =>{
				const store= getStore()
				setStore({favouritesList: [...store.favouritesList, arr]})
			},
			updateFavoritesList: (updatedList) => {
				setStore({ favouritesList: updatedList });
			  },
		}
	};
};

export default getState;
