import React, {useState, useEffect} from 'react';
import { useReducer } from 'react';
function MyComponent(){
    // const  [count, setCount] = useState(0);
    // const [color, setColor] = useState('green')

    // useEffect(()=>{
    //     document.title = `count:${count} ${color}`
    // },[count, color])

    // function addCount(){
    //     setCount(c => c + 1);
    // }

    // function subCount(){
    //     setCount(c => c - 1)
    // }

    // function changeColor(){
    //     setColor(c => c === 'green' ? 'red': 'green');
    // }

    // return(
    //     <>
    //         <p style={{color:color}}>Contador:{count}</p>
    //         <button onClick={addCount}>Adicionar</button>
    //         <button onClick={subCount}>Subtrair</button><br />
    //         <button onClick={changeColor}>Mudar a Cor</button>
    //     </>
    // )

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        console.log('Adicionei o addEventListener');

        return ()=>{
            window.removeEventListener('resize', handleResize);
            console.log('Removi o addEventListener')
        }
    }, []);

    useEffect(()=>{
        document.title = `Size${width} x ${height}}`
    }, [width, height  ])

  
       

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

   
   


    const [width, setWidth] = useState(window.innerWidth);

    const [height, setHeight] = useState(window.innerHeight);
   

    return(
        <>
           <p>Window Width: {width}px</p>
           <p>Window Height: {height}</p>
        </>
    )
}
export default MyComponent;