import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { MovieService } from "../services/movieServices";

function MovieDetail() {
	const [, params] = useRoute("/movie/:movieId");
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		async function fetchMovieDetails() {
			try {
				const movieData = await MovieService.getMovieDetails(params.movieId);
				setMovie(movieData);
			} catch (error) {
				console.error(error);
			}
		}

		fetchMovieDetails();
	}, [params.movieId]);

	if (!movie) {
		return <div className="h-screen w-full grid place-items-center -mt-10 text-xl animate-pulse text-center">Loading...</div>;
	}

	return (
		<main className="container mx-auto px-6">
			<section className="py-20 flex flex-col lg:flex-row w-full gap-8">
				<img
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.title}
					className="rounded-xl lg:w-72"
				/>
				<div className="flex flex-col">
					<div className="flex items-center gap-2">
						{movie.genres.map((genre) => (
							<span key={genre.id} className="bg-white/20 px-3 py-1 rounded-full">
								{genre.name}
							</span>
						))}
					</div>
					<h1 className="text-4xl font-bold pb-8 mt-4">{movie.title}</h1>
					<p className="text-xl">{movie.overview}</p>
					<button className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded lg:w-fit">
						Add to Favorites
					</button>
				</div>
			</section>
		</main>
	);
}

export default MovieDetail;
