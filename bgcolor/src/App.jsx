import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  
  return (
     <div className='w-full duration-200' 
     style={{backgroundColor: color}}>
      {/* <h2>hello</h2> */}
      <div className="fixed d-flex flex-wrap justify-center px-2">
        <div className="flex flex-wrap justify-center g-4 shadow-lg bg-white px-3 py-3 rounded-2">
          <button
            onClick={() => setColor("red")}
            className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}>
            Red
          </button>
          <button 
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style={{backgroundColor: "yellow"}}>
            Yellow
          </button>
          <button 
          onClick={() => setColor("green")}
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style={{backgroundColor: "green"}}>
            Green
          </button>
          <button 
          onClick={() => setColor("black")}
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style={{backgroundColor: "black"}}>
            black
          </button>
          <button 
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-3 rounded-full text-white shadow-lg'
          style={{backgroundColor: "blue"}}>
            Blue
          </button>
        </div>
      </div>
     </div>

  )
}

export default App
