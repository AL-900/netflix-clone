import React, { useState, useEffect } from "react";
import "/src/css/Netflix_Clone/BannarNetflix.css";

import axios from "./axios";
import request from "./request";

export default function Bannar() {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const req = await axios.get(request.originals);

			setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
		}
		fetchData();
	}, []);
	return (
		<header className='Bannar img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}' style={{ backgroundImage: `url( https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundPosition: "center center", backgroundSize: "cover" }}>
			<div className='Bannar__content '>
				<h1 className='Bannar__tittle '>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className='Bannar__buttons'>
					<a className='btn  Bannar__button'>Play</a>
					<a className='btn  Bannar__button'>My List</a>
				</div>
				<h4 className=' Bannar__discription'>{movie?.overview}</h4>
			</div>
			<div className='Bannar__fade' />
		</header>
	);
}
