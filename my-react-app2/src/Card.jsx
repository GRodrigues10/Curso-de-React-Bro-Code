import ProfilePic from './assets/luke-skywalker.webp'
function Card(){
    return(
        <div className="card">
            <img className= "cardImage" src = {ProfilePic} alt="Profile Picture" />
            <h2 className='cardTitle'>Gabriel da Costa Rodrigues</h2>
            <p className='cardP'>Eu sou programador Frontend</p>
        </div>
    );
}
export default Card