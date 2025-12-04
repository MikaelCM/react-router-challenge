import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const End = () => {
 const {counter} = useContext(CounterContext);
 
   return (
     <div>
         <h2>END</h2>
         <p>Valor do contador: {counter}</p>
     </div>
   )
}

export default End