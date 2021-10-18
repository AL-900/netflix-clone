const API = "ea568d2d9801651b9f5a4af88db27e7c";

 const request = {
	trending: `/trending/all/week?api_key=${API}&language=en-US`,
	originals: `/discover/tv?api_key=${API}&with-networks=213`,
	topRated: `/movie/top_rated?api_key=${API}&language=en-US`,
	action: `/discover/movie?api_key=${API}&with_genres=28`,
	comedy: `/discover/movie?api_key=${API}&with_genres=35`,
	horror: `/discover/movie?api_key=${API}&with_genres=27`,
	rommance: `/discover/movie?api_key=${API}&with_genres=10749`,
	documentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};
export default request;