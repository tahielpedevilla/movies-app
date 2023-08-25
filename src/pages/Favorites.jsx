import { useEffect, useState } from "react";
import { MovieService } from "../services/movieServices";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
	const [favoriteMovies, setFavoriteMovies] = useState([]);

	useEffect(() => {
		async function fetchPopularMovies() {
			try {
				const movies = await MovieService.getFavoritesMovies();
				setFavoriteMovies(movies.results);
			} catch (error) {
				console.error(error);
			}
		}

		fetchPopularMovies();
	}, []);

	if (!favoriteMovies.length) {
		return (
			<div className="h-[calc(100vh-64px)] w-full grid place-items-center text-xl animate-pulse text-center">
				Loading...
			</div>
		);
	}

	return (
		<main className="container mx-auto px-6">
			<section className="py-20 flex items-center w-full flex-col">
				<h1 className="text-4xl font-bold pb-8">My Favorite Movies</h1>
				<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] w-full gap-8">
					{favoriteMovies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</main>
	);
};

export default Favorites;
