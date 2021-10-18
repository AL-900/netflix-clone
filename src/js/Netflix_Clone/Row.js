import React, { useState, useEffect } from "react";
import "/src/css/Netflix_Clone/RowNetflix.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer'


const img_base_url = ` https://image.tmdb.org/t/p/original`;

export default function Row({ title, url ,large }) {
	const [ movies, setMovies ] = useState([]);
	const [trailerUrl, settrailerUrl] = useState('')
	useEffect(() => {
		async function fetchUrl() {
			const requests = await axios.get(url);

			setMovies(requests.data.results);

			// console.log(requests)
		}
		fetchUrl();
	}, [url]);
	const opts = {
		height: '390',
		with: '100%',
		playerVars: {
			autoplay : 1
		}

	}
	
	const handleClick = (movie) =>
	{
		
		if (trailerUrl) {
			settrailerUrl('')

		} else {
			movieTrailer(movie?.name || '')
				.then((url) =>
				{
				
					const paramUrl = new URLSearchParams(new URL(url).search)
					settrailerUrl(paramUrl.get("v"));

				})
				.catch((er) =>
				{
					console.log(er.message)
			})
		}

	}


	return (
		<div className='Rows'>
			<h2>{title}</h2>

			<div className='Row__posters'>
				{movies.map((movie) => (
					<img onClick={()=>handleClick(movie)} className={`Row__poster ${large && `Row__posterLarge`}`} key={Math.random()} src={`${img_base_url}${large ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
				))}
			</div>
			{ trailerUrl && <YouTube videoId={ trailerUrl } opts={ opts } /> }
		</div>
	);
}
