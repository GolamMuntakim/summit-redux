import Counter from "./Counter"
import Stats from "./Stats"


function App() {


  return (
    <>
     <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        simple counter application
      </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter></Counter>
        <Counter></Counter>
        <Stats count={10}></Stats>
      </div>
     </div>
    </>
  )
}

export default App
