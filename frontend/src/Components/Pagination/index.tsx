import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination (){

    return(
        <div className="lfmovie-pagination-container">
    <div className="lfmovie-pagination-box">
        <button className="lfmovie-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="lfmovie-pagination-button" disabled={false} >
            <Arrow className="lfmovie-flip-horizontal" />
        </button>
    </div>
</div>


    );

    
}
export default Pagination;