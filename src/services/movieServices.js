const options = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2Yzc4ZDQzZTc3YzZlNTNlZjdiYzU4YmYxNmQ5NSIsInN1YiI6IjYxM2ZhMDBkYWFmODk3MDA4YzA3YTNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wi45m-TV3qUhhhWsgo1cYNRNwkoLeVAe0hTjaWtY-Yw",
	},
};

export const MovieService = {
	getPopularMovies: async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
				options,
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	getMovieDetails: async (movieId) => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
				options,
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	getFavoritesMovies: async () => {
		try {
			const favoriteMovies = await fetch(
				"https://api.themoviedb.org/3/account/11107077/favorite/movies?language=en-US&page=1&sort_by=created_at.asc",
				options,
			);
			const data = await favoriteMovies.json();
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	addMovieToFavorites: async (movieId) => {
		try {
			const response = await fetch("https://api.themoviedb.org/3/account/11107077/favorite", {
				method: "POST",
				headers: {
					"accept": "application/json",
					"content-type": "application/json",
					"Authorization":
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWY2Yzc4ZDQzZTc3YzZlNTNlZjdiYzU4YmYxNmQ5NSIsInN1YiI6IjYxM2ZhMDBkYWFmODk3MDA4YzA3YTNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wi45m-TV3qUhhhWsgo1cYNRNwkoLeVAe0hTjaWtY-Yw",
				},
				body: JSON.stringify({media_type: 'movie', media_id: movieId, favorite: true}),
			});

			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},

	searchMovies: async (movieName) => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
				options,
			);

			const data = await response.json();
			return data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
};
