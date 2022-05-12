import MovieStars from "Components/MovieStars";
import './style.css';
function MovieScore(){

    const score = 3.5;
    const count = 13;

    return(

<div className="lfmovie-score-container">
    <p className="lfmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="lfmovie-score-count">{count} avaliações</p>
</div>


    );


}
export default MovieScore;