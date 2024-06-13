function Btn(){
    // let count = 0;
    // const clicou = (name) => {
        
    //     if(count < 3){
    //         count++;
    //         alert(`${name}, você clicou em mim ${count} vez/vezes`);
    //     }
    //     else{
    //         alert(`Por favor, pare de clicar em mim ${name}`)
    //     }
    // }

    // const clicou2 = (name) => alert(`${name}, Pare de clicar em mim!`);

    const handleClick = (e) => e.target.textContent = "AAHHHH"

    return(<button onDoubleClick={(e) => handleClick(e)} >Click Me😀</button>)
}

export default Btn;