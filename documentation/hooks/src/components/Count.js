import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  );
}
export default Count