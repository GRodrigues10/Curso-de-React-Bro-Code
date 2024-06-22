import React, {useState} from 'react'

function MeuComponente(){

    const [carro,setCarro] = useState({ano:2024, marca:'Ford', modelo:'Mustang'});

    function mudaAno(event){
        setCarro(c => ({...c, ano:event.target.value}));
    }

    function mudaMarca(event){
        setCarro(c => ({...c, marca:event.target.value}));
    }

    function mudaModelo(event){
        setCarro(c=>({...c, modelo:event.target.value}))
    }

return(
    <>
    
    <div>
        <p>Seu carro favorito é: {carro.ano} {carro.marca} {carro.modelo}</p>

        <input type="number" value={carro.ano} onChange={mudaAno}/> <br />
        <input type="text" value={carro.marca} onChange={mudaMarca} /> <br />
        <input type="text" value={carro.modelo} onChange={mudaModelo} /> <br />
    </div>
    
    </>
);


}

export default MeuComponente;