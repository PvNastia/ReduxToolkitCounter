import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount} from "./counter/counterSlice";
import React, { useState } from 'react';
import './App.css';

function App() {
    const [add, setAdd] = useState('');
const counts = useSelector((state) => state.counter.value)

    const dispatch = useDispatch();
 const handleAddTodo = (e) => {
    e.preventDefault();

      dispatch(incrementByAmount(Number(add)));
      setAdd('');
    
  };
  return (
    <div className="App">
     <h2>Your counter</h2>
     <p>{counts}</p>

     <button onClick={() => dispatch(increment())}>Add 1</button>
     <button onClick={() => dispatch(decrement())}>Sub 1</button>
     <button onClick={() => dispatch(reset())}>Reset value</button>
       <form onSubmit={handleAddTodo}>
         <input 
          value={add} 
          onChange={(e) => setAdd(e.target.value)} 
          placeholder="Скільки додати ?"
        />
        <button type="submit">Додати</button>
       </form>
      
    </div>
  );
}

export default App;
