import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PersonagemData } from '../App';

const Personagem: React.FC = () => {
	const [person, setPerson] = useState<PersonagemData>();

	const getData = useCallback(async () => {
		await axios
			.get('https://swapi.py4e.com/api/people/4')
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
							{person && person.name}
						</h1>
						<p className='text-2xl px-2 font-lexend uppercase text-white'>
							{person && person.birth_year}
						</p>
					</div>
				</div>

				<img
					src='./vader.png'
					loading='lazy'
					className='justify-self-center z-10 h-5/6 absolute  object-bottom'
					alt={person && person.name}
				/>

				<div className='justify-self-end w-1/2 h-4/5 self-end absolute text-lg z-0 bg-zinc-900 rounded-t-md'>
					<div className='flex font-lexend justify-end px-10 py-5'>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>
								Height:
							</p>
							<h2 className='text-white'>
								{person && person.height}cm
							</h2>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Mass:</p>
							<h2 className='text-white'>
								{person && person.mass}kg
							</h2>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Hair:</p>
							<h2 className='text-white capitalize '>
								{person && person.hair_color}
							</h2>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Skin:</p>
							<h2 className='text-white capitalize '>
								{person && person.skin_color}
							</h2>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>Eyes:</p>
							<h2 className='text-white capitalize '>
								{person && person.eye_color}
							</h2>
						</div>
					</div>
					<div className='flex font-lexend justify-end px-10 py-5'>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>
								Gender:
							</p>
							<h2 className='text-white capitalize '>
								{person && person.gender}
							</h2>
						</div>
						<div className='flex flex-col items-end mx-5'>
							<p className='text-gray-500'>
								HomeWorld:
							</p>
							<h2 className='text-white'>
								{person && person.homeworld}
							</h2>
						</div>
					</div>
					<div className='flex justify-center'>
						<Link to='/'>
							<button className='m-10 cursor-pointer border bg-zinc-800 transition-all animate-pulse hover:border-sky-600 hover:shadow-lg'>
								JEDI
							</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Personagem;

