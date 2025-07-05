import { useState } from "react";
import { getDefaultValueType, motion } from "framer-motion";

export default function Counter() {
 const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold text-purple-600">{count}</h1>

      <div className="flex gap-4">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-yellow-400  px-4 py-2 rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-purple-600 px-4 text-white py-2 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </motion.button>
      </div>
     
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="bg-gray-200 px-4 py-2 rounded-lg"
          onClick={() => setCount(0)}
        >
         Reset
          </motion.button>
        
        
    </div>
    
  );
}


