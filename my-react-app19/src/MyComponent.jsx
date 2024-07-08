import React, {useState, useEffect, useRef} from 'react';


// useState = Renderiza o Componente sempre quando o valor de estado muda.

// useRef = Armazena uma referência para algo e não causa re-renderização do componente quando o valor da referência é modificado, mantendo a eficiência.

function MyComponent(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log('COMPONENTE RENDEREIZADO!');
    })
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'lightblue'
        inputRef2.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'lightblue'
        inputRef1.current.style.backgroundColor = ''
        inputRef3.current.style.backgroundColor = ''
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'lightblue'
        inputRef1.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = ''
    }

    return(<>


            <div><button onClick={handleClick1}>Clique1</button>

            <input ref={inputRef1} />

            <button onClick={handleClick2}>Clique2</button>

            <input ref={inputRef2} />

            <button onClick={handleClick3}>Clique3</button>

            <input ref={inputRef3} />
            
            </div>

    
          </>);

}

export default MyComponent;