import { Route, Router } from "wouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Route path="/" component={Home} />
				<Route path="/favorites" component={Favorites} />
				<Route path="/movie/:movieId" component={MovieDetail} />
			</Router>
		</>
	);
}

export default App;
