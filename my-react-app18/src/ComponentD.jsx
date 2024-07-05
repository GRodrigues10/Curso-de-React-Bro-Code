import React, {useContext} from "react";
import { UserContext } from "./ComponentA";


function ComponentD(){
    const user = useContext(UserContext)

    return(<>
    
        

                <div className="box">
                    <h1>Componente D</h1>
                    <h2>{`Hello novamente kkkkkkkkk, ${user}`}</h2>
                </div>
                
           </>)
}

export default ComponentD;