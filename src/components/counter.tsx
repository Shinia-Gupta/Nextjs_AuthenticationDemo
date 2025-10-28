"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
// const {isLoaded, userId, sessionId, getToken} = useAuth();

//As we have conflicting property names in both useAuth and useUser hooks, we will use one at a time.
const {isLoaded, isSignedIn,user}=useUser();

// if(!isLoaded|| !userId){
//     return null;
// }

//OR

if(!isLoaded|| !isSignedIn){
    return null;
}

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button><br/>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}