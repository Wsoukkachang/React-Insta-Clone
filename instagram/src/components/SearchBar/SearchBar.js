import React from 'react';
import './searchBar.css';

const SearchBar = props => {
    
    return (
        <div className="searchBar">
            <div className="home">
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <form onSubmit={props.search}>
                <input 
                    name="search"
                    placeholder="Search" 
                    value={props.value} 
                    onChange={props.handleChange} 
                />
            </form>
            <div className="explore">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
                <i className="far fa-user" onClick={props.logout}></i>
            </div>
        </div>
    );
};

export default SearchBar;