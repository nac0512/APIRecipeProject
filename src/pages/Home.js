import React from 'react';
import Search from '../components/Search'

function Home() {
    const findRecipe = (e) => {
        e.preventDefault();
        fetch(`${e.target.recipeType.value}api/json/v1/1/search.php?s=${e.target.searchTerm.value}`)
        .then(data => data.json())
        .then(data => {
            console.log(data)
        })
    };

    return(
        <div>
            <Search findRecipe={findRecipe} />

        </div>
    );
}

export default Home;