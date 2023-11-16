export default function NumResult(props) {
    const {animes} = props
    return (
      <p className="search-results">
          Found <strong>{animes.length}</strong> results
      </p>
    )
  }