import React from "react";
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { getCharactersPagination } from './utils/requests/characters';
import { ICharacter } from './utils/types';

function App () {
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);
  React.useEffect(() => {
    getCharactersPagination(setCharacters)
  }, [])
  return (
    <div>
      <CssBaseline />
      <ul>
        {characters?.map((character) => { return <li>{character.name}</li> })}
      </ul>
    </div>
  );
}

export default App;