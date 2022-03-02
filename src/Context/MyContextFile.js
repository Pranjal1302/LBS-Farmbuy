
import React, { createContext, useState, useEffect } from "react";


export const myContext = createContext();

export let mainData;

const AllState = (props) => {

  const [login, setLogin] = useState(false);


    return (
        <myContext.Provider value={{login,setLogin}}>
            {props.children}
        </myContext.Provider>
    )


}

export default AllState;



