import React from 'react';

export type Status = 'Alive' | 'Dead' | 'unknown';

export type RequestOptions = {
	status: Status | '' = '';
	name: string = '';
};
export type Props = {
	children?: React.ReactNode;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void

}
export interface ICharacter {
	id: number;
	name: string;
	status: Status;
	species: string;
	type: string;
	gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
	origin: object;
	location: object;
	image: string;
	url: string;
	created: string;
}
