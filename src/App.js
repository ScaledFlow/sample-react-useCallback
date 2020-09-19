// https://www.youtube.com/watch?v=_AyFP5s69N4
// https://reactgo.com/react-get-input-value/

import React, { useState, useCallback } from 'react'
import List from './List.js';

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // without useCallback, getItems is called everything Toggle theme is clicked
  // useCallback returns entire fuction where useMemo returns value
  const getItems = useCallback((incrementor) => {
    // return [number, number + 1, number + 2]
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#00FF00',
    color: dark ? '#FFF' : '#333'
  }

  console.log("value of dark: " + dark);

return (
  <div style={theme}>
    {/* {console.log(theme)} */}
    <label>Test theme : </label>
    <input
    type='number'
    value={number}
    onChange={e => setNumber(parseInt(e.target.value))}
    />
    <button onClick={() => setDark(prevDark => !prevDark)}>
      Toggle theme
    </button>
    <List getItems={getItems} />
  </div>
  )
}




// import React, { useState } from 'react'
// import List from './List.js';


// // without useCallback, getItems is call everything Toggle theme is clicked
// export default function App() {
//   const [number, setNumber] = useState(1);
//   const [dark, setDark] = useState(false);

//   const getItems = () => {
//     return [number, number + 1, number + 2]
//   }

//   const theme = {
//     backgroundColor: dark ? '#333' : '#00FF00',
//     color: dark ? '#FFF' : '#333'
//   }

//   console.log("value of dark: " + dark);

// return (
//   <div style={theme}>
//     {/* {console.log(theme)} */}
//     <label>Test theme : </label>
//     <input
//     type='number'
//     value={number}
//     onChange={e => setNumber(parseInt(e.target.value))}
//     />
//     <button onClick={() => setDark(prevDark => !prevDark)}>
//       Toggle theme
//     </button>
//     <List getItems={getItems} />
//   </div>
//   )
// }

