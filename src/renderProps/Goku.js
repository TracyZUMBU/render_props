// import React, {useState} from 'react'

// // const Goku = ({name}) => {
// //     const [hits, setHits] = useState(0)
//     const [isSaiyan, setHits] = useState(true)

// //     const addOne = () => {
// //         setHits(prevState => {
// //             return prevState + 1
// //         })
// //     }
// //     return (
// //         <div>
// //            <button onClick={addOne}>{name} a frappé {hits}</button>
// //         </div>
// //     )
// // }

// export default Goku

import React, { useState } from "react";

const Goku = ({ name, hits, addOne }) => {
  const [isSaiyan, setIsSaiyan] = useState(true);
  return (
    <div>
      <button onClick={addOne}>
        {name(isSaiyan)} a frappé {hits}
      </button>
    </div>
  );
};

export default Goku;
