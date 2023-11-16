import AnimeList from "./AnimeList";
import { useState } from "react";


// Stateful Component
export default function ListBox(props) {
    const [isOpen1, setIsOpen1] = useState(true);
    const {animes, onSelectedAnime} = props
  
    return (
      <div className="box">
        <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
          {isOpen1 ? '–' : '+'}
        </button>
        {isOpen1 && (
          <AnimeList animes={animes} onSelectedAnime={onSelectedAnime}/>
        )}
    </div>
    )
  }