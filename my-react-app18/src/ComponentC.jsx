import React, {useContext} from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD"
function ComponentC(){
    const user = useContext(UserContext)
    return(<>
    
                <div className="box">
                    <h1>Componente C</h1>
                    <h2>{`Hello novamente kkkk, ${user}`}</h2>
                    <ComponentD></ComponentD>
                </div>
                
           </>)
}

export default ComponentC;