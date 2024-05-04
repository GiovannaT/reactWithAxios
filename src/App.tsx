import { useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface PersonagemData {
	birth_year: string;
	created: string;
	edited: string;
	eye_color: string;
	films: string[];
	gender: string;
	hair_color: string;
	height: string;
	homeworld: string;
	mass: string;
	name: string;
	skin_color: string;
	species: string[];
	starships: string[];
	url: string;
	vehicles: string[];
}

function App() {
	const [person, setPerson] = useState<PersonagemData>(
		{} as PersonagemData
	);

	const getData = useCallback(async () => {
		await axios
			.get('https://swapi.py4e.com/api/people/11')
			.then(function (response) {
				console.log(response.data);
				setPerson(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		getData();
	}, []);

	return (
		<section
			id='characters'
			className='characters flex flex-col pt-10 items-center'
		>
			<div className='w-screen h-screen grid grid-cols-3 items-end scroll-smooth'>
				<div className='justify-self-start self-end absolute z-20'>
					<div className='flex items-end justify-end p-10'>
						<h1 className='text-5xl font-lexend uppercase text-white font-bold'>
							{person.name}
						</h1>
						<p className='text-2xl px-2 font-lexend uppercase text-gray'>
							{person.birth_year}
						</p>
					</div>
				</div>

				<img
					src='./anakin.png'
					loading='lazy'
					className='justify-self-center z-10 h-5/6 absolute pr-40 object-bottom'
					alt={person.name}
				/>

				<div className='justify-self-end w-1/2 h-4/5 self-end absolute text-lg z-0 bg-gray-200 rounded-t-md'>
					<div className='flex font-lexend justify-end px-10 py-5'>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>
								Height:
							</p>
							<h1 className='text-black text-2xl font-bold'>
								{person.height}cm
							</h1>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Mass:</p>
							<h1 className='text-black text-2xl font-bold'>
								{person.mass}kg
							</h1>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Hair:</p>
							<h1 className='text-black text-2xl font-bold capitalize '>
								{person.hair_color}
							</h1>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Skin:</p>
							<h1 className='text-black text-2xl font-bold capitalize '>
								{person.skin_color}
							</h1>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Eyes:</p>
							<h1 className='text-black text-2xl font-bold capitalize '>
								{person.eye_color}
							</h1>
						</div>
					</div>
					<div className='flex font-lexend justify-end px-10 py-5'>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>
								Gender:
							</p>
							<h1 className='text-black text-2xl font-bold capitalize '>
								{person.gender}
							</h1>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>
								HomeWorld:
							</p>
							<h1 className='text-black text-2xl font-bold'>
								{person.homeworld}
							</h1>
						</div>
					</div>
					<div className='flex justify-center'>
						<Link to='/personagem'>
							<button className='m-10 border transition-all justify-center motion-safe:animate-pulse border-solid hover:border-rose-600 hover:shadow-lg'>
								SITH
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;

