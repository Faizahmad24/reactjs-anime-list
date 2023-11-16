import Logo from "./Logo"

export default function Navbar(props) {
    // const {animes, filteredItem, query, setQuery, children} = props
    const {children} = props
    return (
      <nav className="nav-bar">
        <Logo/>
        {/* <Search animes={animes} filteredItem={filteredItem} query={query} setQuery={setQuery}/> */}
        {children}
      </nav>
    )
  }