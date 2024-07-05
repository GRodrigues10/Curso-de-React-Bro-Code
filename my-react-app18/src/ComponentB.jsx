import React, {useContext} from "react";
import { UserContext } from "./ComponentA";
import ComponentC from "./ComponentC"

function ComponentB(){
    const user = useContext(UserContext)
    return(<>
    
                <div className="box">
                    <h1>Componente B</h1>
                    <h2>{`Hello novamente, ${user}`}</h2>
                    <ComponentC></ComponentC>
                </div>
                
           </>)
}

export default ComponentB;