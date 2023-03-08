
import './TodoSearch.css'
import React from "react";

function TodoSearch({ searchValue,setSearchValue }) {
    // const estado = React.useState();
   // const [searchValue, setSearchValue] = React.useState('');
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
  
    return (
        <input
            className="TodoSearch"
            placeholder="Ingrese un Todo"
            value = {searchValue}
            onChange={onSearchValueChange}
        />
    );
}
export {TodoSearch};