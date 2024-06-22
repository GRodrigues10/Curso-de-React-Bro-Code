import React, { useState } from 'react';

function MeuComponente() {
    const [nome, setNome] = useState("Convidado");
    const [quantidade, setQuantidade] = useState();
    const [comentário, setComentário] = useState('')

    const [pagamento, setPagamento] = useState('');


    const [envio, setEnvio] = useState()

    function handleNameChange(event) {
        setNome(event.target.value);
    }

    function handleQuantityChange(event){

        setQuantidade(event.target.value);

    }


    function handleCommentChange(event){
        setComentário(event.target.value);
    }

    function handlePaymentChange(event){
        setPagamento(event.target.value);
    }


    function handleShippingChange(event){
        setEnvio(event.target.value);
    }
    

    return (
        <div>
            <input value={nome} onChange={handleNameChange} />
            <p>Nome:{nome}</p>

            <input value={quantidade} onChange={handleQuantityChange} type='number'/>
            <p>Quantidade:{quantidade}</p>


            <textarea name="" id="" value={comentário} onChange={handleCommentChange} placeholder='Digite algo...'></textarea>
            <p>Comnetário: {comentário}</p>


            <select name="" id="" value={pagamento} onChange={handlePaymentChange}>
                <option value="">Selecione as Opções</option>
                <option value="Visa">Visa</option>
                <option value="Mastercarde">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Pagamentos:{pagamento}</p>
            <label>
                <input type="radio" value='Pegue' checked={envio === 'Pegue'} onChange={handleShippingChange}/>
                Pegue
                </label>
        
            
            <label>
            <input type="radio" value='Entrega' checked={envio === 'Entrega'} onChange={handleShippingChange}/>Entrega
            </label>

            <p>Pagamento:{envio}</p>

        
        
        </div>
    );
}

export default MeuComponente;