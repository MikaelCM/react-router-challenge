// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 4 - Refatorando um hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const Home = () => {
  // const {counter} = useContext(CounterContext)
  const { counter } = useCounterContext();

  // 5 - Context mais complexo
  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  // 6 - Alterando state complexo
  const setTitleColor = (color: "RED" | "BLUE") => {
    dispatch({type: color});
  }

  return (
    <div>
      <h2 style={{ color: color }}>Home</h2>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando o valor do contexto */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home