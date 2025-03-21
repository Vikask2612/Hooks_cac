// as
// definition of hooks: special types of functions 
import React from 'react'
import { useState } from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)

    function addValue(){
      setCounter(counter+1)
    }

    function removeValue(){
      setCounter(counter-1)
    }

  return (
    <div>
        <h1>Chai aur react</h1>
        <h2>Current value is: {counter}</h2>

        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>
    </div>
  )
}

export default App