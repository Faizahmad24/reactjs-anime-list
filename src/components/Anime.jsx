export default function Anime(props) {
    const{anime, onSelectedAnime} = props
    return (
      <li onClick={() => onSelectedAnime(anime.mal_id)}>
        <img src={anime.image} alt={`${anime.title} cover`} />
        <h3>{anime.title}</h3>
        <div>
          <p>
            <span>{anime.year}</span>
          </p>
        </div>
      </li>
    )
  }