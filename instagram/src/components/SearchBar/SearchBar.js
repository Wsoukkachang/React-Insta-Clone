import React from 'react';

const SearchBar = props => {
    return (
        <div className="searchBar">
            <div className="home">
                <i className="fab fa-instagram"></i>
                <h1>Instragram</h1>
            </div>
            <form>
                <input name="search" placeholder="Search" />
            </form>
            <div className="explore">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </div>
    );
};

export default SearchBar;