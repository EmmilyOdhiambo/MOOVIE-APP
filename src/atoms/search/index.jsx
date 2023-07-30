import React,{useState} from "react"
const Search = () => {
    const [search,setSearch]=useState([])
    return (
        <form className="search">
            <input
                type="search"
                className="form-control"
                placeholder="Search for movies..."
                aria-label="Search"
                onChange={(e) => {
                    search(1)
                    setSearch(e)
                }}
            />
        </form>
    )
}
export default Search;