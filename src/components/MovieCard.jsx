import PropTypes from "prop-types";
import { Link } from "wouter";
import { MovieService } from "../services/movieServices";

const MovieCard = ({ movie }) => {
	const handleAddFavorite = async (movie) => {
		try {
			await MovieService.addMovieToFavorites(movie);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Link key={movie.id} to={`/movie/${movie.id}`} className="relative">
			<button onClick={() => handleAddFavorite(movie)} className="absolute top-2 right-2 z-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
					/>
				</svg>
			</button>
			<img
				className="hover:scale-[1.01] transition duration-300 ease-in-out relative rounded-xl"
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt={movie.title}
				loading="lazy"
			/>
			<p className="font-semibold mt-2">{movie.title}</p>
		</Link>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		poster_path: PropTypes.string.isRequired,
	}),
};

export default MovieCard;
