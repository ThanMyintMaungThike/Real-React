import { useEffect, useMemo } from "react";
import { useState } from "react";

function getData() {
  console.log("Getting data");
  return "data";
}

export default function List() {
  const [data, setData] = useState("");

  useEffect(() => {
    const items = getData();
    setData(items);
  }, []);

  return (
    <div>
      <h1>Data: {data}</h1>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Button</button> */}
    </div>
  );
}
