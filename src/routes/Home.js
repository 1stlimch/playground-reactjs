import { useEffect, useState } from 'react';
import Movie from "../components/Movie";

function Home() {
	const [loading, setLoading] = useState(true);
	const [movieList, setMovieList] = useState([]);
	const getMovieList = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
		);
		const json = await response.json();
		setMovieList(json.data.movies);
		setLoading(false);
	};

	useEffect(() => { getMovieList() }, []);

	console.log(movieList);

	return (
		<div className='App'>
			{loading ?
				<h1>Loading...</h1> :
				<div className="MovieList">
					{movieList.map((movie) =>
						<Movie
							id={movie.id}
							key={movie.id}
							medium_cover_image={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					)}
				</div>
			}
		</div>)
}

export default Home;