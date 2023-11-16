// import { Children } from "react"
// import NumResult from "./NumResult"

export default function Search(props) {
    const {filteredItem, query, setQuery, children} = props
    
  
    function handleSearch() {
      // const dummy = animes.map().filter((item) => item.title.toLowerCase().includes(query.toLowerCase))
      
  
      filteredItem(query)
      setQuery(query)
      // console.log(filteredData)
    }
    return (
      <div className="search-container">
        <input className="search" type="text" onKeyUp={handleSearch} placeholder="Search anime..." value={query} onChange={(e) => setQuery(e.target.value)} />
        {/* <NumResult animes={animes}/> */}
        {children}
      </div>
    )
  }