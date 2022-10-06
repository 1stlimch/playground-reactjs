import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [Detail, setDetail] = useState();
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			.then((response) => response.json())
			.then((json) => setDetail(json))
			.then(() => setLoading(false));
	}, []);

	return (
		<div className="MovieDetail">
			{loading ? null : <h1>{Detail.data.movie.title}</h1>}
		</div>
	);
}

export default Detail;