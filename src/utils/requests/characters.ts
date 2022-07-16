import axios, { AxiosResponse } from 'axios';
import { ICharacter } from '../types';

export const getCharactersPagination = async (
	setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>,
	url?: string
) => {
	//
	axios
		.get<ICharacter[]>(
			url ?? 'https://rickandmortyapi.com/api/character/?page=1'
		)
		.then((res: AxiosResponse) => {
			setCharacters((prev) => [...prev, ...res.data.results]);
		});
};
