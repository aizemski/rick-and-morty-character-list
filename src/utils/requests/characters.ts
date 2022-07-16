import axios, { AxiosResponse } from 'axios';
import React from 'react';
import { ICharacter, RequestOptions } from '../types';

export const getCharactersPagination = async (
	url: string,
	setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>,
	setNextRequest: React.Dispatch<React.SetStateAction<string>>,
	options: RequestOptions
) => {
	//
	axios
		.get<ICharacter[]>(
			url
				? url
				: `https://rickandmortyapi.com/api/character/?page=1&name=${
						options.name
				  }&status=${options.status?.toLocaleLowerCase()}`
		)
		.then((res: AxiosResponse) => {
			setCharacters((prev) => [...prev, ...res.data.results]);
			setNextRequest(res.data.info.next);
		});
};
