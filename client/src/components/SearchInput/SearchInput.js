import React from "react"
import "./style.css"


function SearchInput(props){
    return(
        <div className="searchInput">
            <form id="searchForm">
            <input placeholder="Harry Potter and The Half Blood Prince"></input>
            </form>
            <button id="SearchBtn"></button>
        </div>

    )
}
export default SearchInput;