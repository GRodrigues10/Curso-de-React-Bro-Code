import React, { useState } from "react";

function Mycomponent(){
    const [comidas, setComidas] = useState(['Maçã', 'Laranja', 'Banana']);

    function handleAddFood(){
        
        const novaComida = document.getElementById('comidaInput').value;
        document.getElementById('comidaInput').value = '';
        setComidas(c => [...comidas, novaComida]);
        

    }

    function handleRemoveFood(index){
        setComidas(comidas.filter((_, i) => i !== index));
    }


    return(
        <>
        
            <div>
                <h2>Lista de Comidas</h2>
                <ul>
                    {comidas.map((comida, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{comida}</li>)}

                </ul>

                <input type="text" id="comidaInput" placeholder="Digite a comida..." />
                <button onClick={handleAddFood}>Adicionar Comida</button>
            </div>
        
        </>
    );
}

export default Mycomponent;