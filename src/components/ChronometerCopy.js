import { useState, useEffect } from "react";

function Chronometer() {
  const [count, setCount] = useState(0);

  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    // console.log(`Hello`);
    // setCount(count + 1);
    setCalculation(count * 2);
  }, [count]);

  //   function printHello() {
  //     console.log("Hello");
  //   }

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={countHandler}>Click me</button>
      <p className="text-red-500">Hello</p>
      <p>{calculation}</p>
    </div>
  );
}

export default Chronometer;
