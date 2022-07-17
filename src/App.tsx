import React from "react";
import { Box, CssBaseline, FormControlLabel, Input, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import { debounce } from "lodash";
import { getCharactersPagination } from './utils/requests/characters';
import { ICharacter, Status } from './utils/types';
import CharacterCard from './components/ChracterCard';
import NoResult from './components/NoResults';
import SearchFromContainer from './components/SearchFormContainer';
import ChangeNameInput from './components/ChangeNameInput';
import ChangeStatusInput from './components/ChangeStatusInput';



function App () {
  const [characters, setCharacters] = React.useState<ICharacter[]>([]);
  const [request, setRequest] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [status, setStatus] = React.useState<Status | ''>('');
  const statusOptions = ['', '']
  //Starting request
  React.useEffect(() => {
    console.log(status)
    getCharactersPagination(request, setCharacters, setRequest, { name, status });
  }, [name, status])

  //Infinite scroll
  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight) {
      getCharactersPagination(request, setCharacters, setRequest, { name, status });
    }
  }

  //Reseting request
  const resetRequests = () => {
    setRequest('');
    setCharacters([]);
  }

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    resetRequests();
    setName(e.target.value);
  }
  const onStatusChange =  (e: React.ChangeEvent<HTMLInputElement>)=>{
    resetRequests();
    setStatus(e.target.value as '' | Status)
  }
  //debounce - sending request after finishing typing
  const debouncedChangeHandler = React.useCallback(
    debounce(onNameChange, 300)
    , []);

  return (
    <div>
      <CssBaseline />
      <SearchFromContainer>
        <ChangeStatusInput onChange={onStatusChange}/>
        <ChangeNameInput onChange={debouncedChangeHandler}/>
      </SearchFromContainer>
      <Box bgcolor={'#bcbcbc'} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {characters?.map((character) => { return <CharacterCard {...character} /> })}
        {characters.length===0 && <NoResult/>}
      </Box>
    </div>
  );
}

export default App;