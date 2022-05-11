import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css'
function Navbar(){
    return(

        <header>
    <nav className="container">
        <div className="lfmovie-nav-content">
            <h1>LFMovie</h1>
            <a href="https://github.com/LiiPeee" target="_blank" rel="noreferrer">
                <div className="lfmovie-contact-container">
                    <GithubIcon />
                    <p className="lfmovie-contact-link">/LiPee</p>
                </div>
            </a>
        </div>
    </nav>
</header>



    )
}

export default Navbar;