import { Link } from "wouter";
import { useEffect, useState } from "react";
import { MovieService } from "../services/movieServices";

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
			<div className="h-screen w-full grid place-items-center text-xl animate-pulse text-center">
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
						<Link key={movie.id} to={`/movie/${movie.id}`} className="relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-8 h-8 absolute top-2 right-2 z-10"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
								/>
							</svg>
							<img
								className="hover:scale-[1.01] transition duration-300 ease-in-out relative rounded-xl"
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt={movie.title}
								loading="lazy"
							/>
							<p className="font-semibold mt-2">{movie.title}</p>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};

export default Favorites;
