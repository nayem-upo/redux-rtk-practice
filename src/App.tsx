import { decrement, increment, incrementByValue } from "./redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "./redux/hook"

function App() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <div className="flex justify-center items-center gap-5 my-auto h-screen">
      <div className="flex justify-center items-center gap-5 border-purple-400 rounded-md border-2 p-6 bg-slate-100">
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-orange-500 text-xl font-semibold text-white hover:bg-orange-600 duration-150">Decrement</button>
        <h1 className="text-3xl font-semibold text-center w-12">{count}</h1>
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white hover:bg-lime-600 duration-150">Increment</button>
        <button onClick={() => dispatch(incrementByValue(5))} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white hover:bg-lime-600 duration-150">Increment by 5</button>
      </div>
    </div>
  )
}

export default App
