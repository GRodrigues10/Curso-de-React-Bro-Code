import React, { useState } from "react";
function MyComponent(){





    const [estáEmpregado, setEstáEmpregado] =  useState(false);
    const Statusemprego = ()=>{
        setEstáEmpregado(!estáEmpregado)
    }
    





    const [nome, setNome] = useState('Convidado');
    const [idade, setIdade] = useState(0);

    const atualizarNome = ()=>{
        setNome('Gabriel')
    }

    const atualizarIdade = ()=>{
        setIdade(idade + 1);
    }

    return(<><div>
        <p>Nome: {nome}</p>
        

        <p>Idade: {idade}</p>
       

        <p>Está Empregado: {estáEmpregado ? 'Sim': 'Não'}</p>
        <button onClick={atualizarNome}>Set Nome</button>
        <button onClick={atualizarIdade}>Set Idade</button>
        <button onClick={Statusemprego}>Set Emprego</button>
        
        
        </div>
        
            
       
</>
)
}


export default MyComponent;