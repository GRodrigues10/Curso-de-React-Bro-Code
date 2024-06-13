function ProfilePicture(){
    const imageUrl = './src/assets/dukinho.png';
    const click = (e) => e.target.style.display = "none"

    return(<img src={imageUrl} onClick={(e)=>click(e)}></img>)
}

export default ProfilePicture;