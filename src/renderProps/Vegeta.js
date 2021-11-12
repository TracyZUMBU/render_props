// import React, {useState} from 'react'

// const Vegeta = ({name}) => {

//     const [hits, setHits] = useState(0)
//     const [isSaiyan, setIsSaiyan] = useState(true)

//     const addOne = () => {
//         setHits(prevState => {
//             return prevState + 1
//         })
//     }
//     return (
//         <div>
//            <button onClick={addOne}>{name(isSaiyan)} a frappé {hits}</button>
//         </div>
//     )
// }

// export default Vegeta
import React, { useState } from "react";

const Vegeta = ({ name, hits, addOne }) => {
  console.log("name:");
  const [isSaiyan, setIsSaiyan] = useState(true);

  return (
    <div>
      <button onClick={addOne}>
        {name(isSaiyan)} a frappé {hits}
      </button>
    </div>
  );
};

export default Vegeta;
