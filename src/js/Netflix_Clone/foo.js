//  API KEY = ea568d2d9801651b9f5a4af88db27e7c
// EXAMPLE API REQUEST = https://api.themoviedb.org/3/movie/550?api_key=ea568d2d9801651b9f5a4af88db27e7c

//netflix-clone-72f14

//https://api.themoviedb.org/3/movie/550?api_key=ea568d2d9801651b9f5a4af88db27e7c


const req = {
	trending: `/trending/all/week?api_key=${API}&language=en-US`,
	originals: `/discover/tv?api_key=${API}&with-networks=213`,
	topRated: `/movie/top_rated?api_key=${API}&language=en-US`,
	action: `/discover/movie?api_key=${API}&with_genres=28`,
	comedy: `/discover/movie?api_key=${API}&with_genres=35`,
	horror: `/discover/movie?api_key=${API}&with_genres=27`,
	rommance: `/discover/movie?api_key=${API}&with_genres=10749`,
	documentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};