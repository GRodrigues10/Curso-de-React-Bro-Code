import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB"

export const UserContext = createContext()

function ComponentA(){

    const [user, setUser] = useState('Gabriel');

    return(<>
    
                <div className="box">
                    <h1>Componente A</h1>
                    <h2>{`Hello, ${user}`}</h2>
                    <UserContext.Provider value={user}>
                        <ComponentB user={user}></ComponentB>
                    </UserContext.Provider>
                    
                </div>

                
           </>)
}

export default ComponentA;