import { useEffect, useState } from "react";

function Test() {
  let value = 0;
  const [state, setState] = useState(0);

  const handleButtonClick = () => {
    value += 1;

    setState((prev) => ++prev);
  }

  console.log(1);

  useEffect(() => {
    console.log(3);

    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
      console.log(window.scrollY);
    })
    };
  }, []);

  return (
    <>
      <button onClick={handleButtonClick}>버튼</button>
      <div>value: {value}</div>
      {console.log(2)}
      <div>state: {state}</div>
    </>
  );
}

export default Test;