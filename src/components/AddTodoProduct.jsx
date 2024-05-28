import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodoProduct } from '../features/addProduct/addProductSlice'

function AddTodoProduct() {

    const [input, setInput] = useState('')
    const [input1, setInput1] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodoProduct(input,input1))
        setInput('');
        setInput1('')

    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
      required
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
      required
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo Product
      </button>
    </form>
  )
}

export default AddTodoProduct