import React from "react";
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { getCharactersPagination } from './utils/requests/characters';
import { ICharacter, Status } from './utils/types';
import CharacterCard from './components/ChracterCard';

function App () {
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);
  const [request, setRequest] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [status, setStatus] = React.useState<Status | ''>('');

  React.useEffect(() => {
    getCharactersPagination(request, setCharacters, setRequest, { name, status });
  }, [])

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
      getCharactersPagination(request, setCharacters, setRequest, { name, status });
    }
  }
  return (
    <div>
      <CssBaseline />
      <Box bgcolor={'#bcbcbc'} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {characters?.map((character) => { return <CharacterCard {...character} /> })}
      </Box>
    </div>
  );
}

export default App;