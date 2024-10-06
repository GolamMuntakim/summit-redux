import Counter from "./Counter"
import { decrement, increment } from "./Features/Counters/CountersSlice"
import Stats from "./Stats"
import { useDispatch, useSelector } from "react-redux"


function App() {
  const counters = useSelector((state)=> state.counters)
  const dispatch = useDispatch()
const handleIncrement = (id) =>{
  dispatch(increment(id))
}
const handleDecrement = (id) =>{
 dispatch(decrement(id))
}
const totalCount = counters.reduce((sum, current)=> sum + current.value,0)
  return (
    <>
     <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        simple counter application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
       {
        counters.map((counter) =>(<Counter count={counter.value} key={counter.id} handleIncrement={()=>handleIncrement(counter.id)} handleDecrement={()=>handleDecrement(counter.id)}></Counter>))
       }
        <Stats count={totalCount}></Stats>
      </div>
     </div>
    </>
  )
}

export default App
