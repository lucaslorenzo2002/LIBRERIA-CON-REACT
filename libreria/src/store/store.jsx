import { createContext, useContext, useState } from "react"


export const AppContext = createContext()

const StoreProvider = ({children}) => {

    const[items, setItems] = useState([]);
    
    const createItem = (item) => {
       const temp = [...items];
       temp.push(item);

       setItems(temp)
    }

    const getItem = (id) => {
        const item = items.find(item => item.id = id)
        return item
    }

    const updateItem = (item) => {
        const index = items.findIndex((i) => i.id === item.id)
        const temp = [...items];

        temp[index] = { ...index }
    }

    return(
        <AppContext.Provider value={{items, createItem, getItem, updateItem}}>{children}</AppContext.Provider>
    )
}

export default StoreProvider
